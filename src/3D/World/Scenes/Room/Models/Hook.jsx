import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


export function Hook(props) {
    const { nodes, materials } = useGLTF("/assets/models/hook/hook.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BezierCurve.geometry}
                material={materials.Black}
            />
        </group>
    );
}

useGLTF.preload("/assets/models/hook/hook.glb");