import prisma from "@/libs/db"
import { Player } from "@/types"
import { NextResponse } from "next/server"

const CounterTime = 5000

const Beginner = 60
const Medium = 120
const Master = 180

export const POST = async (request: Request) => {
  const body = await request.json()
  const { gameCode, userId } = body

  if (!gameCode || !userId) {
    return new NextResponse("Invalid Request", { status: 401 })
  }

  const allPlayers = await prisma.gamePlayer.findMany({
    where: {
      gameCode: gameCode,
    },
  })

  if (allPlayers.length < 2) {
    return new NextResponse("Not enough players", { status: 400 })
  }

  const { sentence } = await prisma.typeText.findFirstOrThrow({
    where: {
      language: "en",
    },
  })

  const players: Player[] = allPlayers.map((p) => ({
    id: p.playerId,
    name: p.playerId,
    charPosition: 0,
  }))

  const startsAt = new Date().getTime() + CounterTime

  return NextResponse.json({
    startTime: startsAt,
    sentence: sentence.substring(0, Beginner),
    players,
  })
}
