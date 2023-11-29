import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CuboidCollider, Physics } from '@react-three/rapier';
import { setEririInteraction } from '../../../../../store/slicers/RoomSlicers';
import { useDispatch, useSelector } from "react-redux";


export const Eriri = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/eriri/Eriri.glb");
    const { actions } = useAnimations(animations, group);

    const dispatch = useDispatch();
    useEffect(() => {
        const action = actions["Idle"]
        action.play()
    }, [])

    return (
        <>
            <RigidBody type={"fixed"} position-y={3}  position={props.position}>
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
                                name="Cube"
                                geometry={nodes.Cube.geometry}
                                material={materials.Skin}
                                skeleton={nodes.Cube.skeleton}
                            />
                            <skinnedMesh
                                name="Cube_1"
                                geometry={nodes.Cube_1.geometry}
                                material={materials.Hair}
                                skeleton={nodes.Cube_1.skeleton}
                            />
                            <skinnedMesh
                                name="Cube_2"
                                geometry={nodes.Cube_2.geometry}
                                material={materials.Eyes}
                                skeleton={nodes.Cube_2.skeleton}
                            />
                            <skinnedMesh
                                name="Cube_3"
                                geometry={nodes.Cube_3.geometry}
                                material={materials.Uniform_blue}
                                skeleton={nodes.Cube_3.skeleton}
                            />
                            <skinnedMesh
                                name="Cube_4"
                                geometry={nodes.Cube_4.geometry}
                                material={materials.Uniform_White}
                                skeleton={nodes.Cube_4.skeleton}
                            />
                            <skinnedMesh
                                name="Cube_5"
                                geometry={nodes.Cube_5.geometry}
                                material={materials.Uniform_Black}
                                skeleton={nodes.Cube_5.skeleton}
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

useGLTF.preload("/assets/models/eriri/Eriri.glb");