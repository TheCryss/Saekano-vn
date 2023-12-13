//Libraries
import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from "react-redux";
//Models
import Login from './Scenes/Login/Login'
const Room = lazy(() => import('./Scenes/Room/Room'))
const Minigame1 = lazy(() => import('./Scenes/Word_Minigame/Minigame1'))
const Beach = lazy(() => import('./Scenes/Beach/Beach'))
const Beach2 = lazy(() => import('./Scenes/Beach/Beach2'))

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
                case "Playa":
                    return (<Beach/>);
                case "Minijuego-Playa":
                    return (<Beach2/>);
                default:
                    return (<Login />);
            }
        }
        return (<Login />);
    }
    return (
        <>
            {getScenario()}
        </>
    )
}

export default Experience