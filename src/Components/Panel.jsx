import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { nextScene, nextContent, setScenario,setIs3D} from '../store/slicers/GameStatusSlice';
import { useNavigate } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group';


import './Panel.css';


export const Panel = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [isAuto, setIsAuto] = useState(false)
    const [currentMusic, setCurrentMusic] = useState(null)
    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")

    const gameStatus = useSelector((state) => state.gameStatus)

    const playMusic = (musicName) => {
        if (currentMusic) {
            if (!currentMusic.paused) currentMusic.pause()
        } else {
            console.log("Test")
            const newMusic = new Audio("/assets/music/" + musicName + ".ogg");
            newMusic.volume = 0.2;
            newMusic.loop = true;
            setCurrentMusic(newMusic);
            newMusic.play();
        }
    }

    const playSound = (soundName) => {
        new Audio("/assets/sound/" + soundName + ".ogg").play()
    }

    const playEvent = () => {
        const { actualSceneIndex, actualScriptScenes, actualContent } = gameStatus
        const actualScene = actualScriptScenes[actualSceneIndex]

        if (actualScene["3d"]) {
            console.log(actualScene)
            dispatch(setScenario(actualScene.scenario))
            dispatch(setIs3D(true))
            navigate(`/3D/${actualScene.scenario}`) // Here you put the 3D scene (content)
        } else {
            const keys = Object.keys(actualContent)

            switch (keys[0]) {
                case "character":
                    setCharacter(actualContent.character)
                    if (keys[1] == "speech") {
                        setDialog(actualContent.speech)
                    } else {
                        setDialog(actualContent.thought)
                    }
                    break;
                default: break;
            }

            if ("sound" in actualContent) {
                playSound(actualContent.sound)
            }

            if ("music" in actualContent) {
                playMusic(actualContent.music)
            }
        }
    }

    useEffect(() => {
        playEvent()
    }, [gameStatus])


    const nodeRef = useRef(null);
    const nodeRefCharacter = useRef(null);

    const onClickText = () => {
        if (gameStatus.finishedScene) dispatch(nextScene())
        else dispatch(nextContent())
    }

    useEffect(() => {
        let intervalId;

        if (isAuto) {
            intervalId = setInterval(() => {
                onClickText();
            }, 5000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [isAuto, onClickText])

    const handleSkip = () => {
        dispatch(nextScene());
    }

    const handleExit = () => {
        if (!currentMusic) {
            if (!currentMusic.paused) currentMusic.pause()
        }

        navigate("/")
    }

    return (
        <>
            <div className='flex justify-center '>

                <div className=' w-1/6 text-md my-8 h-40 flex flex-col mt-12 '>

                    <button onClick={() => setIsAuto(!isAuto)} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Auto
                    </button>
                    <button onClick={handleSkip} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Skip
                    </button>
                    <button onClick={handleExit} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Exit
                    </button>

                </div>
                <div className='w-3/4 h-56' onClick={onClickText} >
                    <div className=' ml-8 mb-3  h-10  flex items-center justify-center rounded-md  bg-[rgba(242,198,245,0.75)] w-40 border-[#C6F5EB] text-pink-950 border-4 select-none font-bold' >
                        <SwitchTransition>
                            <CSSTransition key={character} timeout={200} nodeRef={nodeRefCharacter} classNames="fade" addEndListener={(done) => {
                                nodeRef.current.addEventListener("transitionend", done, false);
                            }}>
                                <div ref={nodeRefCharacter}>
                                    {character}
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                    <div className={` outline-4 text-pink-950 p-2 px-4 flex items-center border-[#C6F5EB] border-4 select-none  text-xl mx-8 h-40 rounded-md  bg-[rgba(242,198,245,0.75)]`}   >
                        <SwitchTransition>
                            <CSSTransition key={dialog} timeout={200} nodeRef={nodeRef} classNames="fade" addEndListener={(done) => {
                                nodeRef.current.addEventListener("transitionend", done, false);
                            }}>
                                <div ref={nodeRef}>
                                    {dialog}
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </div>
            </div>
        </>
    )
}
