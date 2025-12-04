import { IResultStatisticStore } from "@/hooks/useResultStatistic"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface GameResultStore {
  players: IResultStatisticStore[]
}

interface IAction {
  updatePlayer: (data: IResultStatisticStore) => void
  setPlayers: (players: IResultStatisticStore[]) => void
  reset: () => void
}

const useGameResult = create(
  persist<GameResultStore & IAction>(
    (set) => ({
      players: [],

      updatePlayer: (data: IResultStatisticStore) =>
        set((state) => {
          const existingPlayerIndex = state.players.findIndex(
            (p) => p.currentUserEmail === data.currentUserEmail
          )

          if (existingPlayerIndex !== -1) {
            const newPlayers = [...state.players]
            newPlayers[existingPlayerIndex] = data
            return { players: newPlayers }
          }

          return { players: [...state.players, data] }
        }),

      setPlayers: (players: IResultStatisticStore[]) =>
        set({
          players,
        }),

      reset: () =>
        set({
          players: [],
        }),
    }),
    {
      name: "typemon-game-result-storage",
    }
  )
)

export default useGameResult
