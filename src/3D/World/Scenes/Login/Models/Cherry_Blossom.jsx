import { useGLTF } from "@react-three/drei";

export const Cherry_Blossom = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/cherry_blossom/sakura_tree.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    
                    geometry={nodes.Object_2.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    
                    geometry={nodes.Object_3.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    
                    geometry={nodes.Object_4.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    
                    geometry={nodes.Object_5.geometry}
                    material={materials["Material.004"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/cherry_blossom/sakura_tree.glb");