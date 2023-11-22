import React from 'react'
import { Room3D } from './Models/Room'
import { RigidBody } from '@react-three/rapier'
import { KeyboardControls } from '@react-three/drei'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { PlayableCharacter } from './Models/PlayableCharacter'
import { Lights_Room } from '../../Staging/Lights'
import { useFrame } from '@react-three/fiber'
import { Utaha } from './Models/Utaha'
import {useSelector} from 'react-redux'

export const Room = () => {
    const keyboardMap = [
        { name: 'backward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'forward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
        {name: 'action1', keys: ['KeyE'] },
        
    ]
    const animationSet = {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        fall: "0Tpose",
        jump: "Clapping",
        jumpIdle: "Surprise",
        action1: "Clapping"
    }
    const characterURL = "/assets/models/playable_character/Tomoya.glb"

    const roomInteractions = useSelector(state => state.room.room)
    // console.log(roomInteractions);

    return (
        <>
            <RigidBody type="fixed" colliders="trimesh" wireframe linearDamping={0.5} >
                <Room3D/>
            </RigidBody>
            <KeyboardControls map={keyboardMap}>
                
                <Ecctrl  position={[-5,3.4,4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3}   capsuleRadius={0.8} rayOriginOffest={{"x":0,"y":-1.2,"z":0}} floatingDis={0.3} name="Tomoya">
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacter scale={1.6} position={[0, -1.1, 0]} ></PlayableCharacter>
                    </EcctrlAnimation>
                </Ecctrl>

            </KeyboardControls>
            
            <Utaha scale={1.6}></Utaha>
            
            <Lights_Room />
        </>
    )
}
