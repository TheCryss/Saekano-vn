import { useEffect, useState } from 'react'
import { Park3D } from './Models/Park'
import { Lights_Room } from '../../Staging/Lights'
import { Megumi } from './Models/Megumi'
import { Utaha } from './Models/Utaha'
import { Eriri } from './Models/Eriri'
// import { PlayableCharacter } from './Models/PlayableCharacter'
import { PlayableCharacter } from './Models/PlayableCharacter'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import {
    nextScene,
    setFinishedScript,
    updateActualContent,
    setNpcInteractionsFinished,
    setScenario,
    setIs3D,
    setPlayerBifurcation,
    resetNpcInteractions,
} from '../../../../store/slicers/GameStatusSlice'





const Park = () => {
    const { scenario, playerBifurcations, finishedScene, npcInteractionsFinished, actualScriptScenes, isBifurcation, actualSceneIndex, actualContentIndex } = useSelector(state => state.gameStatus)
    const [end, setEnd] = useState(false)
    const [finalResult, setFinalResult] = useState(0)
    const actualScene = actualScriptScenes[actualSceneIndex]
    const dispatch = useDispatch()
    const navigate = useNavigate();

    //Ganadora de la ultima
    // const result = playerBifucartions[-2]

    const findMostFrequentValue = (list) => {
        let frequency = {};  // array of frequency.
        let max = 0;  // holds the max frequency.
        let result;   // holds the max frequency element.
        for (let value of list) {
            frequency[value] = (frequency[value] || 0) + 1; // increment frequency.
            if (frequency[value] > max) { // is this frequency > max so far ?
                max = frequency[value];  // update max.
                result = value;          // update result.
            }
        }
        return result;
    }

    useEffect(() => {
        // console.log(playerBifurcations);
        const result2 = findMostFrequentValue(playerBifurcations.slice(2, -1).concat(playerBifurcations.slice(0,1)))
        setEnd(true)
        setFinalResult(result2)
    }, [playerBifurcations])

    useEffect(() => {
        if (end) {
            dispatch(setPlayerBifurcation({ "bifurcationNumber": 4, "bifurcationOption": finalResult }))
        }
    }, [end])



    useEffect(() => {
        if (!isBifurcation) {
            dispatch(setNpcInteractionsFinished(true))
        } else {
            dispatch(setNpcInteractionsFinished(true))
        }
    }, [isBifurcation])

    useEffect(() => {
        dispatch(setScenario(actualScene.scenario))
    }, [actualSceneIndex, finishedScene])

    useEffect(() => {
        if (finishedScene && npcInteractionsFinished && (actualScene.scenario != "Parque-transicion")) {
            dispatch(nextScene())
            dispatch(resetNpcInteractions())
        }
    }, [npcInteractionsFinished, actualContentIndex, finishedScene])

    useEffect(() => {
        // console.log("entro");
        if (actualScene.scenario == "Parque-transicion") {
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
            <PlayableCharacter scale={2} position={[0, 10, 0]} />
            {/* <PlayableCharacter scale={2} position={[0, 10, 0]} /> */}
            <Lights_Room />
        </>
    )
}

export default Park