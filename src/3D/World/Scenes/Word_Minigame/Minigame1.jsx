import { useDispatch } from "react-redux"
import { Lights_Minigame1 } from "../../Staging/Lights"
import { Book } from "./Models/Book"
import {setFinishedScript,setFinishedScene} from '../../../../store/slicers/GameStatusSlice'
import { useEffect } from "react"

const Minigame1 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setFinishedScene(true))
    }, [])
    return (
        <>
            <Book position={[0,1,0]} scale={9} rotation-y={Math.PI/2} rotation-x={Math.PI/2} ></Book>
            <Lights_Minigame1/>
        </>
    )
}

export default Minigame1
