import { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { useNavigate } from 'react-router-dom';
import { KeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


//models
import { PlayableCharacterBeach } from './Models/PlayableCharacterBeach'
import { PCWatermelon } from './Models/PCWatermelon'
import { EririBeach } from './Models/EririBeach'
import { UtahaBeach } from './Models/UtahaBeach'
import { MegumiBeach } from './Models/MegumiBeach'
import Beach3D from './Models/Beach'
import { SunLight } from '../../Staging/Lights'
import { SandCastle } from './Models/SandCastle';
import { Watermelon } from './Models/Watermelon'
import { WatermelonCut } from './Models/WatermelonCut'
import {
    nextScene,
    setFinishedScript,
    updateActualContent,
    setNpcInteractionsFinished,
    setScenario,
    setIs3D,
    resetNpcInteractions
} from '../../../../store/slicers/GameStatusSlice'



const Beach = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [randomPosition, setRandomPosition] = useState([0, 0, 0])
    const [watermelonCut, setWatermelonCut] = useState(false);
    const [minigame3,setMinigame3] = useState(false)
    const keyboardMap = [
        { name: 'backward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'forward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
        { name: 'action1', keys: ['KeyE'] }
        // { name: 'action1', keys: ['KeyR'] },
    ]

    const WatermelonPosition = [
        [-15, -1.3, -3],
        [-10, -1.3, 0],
        [0, -1.3, -30],
        [-20, -1.3, -30],
        [20, -1.3, -30],
        [20, -1.3, 15],
        [-20, -1.3, 15],
        [-20, -1.3, 5],
        [-32, -1.3, 5]
    ]
    const animationSet = {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        fall: "0Tpose",
        jump: "Surprise",
        jumpIdle: "Surprise",
        // action1: "Clapping",
        // action1: "Hit",

    }
    const characterURL = "/assets/models/playable_character/TomoyaBeach.glb"
    const spotLightRef = useRef();


    useEffect(() => {
        setRandomPosition(WatermelonPosition[Math.floor(Math.random() * WatermelonPosition.length)])
    }, [])

    const { scenario, finishedScene, npcInteractionsFinished,actualScriptScenes, isBifurcation, actualSceneIndex, actualContentIndex } = useSelector(state => state.gameStatus)
    const actualScene = actualScriptScenes[actualSceneIndex]

    useEffect(() => {
        dispatch(setFinishedScript(false))
    }, [])

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
        // console.log(finishedScene, npcInteractionsFinished, scenario);
        if (finishedScene && npcInteractionsFinished && !minigame3 ) {
            dispatch(nextScene())
            dispatch(resetNpcInteractions())
        } else if(finishedScene && npcInteractionsFinished && watermelonCut){
            console.log("watermelonCut");
        }
    }, [watermelonCut, npcInteractionsFinished, actualContentIndex, finishedScene])


    useEffect(() => {
        console.log(scenario);
        if (actualScene.scenario == "Minijuego-Playa") {
            dispatch(setNpcInteractionsFinished(false))
            setMinigame3(true)
        } else if(actualScene.scenario ==  "Playa-transicion"){
            dispatch(nextScene())
            dispatch(setIs3D(false));
            dispatch(resetNpcInteractions())
            dispatch(updateActualContent());
            dispatch(setScenario(""));
            navigate('/acto/1')

        }
    }, [actualScene.scenario])

    return (
        <>
            <spotLight
                ref={spotLightRef}
                name="followLight"
                intensity={50}
                penumbra={1}
            />

            <Beach3D scale={2} position={[0, -2.5, 0]} />
            <UtahaBeach scale={2} position={[-23.5, 0.5, -18.5]} rotation-z={Math.PI / 15} rotation-x={-Math.PI / 2.4} />
            <EririBeach scale={2} position={[4.9, -1, 27]} />
            <MegumiBeach scale={2} position={[12.9, -1, 7]} rotation-y={-Math.PI / 4} />
            <SandCastle scale={0.1} position={[10, -1, 10]} rotation-x={-Math.PI / 2} />
            <Watermelon position={randomPosition} rotation-y={-Math.PI / 2} />
            {false && <WatermelonCut position={[-10, -1.3, 0]} rotation-y={-Math.PI / 2} />}
            <KeyboardControls map={keyboardMap}>
                <Ecctrl position={[-5, 3.4, 4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3} capsuleRadius={0.7} capsuleHalfHeight={0.3} rayOriginOffest={{ "x": 0, "y": -1.1, "z": 0 }} floatingDis={0.3} name="Tomoya" followLight={true} followLightPos={{ x: 0, y: 5, z: 0 }} >
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet} >
                        {(!watermelonCut && (scenario != "Minijuego-Playa")) ? <PlayableCharacterBeach scale={2} position={[0, -1.59, 0]} />
                            : <PCWatermelon scale={2} position={[0, -1.59, 0]} />}
                        {/* <PCWatermelon scale={2} position={[0, -1.59, 0]} /> */}

                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>
            {(!watermelonCut && (scenario != "Minijuego-Playa")) ? <SunLight position={[0, 5, 0]} /> : null}
        </>
    )
}

export default Beach