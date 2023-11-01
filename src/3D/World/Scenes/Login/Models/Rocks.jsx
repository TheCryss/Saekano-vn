import { useGLTF } from "@react-three/drei";


export const Rocks = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/rocks/rocks_set.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation-x={[-Math.PI / 2]}  >
                <mesh
                    castShadow
                    scale={0.5}
                    position={[500, 0, 0]}
                    geometry={nodes.Object_3.geometry}
                    material={materials.initialShadingGroup_3}
                />
{/*                 <mesh
                    castShadow
                    scale={0.5}
                    // rotation-y={Math.PI }
                    position={[0, 0, 0]}
                    geometry={nodes.Object_3.geometry}
                    material={materials.initialShadingGroup_3}
                /> */}


                <mesh
                    castShadow
                    position={[350, 560, 0]}

                    geometry={nodes.Object_9.geometry}
                    material={materials.initialShadingGroup_0}
                />
                <mesh
                    castShadow
                    position={[500, 450, 0]}
                    geometry={nodes.Object_11.geometry}
                    material={materials.initialShadingGroup}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/rocks/rocks_set.glb");