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
import FloorRoom from './Models/FloorRoom'
import { nextScene, setFinishedScript, updateActualContent } from '../../../../store/slicers/GameStatusSlice'

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
    const { finishedScene } = useSelector(state => state.gameStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setFinishedScript(false))
        //dispatch(nextScene())
    }, [])

    useEffect(() => {
        if (finishedScene) {
            dispatch(nextScene())
        }
    }, [finishedScene])

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
            <Eriri scale={2} position={[4.9, 0.8, 17]} />
            <Megumi scale={2} position={[-6.9, 0, 7]} rotation-y={Math.PI/2} />

            <Lights_Room />
            <FloorRoom/>

        </>
    )
}

export default Room