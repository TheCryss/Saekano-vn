import React from 'react'
import { useGLTF } from '@react-three/drei';

export const PlayableCharacter = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/playable_character/Character.glb");

    return (
        <group {...props} dispose={null} rotation-y={-Math.PI/2}>
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Character.geometry}
                material={nodes.Character.material}

                
            >
                {/* <meshStandardMaterial wireframe color={"#F2C6F5"} /> */}
            </mesh>
        </group>
    );
}

useGLTF.preload("/assets/models/playable_character/Character.glb");