"use client"

import { socket } from "@/libs/socket"
import useGame from "@/store/useGame"
import useGameResult from "@/store/useGameResult"
import useGameSession from "@/store/useGameSession"
import useGlobal from "@/store/useGlobal"
import axios from "axios"
import { FC, useEffect } from "react"
import CreateGame from "./CreateGame"
import GameBoard from "./GameBoard"

interface GameModeProps {
  userName: string
}

const GameMode: FC<GameModeProps> = ({ userName }) => {
  const {
    setUserInfo,
    currentUserId,
    currentUser,
    setGameCode,
    code: gameCode,
    creatorCode,
    reset,
    joinCode,
    setJoinCode,
  } = useGame()
  const { stopType } = useGlobal()

  useEffect(() => {
    if (currentUser && currentUser?.length > 0 && currentUserId.length > 0)
      return

    setUserInfo(userName, `${userName.replace(" ", "-")}-${Date.now()}`)
  }, [userName, setUserInfo, currentUser, currentUserId])

  useEffect(() => {
    if (!gameCode) return

    // Connect and join the game room
    socket.connect()
    socket.emit("join-game", gameCode)

    const onHasJoinedGame = (data: { gameCode: string }) => {
      setGameCode(data.gameCode)
      setJoinCode(data.gameCode)
    }

    socket.on("has-joined-game", onHasJoinedGame)

    return () => {
      socket.off("has-joined-game", onHasJoinedGame)
      socket.emit("leave-game", gameCode)
      socket.disconnect()
    }
  }, [gameCode, setGameCode, setJoinCode])

  const onLeaveGame = async () => {
    const { clearGameData } = useGameSession.getState()
    const { reset: resetGameResult } = useGameResult.getState()

    await axios
      .post("/api/game/leave", {
        userId: currentUserId,
        gameCode: gameCode || creatorCode,
      })
      .then(() => {
        // Clear all game-related state
        reset()
        stopType()
        clearGameData()
        resetGameResult()
      })
  }

  return (
    <div className="max-w-4xl mx-auto p-3">
      <div className="flex">
        <p className="p-2">
          You:{" "}
          <span className="font-semibold text-yellow-600">{currentUser}</span>
        </p>

        {(gameCode.length > 0 || creatorCode.length > 0) && (
          <button
            onClick={onLeaveGame}
            className="rounded-lg bg-neutral-600 px-4">
            Logout game
          </button>
        )}
      </div>
      {joinCode.length > 0 ? <GameBoard /> : <CreateGame />}
    </div>
  )
}

export default GameMode
