import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { nextContent, nextScene, updateActualContent } from '../store/slicers/GameStatusSlice'
import { useFetchers } from 'react-router-dom'
import  Choices3D  from './Choices3D'


export const Panel3D = () => {
    const [dialog, setDialog] = useState('...')
    const [character, setCharacter] = useState('...')
    const dispatch = useDispatch();
    const gameStatus = useSelector((state) => state.gameStatus)
    const { actualContentIndex, finishedScene, isBifurcation, scenario } = gameStatus


    const playEvent = () => {
        const { actualContent } = gameStatus
        // console.log(actualContent)
        const keys = Object.keys(actualContent)
        switch (keys[0]) {
            case 'character':
                // console.log(actualContent.character);
                setCharacter(actualContent.character)
                if (keys[1] == 'speech') {
                    setDialog(actualContent.speech)
                } else {
                    setDialog(actualContent.thought)
                }
                break;
            default: break
        }
    }

    useEffect(() => {
        playEvent()
        dispatch(updateActualContent())

    }, [actualContentIndex])


    const onClickText = () => {
        if (finishedScene) {
            // console.log("finished scene");
        }
        else {
            // playEvent()
            dispatch(nextContent())
        }
    }

    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {
            onClickText();
        }, 5000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [])

    return (
        <>
            <div className='absolute flex flex-col h-screen w-full items-center justify-center'>
                {/* {(isBifurcation && (scenario == "Parque")) && <div className=' z-20' >
                    <Choices3D/>
                </div>} */}
                <div className='absolute z-20 w-full bottom-0'>
                    <div className="flex  justify-center">
                        <div className='w-1/2'>
                            <div className=' mb-3 h-10  flex items-center justify-center rounded-md  bg-[rgba(242,198,245,0.75)] w-60 border-[#C6F5EB] text-pink-950 border-4 select-none font-bold' >
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
            </div>
        </>
    )
}
