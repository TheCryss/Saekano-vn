import React from 'react'
import { Panel } from '../../Components/Panel'
import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext'

export const Dialog_2D = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const [currentMusic, setCurrentMusic] = useState(null)

    const onClick = () => {
        const result = nextContent();

        if (!result.success) {
            nextScene();
            console.log("next scene");
        }
    }

    const playMusic = (musicName) => {
        if (currentMusic) {
            currentMusic.volume = 0;
            currentMusic.pause();
        }
        const newMusic = new Audio("/assets/music/" + musicName + ".ogg");
        newMusic.volume = 0.3;
        newMusic.loop = true;
        setCurrentMusic(newMusic);
        newMusic.play();
    }

    const playSound = (soundName) => {
        new Audio("/assets/sound/" + soundName + ".ogg").play()
    }

    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")

    const sendDialog = () => {
        const keys = Object.keys(getActualContent())

        switch (keys[0]) {
            case "music":
                playMusic(getActualContent().music)
                break;
            case "sound":
                playSound(getActualContent().sound)
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
