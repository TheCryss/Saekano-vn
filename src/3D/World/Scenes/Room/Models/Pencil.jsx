
import React, { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

import { useGLTF } from "@react-three/drei";

export function Pencil(props) {
    const { nodes, materials } = useGLTF("/assets/models/pencil/pencil.glb");
    return (
        <RigidBody colliders={"cuboid"}  type="fixed" >

        <group {...props} dispose={null}>
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Yellow}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_1.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_2.geometry}
                material={materials.Wood}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_3.geometry}
                material={materials.Silver}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_4.geometry}
                material={materials.Red}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_5.geometry}
                material={materials["Silver.001"]}
            />
            <mesh
                castShadow
                // receiveShadow
                geometry={nodes.Cylinder_6.geometry}
                material={materials.Pink}
            />
        </group>
        </RigidBody>
    );
}

useGLTF.preload("/assets/models/pencil/pencil.glb");