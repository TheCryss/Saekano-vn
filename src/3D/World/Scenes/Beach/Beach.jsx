import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom';
import { KeyboardControls } from '@react-three/drei'

//models
import { PlayableCharacterBeach } from './Models/PlayableCharacterBeach'
import Beach3D from './Models/Beach'
import { Lights_Room } from '../../Staging/Lights'



const Beach = () => {

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
    const characterURL = "/assets/models/playable_character/TomoyaBeach.glb"

    return (
        <>
            <Beach3D scale={2} position={[0, -2.5, 0]} />
            <KeyboardControls map={keyboardMap}>
                <Ecctrl position={[-5, 3.4, 4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3} capsuleRadius={0.7} capsuleHalfHeight={0.3} rayOriginOffest={{ "x": 0, "y": -1.1, "z": 0 }} floatingDis={0.3} name="Tomoya">
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacterBeach scale={2} position={[0, -1.59, 0]} />
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>
            <Lights_Room />
        </>
    )
}

export default Beach