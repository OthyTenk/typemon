import { createServer } from "http"
import { parse } from "url"
import next from "next"
import { Server, Socket } from "socket.io"

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url!, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("internal server error")
    }
  })

  const io = new Server(httpServer)

  io.on("connection", (socket: Socket) => {
    console.log("Client connected", socket.id)

    socket.on("join-game", (gameCode: string) => {
      socket.join(gameCode)
      console.log(`Socket ${socket.id} joined game ${gameCode}`)
    })

    socket.on("leave-game", (gameCode: string) => {
      socket.leave(gameCode)
      console.log(`Socket ${socket.id} left game ${gameCode}`)
    })

    socket.on("typing", (data: any) => {
      // Broadcast to everyone in the room except the sender
      socket.to(data.gameCode).emit("opponent-position", data)
    })

    socket.on("game-start", (data: any) => {
      io.to(data.gameCode).emit("game-starts-in", data)
    })

    socket.on("player-joined", (data: any) => {
      io.to(data.gameCode).emit("has-joined-game", data)
    })

    socket.on("game-finish", (data: any) => {
      socket.to(data.gameCode).emit("game-finish", data)
    })

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id)
    })
  })

  httpServer
    .once("error", (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
