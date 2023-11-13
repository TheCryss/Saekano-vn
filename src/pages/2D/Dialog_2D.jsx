import { Panel } from '../../Components/Panel'
import { useState, useEffect } from 'react'
import { useGame } from '../../context/GameContext'
import { useNavigate } from 'react-router-dom'

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

    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")
    const [background, setBackground] = useState(null)

    const navigate = useNavigate()

    const sendDialog = () => {
        const { is3D, content } = getActualContent()
        if (is3D) {
            console.log("is3D")
            navigate(`/${content}`) // Here you put the 3D scene (content)
        } else {
            const keys = Object.keys(content)

            switch (keys[0]) {
                case "music":
                    playMusic(content.music)
                    break;
                case "sound":
                    playSound(content.sound)
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

        if ("background" in content) {
            setBackground(content.background)
        }
    }

    useEffect(() => {
        sendDialog()
        console.log(background)
    }, [getActualContent])

    return (
        <>
            <div className={`h-screen w-full bg-[url('/assets/background/${background}.png')] bg-cover"`}>
                <div className='flex flex-col h-screen justify-end'>
                    <Panel dialog={dialog} change={onClick} character={character} />
                </div>
            </div>
        </>
    )
}
