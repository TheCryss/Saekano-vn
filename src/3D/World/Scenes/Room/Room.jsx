import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom';
import { KeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Room3D } from './Models/Room'
import { PlayableCharacter } from './Models/PlayableCharacter'
import { Lights_Room } from '../../Staging/Lights'
import { Megumi } from './Models/Megumi'
import { Utaha } from './Models/Utaha'
import { Eriri } from './Models/Eriri'
import { Pencil } from './Models/Pencil'
import { Paint_palette } from './Models/Paint_palette'
import { Hook } from './Models/Hook'
import FloorRoom from './Models/FloorRoom'
import {
    nextScene,
    setFinishedScript,
    updateActualContent,
    setNpcInteractionsFinished,
    setScenario,
    setIs3D,
    resetNpcInteractions
} from '../../../../store/slicers/GameStatusSlice'

import { setPaintPalette, setHook, setPencil } from '../../../../store/slicers/RoomSlicers'


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
    const dispath = useDispatch()
    const navigate = useNavigate()
    const characterURL = "/assets/models/playable_character/Tomoya.glb"
    const { finishedScene, npcInteractionsFinished, isBifurcation, actualSceneIndex, actualScriptScenes } = useSelector(state => state.gameStatus)
    const actualScene = actualScriptScenes[actualSceneIndex]
    const { objects, objectsColliders, interaction, room } = useSelector(state => state.room)
    const { hook, paint_palette, pencil } = objects
    const { hookCollider, paint_paletteCollider, pencilCollider } = objectsColliders
    const { hookDelivered, paint_paletteDelivered, pencilDelivered } = useSelector(state => state.room.deliveredObjects)
    const [minigame2, setMinigame2] = useState(false)

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
        if (finishedScene && npcInteractionsFinished && !hookDelivered && !pencilDelivered && !paint_paletteDelivered) {
            dispatch(nextScene())
            dispatch(resetNpcInteractions())
            // dispatch(updateActualContent());
            // dispatch(setScenario(""));
            // navigate('/acto/1')
        } else if (finishedScene && npcInteractionsFinished && hookDelivered && pencilDelivered && paint_paletteDelivered) {
            dispatch(nextScene())
            dispatch(setIs3D(false));
            dispatch(resetNpcInteractions())
            dispatch(updateActualContent());
            dispatch(setScenario(""));
            navigate('/acto/1')
        }
    }, [finishedScene, npcInteractionsFinished])

    useEffect(() => {
        dispatch(setScenario(actualScene.scenario))
    }, [actualSceneIndex])

    useEffect(() => {
        if (actualScene.scenario == "Minijuego-Habitacion") {
            dispatch(setNpcInteractionsFinished(false))
            setMinigame2(true)
        }
    }, [actualScene.scenario])

    const pickUpObject = () => {
        if (interaction) {
            if (hookCollider) dispath(setHook(true))
            if (pencilCollider) dispath(setPencil(true))
            if (paint_paletteCollider) dispath(setPaintPalette(true))
        }
    }

    useEffect(() => {
        pickUpObject()
    }, [objects, interaction])

    useEffect(() => {
        if (hookDelivered && pencilDelivered && paint_paletteDelivered) {
            dispatch(setNpcInteractionsFinished(true))
        }
    }, [hookDelivered, pencilDelivered, paint_paletteDelivered])


    return (
        <>
            <Room3D />
            <KeyboardControls map={keyboardMap}>
                <Ecctrl position={[-5, 3.4, 4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3} capsuleRadius={0.8} rayOriginOffest={{ "x": 0, "y": -1.2, "z": 0 }} floatingDis={0.3} name="Tomoya">
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacter scale={2} position={[0, -1.1, 0]} ></PlayableCharacter>
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>

            <Utaha scale={2} position={[0, 1, 0]} />
            <Eriri scale={2} position={[4.9, 0.7, 27]} />
            <Megumi scale={2} position={[-6.9, 0, 7]} rotation-y={Math.PI / 2} />

            <Lights_Room />
            <FloorRoom />

            {minigame2 && <>
                {!pencil && <Pencil scale={1} position={[15, 2.5, 10]} />}
                {!paint_palette && <Paint_palette scale={1} position={[3, 2.3, -8.8]} />}
                {!hook && <Hook scale={1} position={[-5, 1.3, -9.3]} rotation-x={Math.PI / 2.5} />}
            </>
            }
        </>
    )
}

export default Room