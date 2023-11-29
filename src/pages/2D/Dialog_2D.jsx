import { Panel } from '../../Components/Panel'
import { useGame } from '../../context/GameContext'
import { useState, useEffect } from 'react'
import Transitions from '../../Components/Transitions';



const Dialog_2D = () => {
    const { getActualContent } = useGame()
    const [background, setBackground] = useState("Act_0-1")

    const checkBackground = () => { 
        const { is3D, content } = getActualContent()

        if (!is3D && "background" in content) {
            setBackground(content.background)
        }
    }

    useEffect(() => {
        checkBackground()
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

export default Transitions(Dialog_2D)
