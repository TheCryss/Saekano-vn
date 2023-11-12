import React from 'react'
import { Panel } from '../../Components/Panel'
import { useState, useEffect } from 'react'
import data from '../../script/scene_1.json'
import { useGame } from '../../Context/GameContext'

export const Dialog_2D = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const onClick = () => {
        const result = nextContent();
        if (!result.success) {
            nextScene();
            console.log("next scene");
        }
    }


    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")
    const sendDialog = () => {
        const keys = Object.keys(getActualContent())
        switch (keys[0]) {
            case "action":
                return character
                break;
            case "character":
                setCharacter(getActualContent().character)
                if (keys[1] == "speech") {
                    setDialog(getActualContent().speech)
                } else {
                    setDialog(getActualContent().thought)
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        sendDialog()
    }, [getActualContent])

    return (
        <>
            <div className="h-screen w-full bg-[url('/assets/scenes/1.png')] bg-cover">
                <div className='flex flex-col h-screen justify-end'>
                    <Panel dialog={dialog} change={onClick} character={character} />
                </div>
            </div>
        </>
    )
}
