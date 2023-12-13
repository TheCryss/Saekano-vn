import { nextScene, setPlayerBifurcation } from '../store/slicers/GameStatusSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const choices = [
    [],
    ["Manga", "Salida de Baño", "Novela Ligera"],
    ["", "", ""],
    ["Eriri", "Utaha", "Megumi"],
    ["", "", ""],
    ["", "", ""],



]


const Choices2D = () => {
    const dispatch = useDispatch()
    const { bifurcation } = useSelector(state => state.gameStatus)
    const [end, setEnd] = useState(false)

    useEffect(() => {
        if (end) {
            dispatch(nextScene())
        }
    }, [end])
    return (
        <div className="absolute w-full min-h-screen flex items-center justify-center">
            <div className='  z-20 w-1/6 text-md  h-40 flex flex-col  '>
                <button onClick={() => { dispatch(setPlayerBifurcation({ "bifurcationNumber": bifurcation, "bifurcationOption": 0 })); setEnd(true) }} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    {choices[bifurcation - 1][0]}
                </button>
                <button onClick={() => { dispatch(setPlayerBifurcation({ "bifurcationNumber": bifurcation , "bifurcationOption": 2 })); setEnd(true) }} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    {choices[bifurcation - 1][1]}
                </button>
                <button onClick={() => { dispatch(setPlayerBifurcation({ "bifurcationNumber": bifurcation , "bifurcationOption": 1 })); setEnd(true) }} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    {choices[bifurcation - 1][2]}
                </button>

            </div>
        </div>
    )
}

export default Choices2D