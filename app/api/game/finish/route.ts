import prisma from "@/libs/db"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import authOptions from "@/libs/authOptions"

export const POST = async (request: Request) => {
  const body = await request.json()
  const { result, gameCode } = body

  if (!gameCode) {
    return new NextResponse("Bad request", { status: 500 })
  }

  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  await prisma.myHistory.create({
    data: {
      wpm: result.WPM,
      cpm: result.CPM,
      mistakes: result.mistakes,
      time: result.time,
      userEmail: session.user.email,
      language: "en",
    },
  })

  return NextResponse.json("ok")
}
