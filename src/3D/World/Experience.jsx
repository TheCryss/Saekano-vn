//Models
import Login from './Scenes/Login/Login'
import {Room} from './Scenes/Room/Room'
import { Minigame1 } from './Scenes/Word_Minigame/Minigame1'
import {Lights} from './Staging/Lights'
import { useSelector, useDispatch } from "react-redux";
//Libraries


const Experience = () => {
    const gameStatus = useSelector(state => state.gameStatus);



    const getScenario = () => {
        const { is3D, scenario } = gameStatus

        if (is3D) {
            switch (scenario) {
            case "room":
                return (<Room/>);
            case "Minijuego-guion":
                return (<Minigame1/>);
            default:
                return (<Login/>);
            }
        }
        return (<Login/>);
        // return (<Room/>)
        // return (<Minigame1/>)
    }
    return (
        <>
            {getScenario()}
        </>
    )
}

export default Experience