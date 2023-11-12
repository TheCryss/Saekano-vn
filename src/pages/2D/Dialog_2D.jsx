import React from 'react'
import { Panel } from '../../Components/Panel'
import { useState, useEffect } from 'react'
import data from '../../script/scene_1.json'
import { useGame } from '../../Context/GameContext'
import { useNavigate } from 'react-router-dom'

export const Dialog_2D = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const onClick = () => {
        const result = nextContent();
        if (!result.success) {
            const { success } = nextScene();
            if (!success) {
                console.log("no more scenes");
            } else {
                console.log("next scene");
            }

        }
    }


    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")
    const navigate = useNavigate()
    const sendDialog = () => {
        const { is3D, content } = getActualContent()
        if (is3D) {
            console.log("is3D")
            navigate(`/${content}`) // Here you put the 3D scene (content)
        }
        else {
            const keys = Object.keys(content)
            switch (keys[0]) {
                case "action":
                    return character
                    break;
                case "character":
                    setCharacter(content.character)
                    if (keys[1] == "speech") {
                        setDialog(content.speech)
                    } else {
                        setDialog(content.thought)
                    }
                    break;
                default:
                    break;
            }
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
