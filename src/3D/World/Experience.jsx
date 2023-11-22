//Models
import Login from './Scenes/Login/Login'
import {Room} from './Scenes/Room/Room'
import { Minigame1 } from './Scenes/Word_Minigame/Minigame1'
import {Lights} from './Staging/Lights'
import { useGame } from '../../context/GameContext'
//Libraries


const Experience = () => {
    const { getActualContent, nextContent, nextScene } = useGame();

    const getScenario = () => {
        const { is3D, content } = getActualContent()
        if (is3D) {
            switch (content) {
            case "room":
                return (<Room/>);
            case "Minijuego-guion":
                return (<Room debug/>); // this have to change
                // return (<Minigame1/>);
            default:
                return (<Login/>);
            }
        }
        // return (<Login/>);
        return (<Room/>)
    }
    return (
        <>
            {getScenario()}
        </>
    )
}

export default Experience