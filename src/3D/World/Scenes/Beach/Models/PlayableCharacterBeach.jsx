import { useEffect, useRef, forwardRef } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useKeyboardControls } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { setInteraction } from '../../../../../store/slicers/RoomSlicers';
export const PlayableCharacterBeach = forwardRef((props, ref) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/models/playable_character/TomoyaBeach.glb");
    const dispatch = useDispatch();
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
                    <group name="Tomoya" ref={ref}>
                        <skinnedMesh
                            name="Cube006"
                            geometry={nodes.Cube006.geometry}
                            material={materials["Skin.001"]}
                            skeleton={nodes.Cube006.skeleton}
                            castShadow

                        />
                        <skinnedMesh
                            name="Cube006_1"
                            geometry={nodes.Cube006_1.geometry}
                            material={materials.Hair}
                            skeleton={nodes.Cube006_1.skeleton}
                            castShadow

                        />
                        <skinnedMesh
                            name="Cube006_2"
                            geometry={nodes.Cube006_2.geometry}
                            material={materials.Eyes}
                            skeleton={nodes.Cube006_2.skeleton}
                            castShadow

                        />
                        <skinnedMesh
                            name="Cube006_3"
                            geometry={nodes.Cube006_3.geometry}
                            material={materials.Uniform_Blue}
                            skeleton={nodes.Cube006_3.skeleton}
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
    );
})

useGLTF.preload("/assets/models/playable_character/TomoyaBeach.glb");