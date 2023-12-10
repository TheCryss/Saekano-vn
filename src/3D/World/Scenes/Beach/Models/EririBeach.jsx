import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';
import { setEririInteraction } from '../../../../../store/slicers/RoomSlicers';
import { useDispatch } from "react-redux";


export const EririBeach = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/eriri/EririBeach.glb");
    const { actions } = useAnimations(animations, group);

    const dispatch = useDispatch();
    useEffect(() => {
        const action = actions["Idle"]
        action.play()
    }, [])

    return (
        <>
            <RigidBody type={"fixed"} position-y={3} position={props.position}>
                <CuboidCollider
                    args={[3, 3, 3]}
                    sensor
                    onIntersectionEnter={(() => dispatch(setEririInteraction(true)))}
                    onIntersectionExit={(() => dispatch(setEririInteraction(false)))}
                />
            </RigidBody>
            <RigidBody type="fixed" colliders="cuboid" position-y={2} position={props.position}>
                <CuboidCollider
                    args={[1.25, 1.75, 1]}
                />
            </RigidBody>
            <group ref={group} {...props} dispose={null}>
                <group name="Scene">
                    <group name="Armature" position={[0, 0.495, 0]}>
                        <group name="Eriri">
                            <skinnedMesh
                                name="NurbsPath011"
                                geometry={nodes.NurbsPath011.geometry}
                                material={materials["Hair.001"]}
                                skeleton={nodes.NurbsPath011.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_1"
                                geometry={nodes.NurbsPath011_1.geometry}
                                material={materials["Eyes.001"]}
                                skeleton={nodes.NurbsPath011_1.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_2"
                                geometry={nodes.NurbsPath011_2.geometry}
                                material={materials["Skin.003"]}
                                skeleton={nodes.NurbsPath011_2.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_3"
                                geometry={nodes.NurbsPath011_3.geometry}
                                material={materials["Skin.002"]}
                                skeleton={nodes.NurbsPath011_3.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_4"
                                geometry={nodes.NurbsPath011_4.geometry}
                                material={materials.Uniform_Blue}
                                skeleton={nodes.NurbsPath011_4.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_5"
                                geometry={nodes.NurbsPath011_5.geometry}
                                material={materials["Skin.001"]}
                                skeleton={nodes.NurbsPath011_5.skeleton}
                            />
                            <skinnedMesh
                                name="NurbsPath011_6"
                                geometry={nodes.NurbsPath011_6.geometry}
                                material={materials.Skin}
                                skeleton={nodes.NurbsPath011_6.skeleton}
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
        </>
    );
}

useGLTF.preload("/assets/models/eriri/EririBeach.glb");