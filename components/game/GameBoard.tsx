"use client"

import axios from "axios"
import { useEffect, useState } from "react"

import { socket } from "@/libs/socket"
import useGame from "@/store/useGame"
import useGameSession from "@/store/useGameSession"
import useGlobal from "@/store/useGlobal"
import { StartGame } from "@/types"
import Typing from "./Typing"

const GameBoard = () => {
  const { code: gameCode, currentUserId, creatorCode } = useGame()
  const { startType } = useGlobal()
  const { sentence, players, startTime, setGameData, clearGameData } =
    useGameSession()

  const [showCounter, setShowCounter] = useState<number | undefined>(undefined)

  const isCreator = gameCode === creatorCode

  useEffect(() => {
    if (!gameCode) return

    const onHasJoinedGame = (data: { gameCode: string; players: any[] }) => {
      if (data.players) {
        const mappedPlayers = data.players.map((p: any) => ({
          id: p.playerId,
          name: p.playerId,
          charPosition: 0,
        }))

        if (!sentence) {
          setGameData({
            sentence: "",
            players: mappedPlayers,
            startTime: 0,
          })
        }
      }
    }

    const onGameStartsIn = (startGame: StartGame) => {
      if (!startGame) return

      const {
        startTime: newStartTime,
        players: newPlayers,
        sentence: newSentence,
      } = startGame
      setGameData({
        startTime: newStartTime,
        players: newPlayers,
        sentence: newSentence,
      })
    }

    socket.on("has-joined-game", onHasJoinedGame)
    socket.on("game-starts-in", onGameStartsIn)

    return () => {
      socket.off("has-joined-game", onHasJoinedGame)
      socket.off("game-starts-in", onGameStartsIn)
    }
  }, [gameCode, sentence, setGameData])

  useEffect(() => {}, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined

    if (startTime > 0) {
      interval = setInterval(() => {
        const remaining = startTime - new Date().getTime()
        if (remaining > 0) {
          setShowCounter(Math.max(Math.ceil(remaining / 1000), 1))
        } else {
          setShowCounter(0)
          clearInterval(interval)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [startTime])

  useEffect(() => {
    showCounter === 0 && startType()
  }, [showCounter, startType])

  const onStartGame = async () => {
    await axios
      .post("/api/game/start", {
        gameCode,
        userId: currentUserId,
      })
      .then((res) => {
        socket.emit("game-start", {
          ...res.data,
          gameCode,
        })
      })
  }

  const renderedCountDown = () => {
    return showCounter && showCounter > 0 ? (
      <div className="text-6xl font-bold text-yellow-500 animate-pulse">
        {showCounter}
      </div>
    ) : showCounter === 0 ? (
      <div className="text-4xl font-bold text-green-500">GO!</div>
    ) : null
  }

  if (!sentence) {
    return (
      <div className="flex flex-col items-center space-y-6 mt-10">
        <h2 className="text-2xl font-bold">Lobby: {gameCode}</h2>
        <div className="w-full max-w-md bg-neutral-800 rounded-lg p-4">
          <h3 className="text-xl mb-4">Players ({players.length}/4)</h3>
          <ul className="space-y-2">
            {players.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between bg-neutral-700 p-2 rounded">
                <span>{p.name}</span>
                {p.id === currentUserId && (
                  <span className="text-xs bg-yellow-600 px-2 py-1 rounded">
                    You
                  </span>
                )}
              </li>
            ))}
            {players.length === 0 && (
              <li className="text-neutral-500 italic">
                Waiting for players...
              </li>
            )}
          </ul>
        </div>

        {isCreator && players.length >= 2 && (
          <button
            onClick={onStartGame}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors">
            Start Game
          </button>
        )}
        {isCreator && players.length < 2 && (
          <p className="text-neutral-400">
            Waiting for at least 1 more player to start...
          </p>
        )}
        {!isCreator && (
          <p className="text-neutral-400 animate-pulse">
            Waiting for host to start...
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="space-y-3 flex flex-col items-center">
        {renderedCountDown()}
        <Typing
          currentText={sentence}
          currentUserId={currentUserId}
          isCountdownActive={showCounter !== undefined && showCounter !== 0}
        />
      </div>
    </div>
  )
}

export default GameBoard
