import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { nextContent  } from '../store/slicers/GameStatusSlice'
export const Panel3D = () => {
    const [dialog, setDialog] = useState('...')
    const [character, setCharacter] = useState('...')
    const dispatch = useDispatch();
    const gameStatus = useSelector((state) => state.gameStatus)
    const {actualContentIndex} = gameStatus
    
    const playEvent = () => {
    const { actualContent, actualSceneIndex, actualContentIndex } = gameStatus
        const keys = Object.keys(actualContent)
        switch (keys[0]) {
            case 'character':
                setCharacter(actualContent.character)
                if (keys[1] == 'speech') {
                    setDialog(actualContent.speech)
                } else {
                    setDialog(actualContent.thought)
                } 
                break;
            case 'Music':
                console.log("Music");
                dispatch(nextContent())
            default: break
        }
    }

    useEffect(() => {
        playEvent()
    }, [])
    return (
        <>
            <div className="flex justify-center absolute z-10 w-full bottom-0">

                <div className='w-1/2 bg-[rgba(242,198,245,0.75)] border-[#C6F5EB] text-pink-950 border-4 text-md my-8 h-20 rounded-lg items-center  flex justify-center select-none'>
                    {dialog} 
                </div>
            </div>
        </>
    )
}
