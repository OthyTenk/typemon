import prisma from "@/libs/db"
import { NextResponse } from "next/server"

const CounterTime = 5000

const Beginner = 60
const Medium = 120
const Master = 180

export const POST = async (request: Request) => {
  const body = await request.json()
  const { inputCode, userId } = body
  const gameCode = inputCode as string

  if (!gameCode || !userId) {
    return new NextResponse("Invalid User", { status: 401 })
  }

  const existingPlayer = await prisma.gamePlayer.findFirst({
    where: {
      gameCode: gameCode,
      playerId: userId,
    },
  })

  if (!existingPlayer) {
    await prisma.gamePlayer.create({
      data: {
        gameCode: gameCode,
        playerId: userId,
      },
    })
  }

  const allPlayers = await prisma.gamePlayer.findMany({
    where: {
      gameCode: gameCode,
    },
  })

  return NextResponse.json({ players: allPlayers })
}
