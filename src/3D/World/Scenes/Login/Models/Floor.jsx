import { RigidBody } from "@react-three/rapier";
import { useFrame } from '@react-three/fiber';

import { Clock } from 'three';
import { useRef, useState } from 'react';



const Floor = () => {
    return (
        <>
            <RigidBody colliders={"cuboid"} friction={2} type="fixed">
                <mesh rotation-x={-Math.PI / 2} receiveShadow>
                    <planeGeometry args={[64, 64]} />
                    <meshStandardMaterial color={"lightgreen"} />
                </mesh>
            </RigidBody>
        </>

    )
}

export default Floor