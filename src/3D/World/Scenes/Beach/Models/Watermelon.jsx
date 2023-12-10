import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export const Watermelon = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/watermelon/Watermelon.glb");
    return (
        <group {...props} dispose={null}>
            <group
                position={[0, 1, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.014, 1.425, 1]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_1.geometry}
                    material={materials.Light_green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_2.geometry}
                    material={materials.Dark_green}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/watermelon/Watermelon.glb");