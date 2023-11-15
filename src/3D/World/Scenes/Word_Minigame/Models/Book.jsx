import React from 'react'
import { useGLTF, Html } from '@react-three/drei';
import { Poem } from '../Text/Poem';

export const Book = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/book/Book.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.015, 0]} rotation={[2.88, 0, Math.PI]}>
                <mesh
                    castShadow
                    
                    geometry={nodes.Cube001.geometry}
                    material={materials.Cover}
                />
                <mesh
                    castShadow
                    // receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.Paper}
                >
                    <Html position={[0,-.1,-0.55]} transform occlude  rotation-x={-Math.PI/2} rotation-z={Math.PI/2}>
                        <Poem  />
                    </Html>
                </mesh>
            </group>
            <mesh
                castShadow
                
                geometry={nodes.Line_in_the_middle.geometry}
                material={materials.Black}
                position={[0, -0.097, 0]}
                scale={[0.949, 0.01, 0.01]}
            />
            <group position={[0, 0.015, 0]} rotation={[2.88, 0, Math.PI]}>
                <mesh
                    castShadow
                    
                    geometry={nodes.Cube003.geometry}
                    material={materials.Cover}
                />
                <mesh
                    castShadow
                    
                    geometry={nodes.Cube003_1.geometry}
                    material={materials.Paper}
                />
            </group>
        </group>
    );

}

useGLTF.preload("/assets/models/book/Book.glb")