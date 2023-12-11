import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';
import { setMegumiInteraction } from '../../../../../store/slicers/RoomSlicers';
import { useDispatch, useSelector } from "react-redux";

export const Megumi = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/megumi/Megumi.glb");
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
                    onIntersectionEnter={(() => dispatch(setMegumiInteraction(true)))}
                    onIntersectionExit={(() => dispatch(setMegumiInteraction(false)))}
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
                        <group name="Head">
                            <skinnedMesh
                                name="Cube001"
                                geometry={nodes.Cube001.geometry}
                                material={materials.Skin}
                                skeleton={nodes.Cube001.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_1"
                                geometry={nodes.Cube001_1.geometry}
                                material={materials.Hair}
                                skeleton={nodes.Cube001_1.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_2"
                                geometry={nodes.Cube001_2.geometry}
                                material={materials.Eyes}
                                skeleton={nodes.Cube001_2.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_3"
                                geometry={nodes.Cube001_3.geometry}
                                material={materials.Bun}
                                skeleton={nodes.Cube001_3.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_4"
                                geometry={nodes.Cube001_4.geometry}
                                material={materials.Uniform_blue}
                                skeleton={nodes.Cube001_4.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_5"
                                geometry={nodes.Cube001_5.geometry}
                                material={materials.Uniform_White}
                                skeleton={nodes.Cube001_5.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_6"
                                geometry={nodes.Cube001_6.geometry}
                                material={materials.Uniform_Black}
                                skeleton={nodes.Cube001_6.skeleton}
                                castShadow

                            />
                            <skinnedMesh
                                name="Cube001_7"
                                geometry={nodes.Cube001_7.geometry}
                                material={materials.Uniform_White_Skirt}
                                skeleton={nodes.Cube001_7.skeleton}
                                castShadow

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
useGLTF.preload("/assets/models/megumi/Megumi.glb");
