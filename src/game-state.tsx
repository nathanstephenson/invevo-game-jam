import { createContext, ReactNode, useContext, useState } from "react"

type GameState = {
    grid: {
        x: { get: number; set: (x: number) => void }
        y: { get: number; set: (y: number) => void }
    }
    islands: {
        gridPosition: number
        island: string
    }[]
}

const GameStateContext = createContext<(GameState & { reset: () => void }) | undefined>(undefined)
export const useGameState = () => {
    const context = useContext(GameStateContext)
    if (!context) {
        throw new Error("useGameState must be used within a GameStateProvider")
    }
    return context
}
export const GameStateProvider = ({ children }: { children: ReactNode }) => {
    const [x, setX] = useState(1)
    const [y, setY] = useState(1)
    const reset = () => {
        setX(defaultGameState.grid.x)
        setY(defaultGameState.grid.y)
    }

    return (
        <GameStateContext.Provider
            value={{
                grid: { x: { get: x, set: setX }, y: { get: y, set: setY } },
                islands: defaultGameState.islands,
                reset: reset
            }}
        >
            {children}
        </GameStateContext.Provider>
    )
}

const defaultGameState = {
    grid: {
        x: 1,
        y: 1
    },
    islands: [
        {
            gridPosition: Math.floor(Math.random() * 20 * 10),
            island: "./island To Find.png"
        },
        {
            gridPosition: Math.floor(Math.random() * 20 * 10),
            island: "./island To Find two.png"
        }
    ]
}