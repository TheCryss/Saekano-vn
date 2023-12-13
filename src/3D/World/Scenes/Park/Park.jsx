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
    const [girl, setGirl] = useState(0)
    const actualScene = actualScriptScenes[actualSceneIndex]
    const dispatch = useDispatch()
    const navigate = useNavigate();

    //Ganadora de la ultima
    useEffect(() => {
        const result = playerBifurcations.slice(4,5)
        setGirl(result)
        console.log(result);
    }, [playerBifurcations])
    const findMostFrequentValue = (list) => {
        let m;  // array of frequency.
        let e;
        let u;  // holds the max frequency.
        for (let value of list) {
            if(value == 0){
                e++;
            } else if(value == 1) {
                m++;

            } else if(value == 2){
                u++;
            }
        }
        if ((e > m)&& (e > u)) {
            return 0;
        } else if ((m > u) && (m > e)) {
            return 1;
        } else {
            return 2;
        }
    }

    useEffect(() => {
        // console.log(playerBifurcations);
        const result2 = findMostFrequentValue([playerBifurcations[0], playerBifurcations[2], playerBifurcations[4]])
        setEnd(true)
        setFinalResult(result2)
    }, [playerBifurcations])

    useEffect(() => {
        if (end) {
            dispatch(setPlayerBifurcation({ "bifurcationNumber": 5, "bifurcationOption": 2 }))
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
            {(girl == 2) && <Utaha scale={2} position={[1, 3, -1]} />}
            {(girl == 0) && <Eriri scale={2} position={[1, 2, -1]} />}
            {(girl == 1) && <Megumi scale={2} position={[1, 2, -1]} />}
            <PlayableCharacter scale={2} position={[3, 2, -1]} />
            <Lights_Room />
        </>
    )
}

export default Park