import prisma from "@/libs/db"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  const body = await request.json()
  const { userId } = body

  if (!userId) {
    return new NextResponse("Invalid User", { status: 401 })
  }

  const game = await prisma.gamePlayer.findFirst({
    select: {
      gameCode: true,
    },
    where: {
      playerId: userId,
    },
  })

  if (!game) {
    return new NextResponse("No Game found", { status: 200 })
  }
  const { gameCode } = game

  await prisma.gamePlayer.deleteMany({
    where: {
      gameCode: gameCode,
    },
  })

  return NextResponse.json("ok")
}
