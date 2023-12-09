//Libraries
import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from "react-redux";
//Models
import Login from './Scenes/Login/Login'
const Room = lazy(() => import('./Scenes/Room/Room'))
const Minigame1 = lazy(() => import('./Scenes/Word_Minigame/Minigame1'))
import { Fallback } from '../../Components/Fallback'
import { Lights } from './Staging/Lights'

const Experience = () => {
    const gameStatus = useSelector(state => state.gameStatus);



    const getScenario = () => {
        const { is3D, scenario } = gameStatus

        if (is3D) {
            switch (scenario) {
                case "Habitacion":
                    return (<Room />);
                case "Minijuego-guion":
                    return (<Minigame1 />);
                case "Minijuego-Habitacion":
                    return (<Room />);
                default:
                    return (<Login />);
            }
        }
        return (<Login />);
        // return (<Room/>)
        // return (<Minigame1/>)
    }
    return (
        <>
            {/* <Suspense > */}
            {getScenario()}
            {/* </Suspense> */}
        </>
    )
}

export default Experience