import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Room3D } from './Models/Room'
import { RigidBody } from '@react-three/rapier'
import { KeyboardControls } from '@react-three/drei'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { PlayableCharacter } from './Models/PlayableCharacter'
import { Lights_Room } from '../../Staging/Lights'
import { useFrame } from '@react-three/fiber'
import { Megumi } from './Models/Megumi'
import { Utaha } from './Models/Utaha'
import { Eriri } from './Models/Eriri'
import {Pencil } from './Models/Pencil'
import {Paint_palette } from './Models/Paint_palette'
import {Hook} from './Models/Hook'
import FloorRoom from './Models/FloorRoom'
import { nextScene, setFinishedScript, updateActualContent,setNpcInteractionsFinished,setScenario,resetNpcInteractions } from '../../../../store/slicers/GameStatusSlice'

const Room = () => {
    const keyboardMap = [
        { name: 'backward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'forward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
        { name: 'action1', keys: ['KeyE'] },

    ]
    const animationSet = {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        fall: "0Tpose",
        jump: "Surprise",
        jumpIdle: "Surprise",
        action1: "Clapping"
    }
    const characterURL = "/assets/models/playable_character/Tomoya.glb"
    const { finishedScene, npcInteractionsFinished, isBifurcation, actualSceneIndex,actualScriptScenes } = useSelector(state => state.gameStatus)
    const actualScene = actualScriptScenes[actualSceneIndex]
    const [minigame2, setMinigame2] = React.useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setFinishedScript(false))
    }, [])

    useEffect(() => {
        if (!isBifurcation) {
            dispatch(setNpcInteractionsFinished(true))
        } else {
            dispatch(setNpcInteractionsFinished(false))
        }
    }, [isBifurcation])
    
    useEffect(() => {
        if (finishedScene && npcInteractionsFinished ) {
            dispatch(nextScene())
            dispatch(resetNpcInteractions())
        }
    }, [finishedScene,npcInteractionsFinished])

    useEffect(() => {
        dispatch(setScenario(actualScene.scenario))
    },[actualSceneIndex])

    useEffect(() => {
        if (actualScene.scenario == "Minijuego-Habitacion") {
            dispatch(setNpcInteractionsFinished(false))
            setMinigame2(true)
        }
    },[actualScene.scenario])

    return (
        <>
            <RigidBody type="fixed" colliders="trimesh" wireframe linearDamping={0.5} >
                <Room3D />
            </RigidBody>
            <KeyboardControls map={keyboardMap}>

                <Ecctrl position={[-5, 3.4, 4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3} capsuleRadius={0.8} rayOriginOffest={{ "x": 0, "y": -1.2, "z": 0 }} floatingDis={0.3} name="Tomoya">
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacter scale={2} position={[0, -1.1, 0]} ></PlayableCharacter>
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            <Utaha scale={2} position={[0, 1, 0]} />
            <Eriri scale={2} position={[4.9, 0.7, 27]} />
            <Megumi scale={2} position={[-6.9, 0, 7]} rotation-y={Math.PI/2} />

            <Lights_Room />
            <FloorRoom/>
            
            { minigame2 && <> 
                <Paint_palette scale={1} position={[3,2.3,-8.8]}/>
                <Pencil scale={1} position={[15,3.1,10]}/>
                <Hook scale={1} position={[-5,1.3,-9.3]} rotation-x={Math.PI/2.5} />
            </> 
            }
        </>
    )
}

export default Room