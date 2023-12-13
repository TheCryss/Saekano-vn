import { Panel } from '../../Components/Panel'
import Choices2D from '../../Components/Choices2D'
import { useState, useEffect } from 'react'
import Transitions from '../../Components/Transitions';
import { useSelector, useDispatch } from 'react-redux';
import { updateActualContent } from '../../store/slicers/GameStatusSlice'

const Dialog_2D = () => {
    const gameStatus = useSelector((state) => state.gameStatus)
    const { actualSceneIndex, actualContentIndex, actualContent } = gameStatus
    const [background, setBackground] = useState('Act_0-1')
    const dispatch = useDispatch()

    const checkBackground = () => {
        const { is3D, actualContent } = gameStatus
        if (!is3D && actualContent.background != undefined) {
            setBackground(actualContent.background)
        }
    }

    useEffect(() => {
        dispatch(updateActualContent())
    }, [actualContentIndex, actualSceneIndex])

    useEffect(() => {
        checkBackground()
    }, [actualContent])

    return (
        <>
            <div className='h-screen w-full bg-cover transition-all duration-700 ' style={{ backgroundImage: `url('/assets/background/${background}.png')` }}>
                <div className='flex flex-col h-screen justify-end'>
                    {gameStatus.isBifurcation ?
                        <Choices2D />
                        : <Panel gameStatus={gameStatus} />
                    }
                </div>
            </div>
        </>
    )
}

export default Transitions(Dialog_2D)
