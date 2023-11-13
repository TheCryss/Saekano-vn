import { Panel } from '../../Components/Panel'
import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext'

export const Dialog_2D = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const [currentMusic, setCurrentMusic] = useState(null)

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

    const playMusic = (musicName) => {
        if (currentMusic) {
            currentMusic.pause();
        }
        const newMusic = new Audio("/assets/music/" + musicName + ".ogg");
        newMusic.volume = 0.2;
        newMusic.loop = true;
        setCurrentMusic(newMusic);
        newMusic.play();
    }

    const playSound = (soundName) => {
        new Audio("/assets/sound/" + soundName + ".ogg").play()
    }
    const [background, setBackground] = useState("Act_0-1")

    const sendDialog = () => {
        const { is3D, content } = getActualContent()
        if (!is3D) {
            if ("sound" in content) {
                playSound(content.sound)
            }
    
            if ("music" in content) {
                playMusic(content.music)
            }
    
            if ("background" in content) {
                setBackground(content.background)
            }
        }


    }

    useEffect(() => {
        sendDialog()
    }, [getActualContent])

    return (
        <>
            <div className="h-screen w-full bg-cover transition-all duration-700 " style={{ backgroundImage: `url('/assets/background/${background}.png')` }}>
                <div className='flex flex-col h-screen justify-end'>
                    <Panel />
                </div>
            </div>
        </>
    )
}
