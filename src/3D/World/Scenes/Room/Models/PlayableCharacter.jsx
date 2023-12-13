import {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useKeyboardControls } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { setInteraction } from '../../../../../store/slicers/RoomSlicers';
export const PlayableCharacter = (props) => {
    const group = useRef();
    const { nodes, materials,animations } = useGLTF("/assets/models/playable_character/Tomoya.glb");
    const { actions } = useAnimations(animations, group);
    const dispatch = useDispatch();
    const getInteraction = useSelector(state => state.room.interaction)
    const interactPressed = useKeyboardControls(state => state.action1)

    useEffect(() => {
        if (interactPressed) {
            dispatch(setInteraction(true));
		} else dispatch(setInteraction(false));
    }, [interactPressed]);


    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" position={[0, 0.495, 0]}>
                    <group name="Left_eye">
                        <skinnedMesh
                            name="Cube003"
                            castShadow
                            geometry={nodes.Cube003.geometry}
                            material={materials.Eyes}
                            skeleton={nodes.Cube003.skeleton}
                        />
                        <skinnedMesh
                            name="Cube003_1"
                            castShadow
                            geometry={nodes.Cube003_1.geometry}
                            material={materials.Uniform_Blue}
                            skeleton={nodes.Cube003_1.skeleton}
                        />
                        <skinnedMesh
                            name="Cube003_2"
                            castShadow
                            geometry={nodes.Cube003_2.geometry}
                            material={materials.Uniform_Black}
                            skeleton={nodes.Cube003_2.skeleton}
                        />
                        <skinnedMesh
                            name="Cube003_3"
                            castShadow
                            geometry={nodes.Cube003_3.geometry}
                            material={materials.Uniform_White}
                            skeleton={nodes.Cube003_3.skeleton}
                        />
                        <skinnedMesh
                            name="Cube003_4"
                            castShadow
                            geometry={nodes.Cube003_4.geometry}
                            material={materials["Skin.001"]}
                            skeleton={nodes.Cube003_4.skeleton}
                        />
                        <skinnedMesh
                            name="Cube003_5"
                            castShadow
                            geometry={nodes.Cube003_5.geometry}
                            material={materials["Hair.001"]}
                            skeleton={nodes.Cube003_5.skeleton}
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

useGLTF.preload("/assets/models/playable_character/Tomoya.glb");