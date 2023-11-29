import { Panel } from '../../Components/Panel'
import { useGame } from '../../context/GameContext'
import { useState, useEffect } from 'react'
import Transitions from '../../Components/Transitions';
import { useSelector,useDispatch } from 'react-redux';
import {setActualContent, is3D} from '../../store/slicers/GameStatusSlice'
import data from '../../script/scene_1.json'
import data2 from '../../script/scene_2.json'


const Dialog_2D = () => {
    // const { getActualContent } = useGame()
    const gameStatus = useSelector((state) => state.gameStatus)
    const {is3D,content,actualContentIndex,actualContent} = gameStatus
    
    const [background, setBackground] = useState("Act_0-1")
    const dispatch = useDispatch()
    const checkBackground = () => { 
        // dispatch(setActualContent())
        const { is3D, actualContent } = gameStatus
        // console.log(actualContent);
        if (!is3D && actualContent.background != undefined) {
            setBackground(actualContent.background)
        }
    }

    useEffect(() => {
        dispatch(setActualContent())
    }, [actualContentIndex])
    
    useEffect(() => {
        checkBackground()
    },[actualContent])

    return (
        <>
            <div className="h-screen w-full bg-cover transition-all duration-700 " style={{ backgroundImage: `url('/assets/background/${background}.png')` }}>
                <div className='flex flex-col h-screen justify-end'>
                    <Panel data={data}/>
                </div>
            </div>
        </>
    )
}

export default Transitions(Dialog_2D)
