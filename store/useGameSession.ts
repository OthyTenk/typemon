import { Player } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface GameSessionStore {
  sentence: string
  players: Player[]
  startTime: number
  isGameActive: boolean
}

interface IActions {
  setGameData: (data: {
    sentence: string
    players: Player[]
    startTime: number
  }) => void
  setIsGameActive: (isActive: boolean) => void
  clearGameData: () => void
}

const INITIAL_STATE: GameSessionStore = {
  sentence: "",
  players: [],
  startTime: 0,
  isGameActive: false,
}

const useGameSession = create(
  persist<GameSessionStore & IActions>(
    (set) => ({
      sentence: INITIAL_STATE.sentence,
      players: INITIAL_STATE.players,
      startTime: INITIAL_STATE.startTime,
      isGameActive: INITIAL_STATE.isGameActive,

      setGameData: ({ sentence, players, startTime }) =>
        set({
          sentence,
          players,
          startTime,
          isGameActive: true,
        }),

      setIsGameActive: (isActive) =>
        set({
          isGameActive: isActive,
        }),

      clearGameData: () =>
        set({
          sentence: INITIAL_STATE.sentence,
          players: INITIAL_STATE.players,
          startTime: INITIAL_STATE.startTime,
          isGameActive: INITIAL_STATE.isGameActive,
        }),
    }),
    {
      name: "typemon-game-session-storage",
    }
  )
)

export default useGameSession
