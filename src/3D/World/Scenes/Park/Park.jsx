import {useEffect,useState} from 'react'
import { Park3D } from './Models/Park'
import { Lights_Room } from '../../Staging/Lights'
import { Megumi } from './Models/Megumi'
import { Utaha } from './Models/Utaha'
import { Eriri } from './Models/Eriri'
// import { PlayableCharacter } from './Models/PlayableCharacter'

import {
    nextScene,
    setFinishedScript,
    updateActualContent,
    setNpcInteractionsFinished,
    setScenario,
    setIs3D,
    resetNpcInteractions
} from '../../../../store/slicers/GameStatusSlice'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'




const Park = () => {
    const { scenario, finishedScene, npcInteractionsFinished, actualScriptScenes, isBifurcation, actualSceneIndex, actualContentIndex } = useSelector(state => state.gameStatus)
    const actualScene = actualScriptScenes[actualSceneIndex]
    const dispatch = useDispatch()
    const navigate = useNavigate();


    useEffect(() => {
        if (!isBifurcation) {
            dispatch(setNpcInteractionsFinished(true))
        } else {
            dispatch(setNpcInteractionsFinished(true))
        }
    }, [isBifurcation])

    useEffect(() => {
        dispatch(setScenario(actualScene.scenario))
    }, [actualSceneIndex,finishedScene])

    useEffect(() => {
        if (finishedScene && npcInteractionsFinished && (actualScene.scenario !=  "Parque-transicion")) {
            dispatch(nextScene())
            dispatch(resetNpcInteractions())
        }
    }, [npcInteractionsFinished, actualContentIndex, finishedScene])

    useEffect(() => {
        // console.log("entro");
        if (actualScene.scenario ==  "Parque-transicion") {
                dispatch(nextScene())
                dispatch(setIs3D(false));
                dispatch(resetNpcInteractions())
                dispatch(updateActualContent());
                dispatch(setScenario(""));
                navigate('/acto/1')
        }

    }, [finishedScene, npcInteractionsFinished, actualContentIndex, actualSceneIndex, actualScene.scenario])

    return (
        <>
            <Park3D position={[0, -7, 0]} scale={0.08} />
            <Utaha scale={2} position={[0, 10, 0]} />
            <Eriri scale={2} position={[4.9, 10, 27]} />
            <Megumi scale={2} position={[-6.9, 10, 7]} rotation-y={Math.PI / 2} />
            {/* <PlayableCharacter scale={2} position={[0, 10, 0]} /> */}
            <Lights_Room />
        </>
    )
}

export default Park