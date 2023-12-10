import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';


export function Paint_palette(props) {
    const { nodes, materials } = useGLTF("/assets/models/paint_pallet/paint_palette.glb");
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
                    // receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.Brown}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Plane_3.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Plane_4.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Plane_5.geometry}
                    material={materials.Purple}
                />
            </group>
        </>
    );
}

useGLTF.preload("/assets/models/paint_pallet/paint_palette.glb");
