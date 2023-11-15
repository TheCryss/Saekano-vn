import { Lights_Minigame1 } from "../../Staging/Lights"
import { Book } from "./Models/Book"

export const Minigame1 = () => {
    return (
        <>
            <Book position={[0,1,0]} scale={9} rotation-y={Math.PI/2} rotation-x={Math.PI/2} ></Book>
            <Lights_Minigame1/>
        </>
    )
}
