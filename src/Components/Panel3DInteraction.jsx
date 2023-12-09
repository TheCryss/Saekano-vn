import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increaseNPCInteraction } from "../store/slicers/GameStatusSlice"


export const Panel3DInteraction = () => {
    const dispatch = useDispatch()
    const gameStatus = useSelector(state => state.gameStatus)
    const [dialog, setDialog] = useState('...')
    const [character, setCharacter] = useState('...')

    const { isBifurcation, bifurcation, playerBifurcations, npcInteractions, finishedScene } = useSelector(state => state.gameStatus)
    const { room, interaction } = useSelector(state => state.room)

    const checkInteraction = () => {
        if (finishedScene && interaction) {
            if (room.utahaInteraction) { dispatch(increaseNPCInteraction(0)); playEvent(0) }
            else if (room.eririInteraction) { dispatch(increaseNPCInteraction(1)); playEvent(1) }
            else if (room.megumiInteraction) { dispatch(increaseNPCInteraction(2)); playEvent(2) }
            else if (room.tomoyaInteraction) { dispatch(increaseNPCInteraction(3)); playEvent(3) }
        }
    }

    const playEvent = (character) => {
        const { actualScriptScenes, actualSceneIndex } = gameStatus
        const actualScene = actualScriptScenes[actualSceneIndex]
        let actualContent = null;

        if ("npc_interactions" in actualScene) {
            if (isBifurcation) {
                const npcInteractionsContent = actualScene.npc_interactions
                const playerBifurcation = playerBifurcations[bifurcation - 1]
                const characterInteraction = npcInteractions[character]

                actualContent = npcInteractionsContent[playerBifurcation][character][characterInteraction]
            } else {
                const npcInteractionsContent = actualScene.npc_interactions
                const characterInteraction = npcInteractions[character]

                actualContent = npcInteractionsContent[character][characterInteraction]
            }

            if (actualContent) {
                setCharacter(actualContent.character)
                setDialog(actualContent.speech)
            } else console.log("No more interactions with this character")
        }
    }

    useEffect(() => {
        checkInteraction()
    }, [room, interaction])

    return (
        <>
            <div className='absolute z-20 w-full bottom-0'>
                <div className="flex  justify-center">
                    <div className='w-1/2'>
                        <div className=' mb-3 h-10  flex items-center justify-center rounded-md  bg-[rgba(242,198,245,0.75)] w-40 border-[#C6F5EB] text-pink-950 border-4 select-none font-bold' >
                            <div >
                                {character}
                            </div>
                        </div>
                        <div className='w-full bg-[rgba(242,198,245,0.75)] border-[#C6F5EB] text-pink-950 border-4 text-md mb-8 h-20 rounded-lg items-center  flex justify-center select-none'>
                            {dialog}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}