import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export function SandCastle(props) {
  const { nodes } = useGLTF("/assets/models/sand_castle/sand_castle.glb");
  const {  materials} = useGLTF("/assets/models/beach/beach.glb");
  return (
    <>
      <RigidBody type="fixed" colliders="cuboid"  position={props.position}>
        <CuboidCollider
          args={[1.25, 1.75, 1]}
        />
      </RigidBody>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Sand}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/assets/models/sand_castle/sand_castle.glb");