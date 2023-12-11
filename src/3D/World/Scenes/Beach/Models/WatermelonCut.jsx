import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export const WatermelonCut = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/watermelon/Watermelon_cut.glb");
    return (
        <>
            <RigidBody type="fixed" colliders="cuboid" position={props.position}>
                <CuboidCollider
                    args={[1.25, 1.75, 1]}
                />
            </RigidBody>
            <group {...props} dispose={null}>
                <group
                    position={[0.007, 1.747, -0.892]}
                    rotation={[-Math.PI / 6, 0, 0]}
                    scale={[0.036, 0.067, 0.036]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_1.geometry}
                        material={materials.Black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_2.geometry}
                        material={materials.Red}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_3.geometry}
                        material={materials.Light_green}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_4.geometry}
                        material={materials.Dark_green}
                    />
                </group>
                <group
                    position={[0.007, 1.766, 0.878]}
                    rotation={[-2.618, 0, Math.PI]}
                    scale={[0.036, 0.067, 0.036]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012.geometry}
                        material={materials["Black.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_1.geometry}
                        material={materials["Red.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_2.geometry}
                        material={materials["Light_green.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012_3.geometry}
                        material={materials["Dark_green.001"]}
                    />
                </group>
            </group>
        </>
    );
}

useGLTF.preload("/assets/models/watermelon/Watermelon_cut.glb");