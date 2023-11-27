import { useRef, useEffect } from 'react'
import { useGLTF, Html, useAnimations } from '@react-three/drei';
import { Poem } from '../Text/Poem';


/*     <Html Html position = { [0, -.1, -0.55]} transform occlude  rotation - x={ -Math.PI / 2 } rotation - z={ Math.PI / 2 }>
        <Poem />
                    </Html > */
export const Book = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/book/Book.glb");
    const { actions } = useAnimations(animations, group);

        useEffect(() => {
            const action = actions["Move"]
            // action.play()
        }, []) 

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Book_Right"
                    position={[0, 0.015, 0]}
                    rotation={[2.88, 0, Math.PI]}
                >
                    <mesh
                        name="Cube001"
                        castShadow
                        // receiveShadow
                        geometry={nodes.Cube001.geometry}
                        material={materials.Cover}
                    />
                    <mesh
                        name="Cube001_1"
                        castShadow
                        // receiveShadow
                        geometry={nodes.Cube001_1.geometry}
                        material={materials.Paper}
                    >
{/*                     <Html position={[0,-0.1,-.6]} transform occlude  rotation-x={-Math.PI/2} rotation-z={Math.PI/2}>
                        <Poem  />
                    </Html> */}
                    </mesh>
                </group>
                <mesh
                    name="Line_in_the_middle"
                    castShadow
                    // receiveShadow
                    geometry={nodes.Line_in_the_middle.geometry}
                    material={materials.Black}
                    position={[0, -0.097, 0]}
                    scale={[0.949, 0.01, 0.01]}
                />
                <group
                    name="Book_Left"
                    position={[0, 0.015, 0]}
                    rotation={[2.88, 0, Math.PI]}
                >
                    <mesh
                        name="Cube003"
                        castShadow
                        // receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials.Cover}
                    />
                    <mesh
                        name="Cube003_1"
                        castShadow
                        // receiveShadow
                        geometry={nodes.Cube003_1.geometry}
                        material={materials.Paper}
                    />
                </group>
                <mesh
                    name="Hoja"
                    castShadow
                    // receiveShadow
                    geometry={nodes.Hoja.geometry}
                    material={materials.Paper}
                    position={[0, 0.057, 0.56]}
                    rotation={[-0.262, 0, 0]}
                >
                    <Html position={[0,1e-3,0]} transform occlude  rotation-x={-Math.PI/2} rotation-z={-Math.PI/2}>
                        <Poem  />
                    </Html>
                </mesh>
            </group>
        </group>
    );

}

useGLTF.preload("/assets/models/book/Book.glb")