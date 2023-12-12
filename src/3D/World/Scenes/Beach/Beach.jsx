import { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { RigidBody } from '@react-three/rapier'
import { useNavigate } from 'react-router-dom';
import { KeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

//models
import { PlayableCharacterBeach } from './Models/PlayableCharacterBeach'
import { EririBeach } from './Models/EririBeach'
import { UtahaBeach } from './Models/UtahaBeach'
import { MegumiBeach } from './Models/MegumiBeach'
import Beach3D from './Models/Beach'
import { SunLight } from '../../Staging/Lights'
import { SandCastle } from './Models/SandCastle';
import { Watermelon } from './Models/Watermelon'
import { WatermelonCut } from './Models/WatermelonCut'



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
    const spotLightRef = useRef();
    const pcRef = useRef();
    useFrame(() => {
        if (spotLightRef.current && pcRef.current) {
            console.log(pcRef.current.position);
            spotLightRef.current.position.copy(pcRef.current.position);
        }
    });

    return (
        <>
            <spotLight
                ref={spotLightRef}
            />
            <Beach3D scale={2} position={[0, -2.5, 0]} />
            <UtahaBeach scale={2} position={[-23.5, 0.5, -18.5]} rotation-z={Math.PI / 15} rotation-x={-Math.PI / 2.4} />
            <EririBeach scale={2} position={[4.9, -1, 27]} />
            <MegumiBeach scale={2} position={[12.9, -1, 7]} rotation-y={-Math.PI / 4} />
            <SandCastle scale={0.1} position={[10, -1, 10]} rotation-x={-Math.PI / 2} />
            <Watermelon position={[-15, -1.3, -3]} rotation-y={-Math.PI / 2} />
            {false && <WatermelonCut position={[-15, -1.3, 0]} rotation-y={-Math.PI / 2} />}
            <KeyboardControls map={keyboardMap}>
                <Ecctrl position={[-5, 3.4, 4]} autoBalance={false} animated camInitDir={Math.PI / 4} friction={1} maxVelLimit={6.04} dragDampingC={0.1} autoBalanceDampingC={3} capsuleRadius={0.7} capsuleHalfHeight={0.3} rayOriginOffest={{ "x": 0, "y": -1.1, "z": 0 }} floatingDis={0.3} name="Tomoya">
                    <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                        <PlayableCharacterBeach scale={2} position={[0, -1.59, 0]} ref={pcRef}/>
                    </EcctrlAnimation>
                </Ecctrl>
            </KeyboardControls>
            <SunLight position={[0, 5, 0]}/>
        </>
    )
}

export default Beach