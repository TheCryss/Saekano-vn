import { Panel } from '../../Components/Panel'
import { useGame } from '../../context/GameContext'
import { useState, useEffect } from 'react'
import Transitions from '../../Components/Transitions';
import { useSelector,useDispatch } from 'react-redux';
import {setActualContent,setActo, setActualContentIndex, setActualSceneIndex} from '../../store/slicers/GameStatusSlice'
import data1 from '../../script/scene_1.json'
import data2 from '../../script/scene_2.json'


const Dialog_2D = () => {
    const gameStatus = useSelector((state) => state.gameStatus)
    const {actualContentIndex,actualContent,finishedScript,finishedScene,acto} = gameStatus
    const [background, setBackground] = useState("Act_0-1")
    const dispatch = useDispatch()
    const getData = (acto) => {
        switch(acto) {
            case 1:
                return data1;
            case 2:
                return data2;
            // Agrega más casos según sea necesario
            default:
                return {};
        }
    }
    let data = getData(acto)
    const checkBackground = () => { 
        const { is3D, actualContent } = gameStatus
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

    // useEffect(() => {
    //     dispatch(setActualSceneIndex(4))
    //     dispatch(setActualContentIndex(10))
    // },[])


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
