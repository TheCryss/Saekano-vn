import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';
import { setUtahaInteraction } from '../../../../../store/slicers/RoomSlicers';
import { useDispatch, useSelector } from "react-redux";


export const UtahaBeach= (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/utaha/UtahaBeach.glb");
    const { actions } = useAnimations(animations, group);

    const dispatch = useDispatch();
    useEffect(() => {
        const action = actions["Idle"]
        action.play()
    }, [])

    return (
        <>
            <RigidBody type={"fixed"} position-y={3} position={props.position} >
                <CuboidCollider
                    args={[3, 3, 3]}
                    sensor
                    onIntersectionEnter={(() => dispatch(setUtahaInteraction(true)))}
                    onIntersectionExit={(() => dispatch(setUtahaInteraction(false)))}
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
                        <group name="Utaha">
                            <skinnedMesh
                                name="Cube001"
                                geometry={nodes.Cube001.geometry}
                                material={materials["Skin.002"]}
                                skeleton={nodes.Cube001.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_1"
                                geometry={nodes.Cube001_1.geometry}
                                material={materials.Uniform_Blue}
                                skeleton={nodes.Cube001_1.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_2"
                                geometry={nodes.Cube001_2.geometry}
                                material={materials["Eyes.001"]}
                                skeleton={nodes.Cube001_2.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_3"
                                geometry={nodes.Cube001_3.geometry}
                                material={materials["Skin.003"]}
                                skeleton={nodes.Cube001_3.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_4"
                                geometry={nodes.Cube001_4.geometry}
                                material={materials["Hair.001"]}
                                skeleton={nodes.Cube001_4.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_5"
                                geometry={nodes.Cube001_5.geometry}
                                material={materials["Skin.001"]}
                                skeleton={nodes.Cube001_5.skeleton}
                            />
                            <skinnedMesh
                                name="Cube001_6"
                                geometry={nodes.Cube001_6.geometry}
                                material={materials.Skin}
                                skeleton={nodes.Cube001_6.skeleton}
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

useGLTF.preload("/assets/models/utaha/UtahaBeach.glb");