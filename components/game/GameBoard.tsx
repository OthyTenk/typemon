"use client"

import { useEffect, useState } from "react"

import { pusherClient } from "@/libs/pusher"
import useGame from "@/store/useGame"
import { Player, StartGame } from "@/types"
import Typing from "./Typing"

const GameBoard = () => {
  const { setGameCode, code: gameCode, currentUserId } = useGame()
  const [startTime, setStartTime] = useState(0)
  const [showCounter, setShowCounter] = useState(0)

  const [player, setPlayer] = useState<Player>()
  const [sentence, setSentence] = useState("")

  useEffect(() => {
    const channel = pusherClient.subscribe("game")
    channel.bind("game-starts-in", (startGame: StartGame) => {
      if (!startGame) return

      const { startTime, creator, guest, sentence } = startGame
      setStartTime(startTime)

      const opponent = creator.id === currentUserId ? guest : creator
      setPlayer(opponent)
      setSentence(sentence)
    })

    return () => {
      pusherClient.unsubscribe("game")
      pusherClient.unbind("game-starts-in")
    }
  }, [
    gameCode,
    setGameCode,
    setSentence,
    setPlayer,
    setStartTime,
    currentUserId,
  ])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined

    if (startTime <= 0) {
      clearInterval(interval)
      return
    }

    interval = setInterval(() => {
      const remaining = startTime - new Date().getTime()
      if (remaining > 0) {
        setShowCounter(Math.max(Math.ceil(remaining / 1000), 1))
      } else {
        setShowCounter(0)
        setStartTime(0)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime])

  return (
    <div>
      <div className="space-y-3">
        <div className="font-semibold px-2">
          Player: <span className=" text-orange-500">{player?.name}</span>
        </div>

        {showCounter > 0 ? <span>{showCounter}</span> : <span>GO!</span>}

        <Typing currentText={sentence} currentUserId={currentUserId} />
      </div>
    </div>
  )
}

export default GameBoard