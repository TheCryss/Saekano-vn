import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';


export function Hook(props) {
    const { nodes, materials } = useGLTF("/assets/models/hook/hook.glb");
    return (
        <>
            <RigidBody type="fixed" colliders="cuboid" position-y={2} position={props.position}>
                <CuboidCollider
                sensor
                    args={[3.25, 1.75, 4]}
                />
            </RigidBody>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve.geometry}
                    material={materials.Black}
                />
            </group>
        </>
    );
}

useGLTF.preload("/assets/models/hook/hook.glb");