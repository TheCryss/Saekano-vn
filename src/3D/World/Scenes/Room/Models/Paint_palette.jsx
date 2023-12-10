import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Paint_palette(props) {
    const { nodes, materials } = useGLTF("/assets/models/paint_pallet/paint_palette.glb");
    return (
        <RigidBody colliders={"cuboid"}  type="fixed" >

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
        </RigidBody>
    );
}

useGLTF.preload("/assets/models/paint_pallet/paint_palette.glb");
