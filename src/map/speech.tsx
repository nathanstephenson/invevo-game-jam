import { useMemo } from "react"
import { useGameState } from "../game-state"

export const Speech = () => {
    const { islandToFind } = useGameState()

    const speeches = [
        `"Listen up, crew! Today, we're setting sail for ${islandToFind.name}. It's going to be a rough journey, but the treasure awaits those who dare!"`,
        `"All hands on deck! We're charting a course for ${islandToFind.name}. The winds are fierce, but fortune favors the brave!"`,
        `"Ready the crew, we're bound for ${islandToFind.name}. There will be dangers ahead, but the rewards will be worth it!"`,
        `"Hoist the anchor! Our next stop is ${islandToFind.name}. Brace yourselves, it's going to be a bumpy ride!"`,
        `"Prepare the sails, we're off to ${islandToFind.name}. There are whispers of danger, but also untold riches!"`,
        `"Set the course for ${islandToFind.name}. We'll need every bit of courage, for this journey won't be easy!"`,
        `"Make way, crew! We're heading towards ${islandToFind.name}. Adventure and treasure lie just beyond the horizon!"`,
        `"We're off to ${islandToFind.name}, mates! Keep your eyes sharp and your spirits high. It's going to be a wild ride!"`,
        `"Chart a course straight to ${islandToFind.name}. The sea is unforgiving, but so are we. Let's find that treasure!"`,
        `"Our destination is set: ${islandToFind.name}. Let nothing stand in our way—glory and riches await!"`
    ]

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const selectedSpeech = useMemo(() => speeches[Math.floor(Math.random() * speeches.length)], [islandToFind])

    return (
        <div className="text-left absolute w-full h-full mt-32 ml-10 flex items-start">
            <div className="mr-4 text-center">
                <img src="./captain.png" className="w-50 h-20" alt="Captain" />
                <span className="text-lg font-serif italic text-blue-900 mt-2 block">Captain Ghost Beard</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 border-2 border-gray-300 relative">
                <p className="text-xl font-medium text-gray-800">{selectedSpeech}</p>
            </div>
        </div>
    )
}
