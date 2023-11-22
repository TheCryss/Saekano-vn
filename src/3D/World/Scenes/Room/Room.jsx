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
            <RigidBody type="fixed" colliders="trimesh" linearDamping={0.5} >
                <Room3D/>
            </RigidBody>
            <KeyboardControls map={keyboardMap}>
                <Ecctrl  animated camInitDir={Math.PI / 4} dragDampingC={0.4} jumpVel={5} capsuleRadius={1} autoBalance={false} floatHeight={0} friction={1e-10} maxVelLimit={6} >
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacter scale={1.6} position={[0, -1.2, 0]} ></PlayableCharacter>
                    </EcctrlAnimation>
                </Ecctrl>

            </KeyboardControls>
            <Lights_Room />
        </>
    )
}
