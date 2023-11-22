import { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";

export const Utaha = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/utaha/Utaha.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        const action = actions["Idle"]
        action.play()
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" position={[0, 0.495, 0]}>
                    <group name="Hair_14">
                        <skinnedMesh
                            name="NurbsPath006"
                            geometry={nodes.NurbsPath006.geometry}
                            material={materials.Hair}
                            skeleton={nodes.NurbsPath006.skeleton}
                        />
                        <skinnedMesh
                            name="NurbsPath006_1"
                            geometry={nodes.NurbsPath006_1.geometry}
                            material={materials.Skin}
                            skeleton={nodes.NurbsPath006_1.skeleton}
                        />
                        <skinnedMesh
                            name="NurbsPath006_2"
                            geometry={nodes.NurbsPath006_2.geometry}
                            material={materials.Eyes}
                            skeleton={nodes.NurbsPath006_2.skeleton}
                        />
                        <skinnedMesh
                            name="NurbsPath006_3"
                            geometry={nodes.NurbsPath006_3.geometry}
                            material={materials.Uniform_blue}
                            skeleton={nodes.NurbsPath006_3.skeleton}
                        />
                        <skinnedMesh
                            name="NurbsPath006_4"
                            geometry={nodes.NurbsPath006_4.geometry}
                            material={materials.Uniform_White}
                            skeleton={nodes.NurbsPath006_4.skeleton}
                        />
                        <skinnedMesh
                            name="NurbsPath006_5"
                            geometry={nodes.NurbsPath006_5.geometry}
                            material={materials.Uniform_Black}
                            skeleton={nodes.NurbsPath006_5.skeleton}
                        />
                    </group>
                    <primitive object={nodes.Root} />
                    <primitive object={nodes.IKLegPolL} />
                    <primitive object={nodes.IKTargetL} />
                    <primitive object={nodes.IKLegPolR} />
                    <primitive object={nodes.IKTargetR} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/utaha/Utaha.glb");