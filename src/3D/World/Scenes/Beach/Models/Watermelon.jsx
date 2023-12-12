import React, { useRef, useEffect, useState } from "react";

import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export const Watermelon = (props) => {
    const [renderWatermelon, setRenderWatermelon] = useState(false);
    useEffect(() => {
        if (props.position != [0, 0, 0]) {
            setRenderWatermelon(true)
        }
    }, [props.position]);
    const { nodes, materials } = useGLTF("/assets/models/watermelon/Watermelon.glb");
    return (
        <>


            {renderWatermelon &&
                <>
                    <RigidBody type="fixed" colliders="cuboid" position={props.position}>
                        <CuboidCollider
                            args={[1.25, 1.75, 1]}
                        />
                    </RigidBody>
                    <RigidBody type={"fixed"} position-y={3} position={props.position}>
                        <CuboidCollider
                            args={[3, 3, 3]}
                            sensor
                            // onIntersectionEnter={(() => dispatch(setEririInteraction(true)))}
                            // onIntersectionExit={(() => dispatch(setEririInteraction(false)))}
                        />
                    </RigidBody>
                </>
            }
            <group {...props} dispose={null}>
                <group
                    position={[0, 1, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1.014, 1.425, 1]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_1.geometry}
                        material={materials.Light_green}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_2.geometry}
                        material={materials.Dark_green}
                    />
                </group>
            </group>

        </>
    );
}

useGLTF.preload("/assets/models/watermelon/Watermelon.glb");