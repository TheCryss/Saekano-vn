import { useState, useEffect, useRef } from 'react'
import { useGame } from '../context/GameContext'
import { useNavigate } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './Panel.css';

export const Panel = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const navigate = useNavigate()
    const [character, setCharacter] = useState("...")
    const [dialog, setDialog] = useState("...")

    const sendDialog = () => {
        const { is3D, content } = getActualContent()
        if (is3D) {
            console.log("is3D")
            navigate(`/${content}`) // Here you put the 3D scene (content)
        } else {
            const keys = Object.keys(content)

            switch (keys[0]) {


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
    const nodeRef = useRef(null);
    const nodeRefCharacter = useRef(null);

    const onClickText = () => {
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
    return (
        <>

            <div className='flex justify-center '>

                <div className=' w-1/6 text-md my-8 h-40 flex flex-col mt-12 '>

                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Auto
                    </button>
                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Skip
                    </button>
                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
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
