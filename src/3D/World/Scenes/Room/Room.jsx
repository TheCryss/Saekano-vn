import React from 'react'
import { Room3D } from './Models/Room'
import { RigidBody } from '@react-three/rapier'
import { KeyboardControls } from '@react-three/drei'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { PlayableCharacter } from './Models/PlayableCharacter'
import { Lights_Room } from '../../Staging/Lights'

export const Room = () => {
    const keyboardMap = [
        { name: 'backward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'forward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] }
    ]
    const animationSet = {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        fall: "0Tpose",
        jump: "Clapping",
        jumpIdle: "Surprise"
    }
    const characterURL = "/assets/models/playable_character/Tomoya.glb"

    return (
        <>
            <RigidBody type="fixed" colliders="trimesh" wireframe linearDamping={0.5} >
                <Room3D/>
            </RigidBody>
            <KeyboardControls map={keyboardMap}>
                <Ecctrl animated camInitDir={Math.PI / 4} friction={1e-9} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3}   capsuleRadius={0.8} rayOriginOffest={{"x":0,"y":-1.2,"z":0}} floatingDis={0.3} >
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacter scale={1.6} position={[0, -1.2, 0]} ></PlayableCharacter>
                    </EcctrlAnimation>
                </Ecctrl>

            </KeyboardControls>
            <Lights_Room />
        </>
    )
}
