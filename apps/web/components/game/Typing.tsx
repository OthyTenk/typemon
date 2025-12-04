"use client"

import { FC, useEffect, useMemo, useRef, useState } from "react"

import useGlobal from "@/store/useGlobal"

import Cursor from "@/components/Cursor"
import TimeTick from "@/components/TimeTick"
import { IResultStatisticStore } from "@/hooks/useResultStatistic"
import useTyping from "@/hooks/useTyping"
import { socket } from "@/libs/socket"
import useGame from "@/store/useGame"
import useGameResult from "@/store/useGameResult"
import useGameResultModal from "@/store/useGameResultModal"
import useGameSession from "@/store/useGameSession"
import axios from "axios"

interface ITypingProps {
  currentText: string
  currentUserId: string
  isCountdownActive?: boolean
}

const Typing: FC<ITypingProps> = ({
  currentText,
  currentUserId,
  isCountdownActive = false,
}) => {
  const { stopType, isTyping: globalIsTyping } = useGlobal()

  const activeLetterRef = useRef<HTMLSpanElement>()
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  const [gameFinish, setGameFinish] = useState(false)
  const { players, updatePlayer, reset: resetGameResult } = useGameResult()
  const gameResultModal = useGameResultModal()
  const { code: gameCode, reset } = useGame()
  const { clearGameData } = useGameSession()

  const [opponentPositions, setOpponentPositions] = useState<
    Record<string, number>
  >({})

  const onSendActiveCharPosition = async (position: number) => {
    socket.emit("typing", {
      position: position,
      userId: currentUserId,
      gameCode,
    })
  }

  const {
    inputRef,
    inpFieldValue,
    charIndex,
    mistakes,
    isTyping,
    tickTime,
    wpm,
    cpm,
    reset: resetTyping,
    handleTyping,
  } = useTyping({
    currentText,
    mode: "stopwatch",
    onType: (index, value) => {
      activeLetterRef?.current?.scrollIntoView({ behavior: "smooth" })
      onSendActiveCharPosition(index)
    },
    onFinish: async () => {
      setGameFinish(true)
      gameResultModal.onOpen()

      const currentPlayer = players.find(
        (p) => p.currentUserEmail === currentUserId
      )

      const newStats: IResultStatisticStore = {
        ...currentPlayer!,
        currentUserEmail: currentUserId,
        time: tickTime,
        mistakes: mistakes,
        WPM: wpm,
        CPM: cpm,
      }
      updatePlayer(newStats)

      socket.emit("game-finish", {
        ...newStats,
        gameCode,
      })

      await axios
        .post("/api/game/finish", {
          result: newStats,
          gameCode,
        })
        .catch((err) => {
          console.error(err)
        })
    },
  })

  useEffect(() => {
    if (!gameCode) return

    const onGameRestart = (startGame: any) => {
      if (gameFinish || gameResultModal.isOpen) {
        resetTyping()
        resetGameResult()
        setGameFinish(false)

        if (gameResultModal.isOpen) {
          gameResultModal.onClose()
        }
      }
    }

    socket.on("game-starts-in", onGameRestart)

    return () => {
      socket.off("game-starts-in", onGameRestart)
    }
  }, [gameCode, gameFinish, resetTyping, resetGameResult, gameResultModal])

  useEffect(() => {
    if (isTyping) {
      const currentPlayer = players.find(
        (p) => p.currentUserEmail === currentUserId
      )
      const newStats: IResultStatisticStore = {
        ...currentPlayer!,
        currentUserEmail: currentUserId,
        time: tickTime, // We might want to update time in store?
        mistakes: mistakes,
        WPM: wpm,
        CPM: cpm,
      }
      updatePlayer(newStats)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpm, wpm, mistakes, isTyping, currentUserId, tickTime])

  useEffect(() => {
    if (!isTyping && globalIsTyping) {
      stopType()
    }
  }, [isTyping, globalIsTyping, stopType])

  const typingText = useMemo(() => {
    return Array.from(currentText).map((letter, index) => {
      let resultColor = ""
      if (index < inpFieldValue.length) {
        resultColor =
          letter === inpFieldValue[index]
            ? "text-green-400"
            : letter === " "
            ? "bg-red-500"
            : "text-red-500"
      }

      return (
        <span
          key={index}
          ref={(element) => {
            letterRefs.current[index] = element
          }}
          className={`${resultColor}`}>
          {letter}
        </span>
      )
    })
  }, [currentText, inpFieldValue])

  useEffect(() => {
    activeLetterRef.current = letterRefs.current[charIndex] || undefined
  }, [charIndex])

  useEffect(() => {
    if (!gameCode) return

    const opponentDisconnected = (data: { gameCode: string }) => {
      if (gameCode === data.gameCode) {
        reset()
        stopType()
        resetGameResult()
        resetTyping()
        clearGameData()

        if (gameResultModal.isOpen) {
          gameResultModal.onClose()
        }
      }
    }

    const opponentPosition = (data: { position: number; userId: string }) => {
      if (!data || data.userId === currentUserId) {
        return
      }
      setOpponentPositions((prev) => ({
        ...prev,
        [data.userId]: data.position,
      }))
    }

    const gameFinish = (data: IResultStatisticStore) => {
      if (data.currentUserEmail === currentUserId) {
        return
      }

      updatePlayer(data)

      if (!gameResultModal.isOpen) {
      }
    }

    socket.on("opponent-position", opponentPosition)
    socket.on("opponent-disconnected", opponentDisconnected)
    socket.on("game-finish", gameFinish)

    return () => {
      socket.off("opponent-position", opponentPosition)
      socket.off("opponent-disconnected", opponentDisconnected)
      socket.off("game-finish", gameFinish)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentUserId,
    gameCode,
    reset,
    stopType,
    gameResultModal,
    resetGameResult,
    resetTyping,
    currentText,
  ])

  const setInputFocus = () => {
    return inputRef.current?.focus()
  }

  useEffect(() => {
    document.addEventListener("keydown", setInputFocus)
    return () => document.removeEventListener("keydown", setInputFocus)
  }, [setInputFocus])

  return (
    <>
      <div className="p-0 my-10 min-w-full flex flex-col justify-center items-center bg-[#1E1E1E]">
        <div
          className={`md:max-w-5xl p-5 md:p-7 w-[calc(100% - 10px)] md:rounded-3xl ${
            isTyping ? "bg-[#1E1E1E]" : "bg-neutral-800"
          }  md:shadow-lg`}>
          <div className="flex flex-1 mt-28 md:mt-0" />

          <TimeTick timeLeft={tickTime} />
          <div className="p-2">
            <input
              ref={inputRef}
              autoComplete="off"
              type="text"
              className="md:-z-10 absolute caret-transparent opacity-10 outline-none text-transparent h-28 border-transparent bg-transparent"
              autoFocus
              value={inpFieldValue}
              tabIndex={-1}
              onChange={handleTyping}
              disabled={isCountdownActive}
            />
            <div className="relative pb-8 text-2xl text-neutral-300 font-mono">
              {/* Creator (Me) */}
              <Cursor activeLetterRef={activeLetterRef} />

              {/* Opponents */}
              {Object.entries(opponentPositions).map(([userId, pos]) => {
                const ref = { current: letterRefs.current[pos] || undefined }
                return (
                  <Cursor
                    key={userId}
                    activeLetterRef={ref}
                    isOpponent={true}
                  />
                )
              })}

              <div className="whitespace-break-spaces leading-8 h-24 overflow-hidden">
                {typingText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Typing
