import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useKeyboardControls } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { setInteraction } from '../../../../../store/slicers/RoomSlicers';


export const PCWatermelon = (props) => {
    const group = useRef();
    const { nodes, materials, animations }  = useGLTF("/assets/models/playable_character/TomoyaWatermelon.glb");
    const dispatch = useDispatch();
    const interactPressed = useKeyboardControls(state => state.action1)

    useEffect(() => {
        if (interactPressed) {
            dispatch(setInteraction(true));
        } else dispatch(setInteraction(false));
    }, [interactPressed]);

    const { actions } = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" position={[0, 0.495, 0]}>
                    <group name="Tomoya2">
                        <skinnedMesh
                            name="Cube001"
                            geometry={nodes.Cube001.geometry}
                            material={materials["Skin.002"]}
                            skeleton={nodes.Cube001.skeleton}
                        />
                        <skinnedMesh
                            name="Cube001_1"
                            geometry={nodes.Cube001_1.geometry}
                            material={materials["Hair.001"]}
                            skeleton={nodes.Cube001_1.skeleton}
                        />
                        <skinnedMesh
                            name="Cube001_2"
                            geometry={nodes.Cube001_2.geometry}
                            material={materials["Rope.001"]}
                            skeleton={nodes.Cube001_2.skeleton}
                        />
                        <skinnedMesh
                            name="Cube001_3"
                            geometry={nodes.Cube001_3.geometry}
                            material={materials["Eyes.001"]}
                            skeleton={nodes.Cube001_3.skeleton}
                        />
                        <skinnedMesh
                            name="Cube001_4"
                            geometry={nodes.Cube001_4.geometry}
                            material={materials["Uniform_Blue.001"]}
                            skeleton={nodes.Cube001_4.skeleton}
                        />
                        <skinnedMesh
                            name="Cube001_5"
                            geometry={nodes.Cube001_5.geometry}
                            material={materials["Wood.001"]}
                            skeleton={nodes.Cube001_5.skeleton}
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

useGLTF.preload("/assets/models/playable_character/TomoyaWatermelon.glb");