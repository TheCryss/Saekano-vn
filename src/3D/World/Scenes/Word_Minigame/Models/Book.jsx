import React from 'react'
import { useGLTF, Html } from '@react-three/drei';
import { Poem } from '../Text/Poem';

export const Book = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/book/Book.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.015, 0]} rotation={[2.88, 0, Math.PI]} >
                <mesh
                    castShadow
                    
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.Cover}
                >
                    <Html transform occlude rotation={[-Math.PI/2, 0, Math.PI/2]}>
                        <Poem />
                    </Html>
                </mesh>
                <mesh
                    castShadow
                    
                    geometry={nodes.Cube001_2.geometry}
                    // material={materials.Paper}
                >
                    <meshStandardMaterial ></meshStandardMaterial>
                </mesh>
            </group>
            <mesh
                castShadow
                
                geometry={nodes.Cube.geometry}
                material={materials.Black}
                position={[0, -0.097, 0]}
                scale={[0.949, 0.01, 0.01]}
            />
        </group>
    );

}

useGLTF.preload("/assets/models/book/Book.glb")