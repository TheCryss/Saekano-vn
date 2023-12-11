import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from "@react-three/drei";
import { BallCollider, CuboidCollider, RigidBody } from '@react-three/rapier';
const Beach3D = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/assets/models/beach/beach.glb");
    const { actions } = useAnimations(animations, group);

    // useEffect(() => {
    //     const action = actions["Idle"]
    //     action.play()
    // }, [])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Palm1"
                    position={[13, 5.35, -13.85]}
                    rotation={[-2.861, 0, -Math.PI]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane003"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003.geometry}
                        material={materials["Palm_leaf.025"]}
                    />
                    <mesh
                        name="Plane003_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003_1.geometry}
                        material={materials["Palm_leaf.026"]}
                    />
                    <mesh
                        name="Plane003_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003_2.geometry}
                        material={materials["Palm_leaf.027"]}
                    />
                    <mesh
                        name="Plane003_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003_3.geometry}
                        material={materials["Palm_leaf.028"]}
                    />
                    <mesh
                        name="Plane003_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003_4.geometry}
                        material={materials["Palm_leaf.029"]}
                    />
                    <mesh
                        name="Plane003_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane003_5.geometry}
                        material={materials["Palm_leaf.030"]}
                    />
                    {/* wood 1 */}
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[2, 1, 0.5]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane003_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane003_6.geometry}
                            material={materials["Palm_wood.002"]}
                        />
                    </RigidBody>
                </group>
                <group
                    name="Palm2"
                    position={[9, 5.35, -0.85]}
                    rotation={[-2.861, 0, -Math.PI]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane004"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004.geometry}
                        material={materials["Palm_leaf.031"]}
                    />
                    <mesh
                        name="Plane004_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials["Palm_leaf.032"]}
                    />
                    <mesh
                        name="Plane004_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004_2.geometry}
                        material={materials["Palm_leaf.033"]}
                    />
                    <mesh
                        name="Plane004_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004_3.geometry}
                        material={materials["Palm_leaf.034"]}
                    />
                    <mesh
                        name="Plane004_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004_4.geometry}
                        material={materials["Palm_leaf.035"]}
                    />
                    <mesh
                        name="Plane004_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane004_5.geometry}
                        material={materials["Palm_leaf.036"]}
                    />
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[2, 1, 0.3]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane004_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane004_6.geometry}
                            material={materials["Palm_wood.003"]}
                        />
                    </RigidBody>
                </group>

                <group
                    name="Palm3"
                    position={[7, 5.35, -15.85]}
                    rotation={[-0.281, 0, 0]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane005"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005.geometry}
                        material={materials["Palm_leaf.037"]}
                    />
                    <mesh
                        name="Plane005_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005_1.geometry}
                        material={materials["Palm_leaf.038"]}
                    />
                    <mesh
                        name="Plane005_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005_2.geometry}
                        material={materials["Palm_leaf.039"]}
                    />
                    <mesh
                        name="Plane005_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005_3.geometry}
                        material={materials["Palm_leaf.040"]}
                    />
                    <mesh
                        name="Plane005_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005_4.geometry}
                        material={materials["Palm_leaf.041"]}
                    />
                    <mesh
                        name="Plane005_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane005_5.geometry}
                        material={materials["Palm_leaf.042"]}
                    />
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.5, 1, 0.3]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane005_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane005_6.geometry}
                            material={materials["Palm_wood.004"]}
                        />
                    </RigidBody>
                </group>
                <group
                    name="Palm4"
                    position={[-5, 5.35, -15.85]}
                    rotation={[-0.281, 0, 0]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane006"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006.geometry}
                        material={materials["Palm_leaf.043"]}
                    />
                    <mesh
                        name="Plane006_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006_1.geometry}
                        material={materials["Palm_leaf.044"]}
                    />
                    <mesh
                        name="Plane006_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006_2.geometry}
                        material={materials["Palm_leaf.045"]}
                    />
                    <mesh
                        name="Plane006_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006_3.geometry}
                        material={materials["Palm_leaf.046"]}
                    />
                    <mesh
                        name="Plane006_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006_4.geometry}
                        material={materials["Palm_leaf.047"]}
                    />
                    <mesh
                        name="Plane006_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane006_5.geometry}
                        material={materials["Palm_leaf.048"]}
                    />
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.5, 1, 0.3]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane006_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane006_6.geometry}
                            material={materials["Palm_wood.005"]}
                        />
                    </RigidBody>
                </group>
                <group
                    name="Palm5"
                    position={[-11, 5.35, 3.15]}
                    rotation={[-2.861, 0, -Math.PI]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane007"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007.geometry}
                        material={materials["Palm_leaf.049"]}
                    />
                    <mesh
                        name="Plane007_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007_1.geometry}
                        material={materials["Palm_leaf.050"]}
                    />
                    <mesh
                        name="Plane007_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007_2.geometry}
                        material={materials["Palm_leaf.051"]}
                    />
                    <mesh
                        name="Plane007_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007_3.geometry}
                        material={materials["Palm_leaf.052"]}
                    />
                    <mesh
                        name="Plane007_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007_4.geometry}
                        material={materials["Palm_leaf.053"]}
                    />
                    <mesh
                        name="Plane007_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane007_5.geometry}
                        material={materials["Palm_leaf.054"]}
                    />
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.5, 1, 0.3]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane007_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane007_6.geometry}
                            material={materials["Palm_wood.006"]}
                        />
                    </RigidBody>
                </group>
                <group
                    name="Palm0"
                    position={[-15, 5.35, -15.85]}
                    rotation={[-0.281, 0, 0]}
                    scale={[0.24, 1, 1]}
                >
                    <mesh
                        name="Plane002"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002.geometry}
                        material={materials.Palm_leaf}
                    />
                    <mesh
                        name="Plane002_1"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002_1.geometry}
                        material={materials["Palm_leaf.002"]}
                    />
                    <mesh
                        name="Plane002_2"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002_2.geometry}
                        material={materials["Palm_leaf.003"]}
                    />
                    <mesh
                        name="Plane002_3"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002_3.geometry}
                        material={materials["Palm_leaf.004"]}
                    />
                    <mesh
                        name="Plane002_4"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002_4.geometry}
                        material={materials["Palm_leaf.005"]}
                    />
                    <mesh
                        name="Plane002_5"
                        // castShadow
                        //receiveShadow
                        geometry={nodes.Plane002_5.geometry}
                        material={materials["Palm_leaf.006"]}
                    />
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.5, 1, 0.3]}
                            position={[0, -3.5, -0.26]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            name="Plane002_6"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane002_6.geometry}
                            material={materials.Palm_wood}
                        />
                    </RigidBody>
                </group>
                {/* <RigidBody type="fixed" colliders="cuboid" wireframe>
                    <mesh
                        name="Transparent1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent1.geometry}
                        material={materials.Transparent}
                        position={[-17.4, 4.6, 0]}
                        scale={[0.1, 4.1, 18.592]}
                    />
                </RigidBody> */}
                {/* <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[0.1, 4.1, 18.592]}
                        position={[-17.371, 4.899, 0]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="Transparent2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent2.geometry}
                        material={materials.Transparent}
                        position={[17.371, 4.899, 0]}
                        scale={[0.1, 4.1, 18.592]}
                    />
                </RigidBody> */}

                {/* wall 2 */}
                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[0.6, 2, 18.592]}
                        position={[0, 2, -17.385]}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="Transparent3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent3.geometry}
                        material={materials.Transparent}
                        position={[-0.015, 4.899, -17.385]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[0.1, 4.1, 18.592]}
                    />
                </RigidBody>

                {/* wall 3 */}
                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[0.1, 2, 18.592]}
                        position={[0, 2, 17.385]}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="Transparent4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent4.geometry}
                        material={materials.Transparent}
                        position={[-0.015, 4.6, 17.385]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[0.1, 4.1, 18.592]}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[1.6, 0.9, 1.55]}
                        position={[-12.87, 0.8, -10]}
                        rotation={[0, 0.217, 0]}
                    />

                    <mesh
                        name="Chair1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair1.geometry}
                        material={materials.Chair}
                        position={[-13.363, 0.974, -10.513]}
                        rotation={[0, 0.217, 0]}
                    />

                </RigidBody>
                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[1.68, 0.4, 0.6]}
                        position={[-13.13, 1.6, -11]}
                        rotation={[0.6, 0.2, - 0.14]}
                    />
                    <mesh
                        name="Chair2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair2.geometry}
                        material={materials.Chair}
                        position={[-11.64, 0.974, -10.869]}
                        rotation={[0, 0.217, 0]}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[1.6, 0.9, 1.55]}
                        position={[10.6, 0.8, -8.8]}
                        rotation={[0, -0.3, 0]}
                    />
                    <mesh
                        name="Chair3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair3.geometry}
                        material={materials.Chair}
                        position={[10.545, 0.974, -9.58]}
                        rotation={[0, -0.316, 0]}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[1.68, 0.4, 0.6]}
                        position={[11, 1.6, -9.7]}
                        rotation={[0.6, -0.3, 0.2]}
                    />
                    <mesh
                        name="Chair4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair4.geometry}
                        material={materials.Chair}
                        position={[12.209, 0.974, -9.011]}
                        rotation={[0, -0.316, 0]}
                    />
                </RigidBody>
                <mesh
                    name="Towel1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Towel1.geometry}
                    material={materials.towel2}
                    position={[-1, 0.8, 0]}
                    scale={[1, 1, 2]}
                />
                <mesh
                    name="Towel2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Towel2.geometry}
                    material={materials.towel1}
                    position={[-4, 0.8, 0]}
                    scale={[1, 1, 2]}
                />
                <mesh
                    name="Towel3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Towel3.geometry}
                    material={materials.towel3}
                    position={[2, 0.8, 0]}
                    scale={[1, 1, 2]}
                />
                <mesh
                    name="Towel4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Towel4.geometry}
                    material={materials.towel4}
                    position={[5, 0.8, 0]}
                    scale={[1, 1, 2]}
                />
                <mesh
                    name="Fence1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, 1.219]}
                />
                <mesh
                    name="Fence1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1001.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, 5.9]}
                />
                <mesh
                    name="Fence1002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1002.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, 3.55]}
                />
                <mesh
                    name="Fence1003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1003.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -1.256]}
                />
                <mesh
                    name="Fence1004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1004.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -3.586]}
                />
                <mesh
                    name="Fence1005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1005.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, 8.272]}
                />
                <mesh
                    name="Fence1006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1006.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -13.218]}
                />
                <mesh
                    name="Fence1007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1007.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -10.888]}
                />
                <mesh
                    name="Fence1008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1008.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -6.082]}
                />
                <mesh
                    name="Fence1009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1009.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -8.413]}
                />
                <mesh
                    name="Fence1010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1010.geometry}
                    material={materials.Fence}
                    position={[-17.2, 1.1, -15.425]}
                />
                <mesh
                    name="Fence1011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1011.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -15.425]}
                />
                <mesh
                    name="Fence1012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1012.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -8.413]}
                />
                <mesh
                    name="Fence1013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1013.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -6.082]}
                />
                <mesh
                    name="Fence1014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1014.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -10.888]}
                />
                <mesh
                    name="Fence1015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1015.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -13.218]}
                />
                <mesh
                    name="Fence1016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1016.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, 8.272]}
                />
                <mesh
                    name="Fence1017"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1017.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -3.586]}
                />
                <mesh
                    name="Fence1018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1018.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, -1.256]}
                />
                <mesh
                    name="Fence1019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1019.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, 3.55]}
                />
                <mesh
                    name="Fence1020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1020.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, 5.9]}
                />
                <mesh
                    name="Fence1021"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1021.geometry}
                    material={materials.Fence}
                    position={[16.98, 1.1, 1.219]}
                />
                <mesh
                    name="Fence1022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1022.geometry}
                    material={materials.Fence}
                    position={[-2.033, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1023"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1023.geometry}
                    material={materials.Fence}
                    position={[-6.714, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1024.geometry}
                    material={materials.Fence}
                    position={[-4.364, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1025"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1025.geometry}
                    material={materials.Fence}
                    position={[0.442, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1026.geometry}
                    material={materials.Fence}
                    position={[2.772, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1027"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1027.geometry}
                    material={materials.Fence}
                    position={[-9.086, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1028.geometry}
                    material={materials.Fence}
                    position={[12.404, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1029"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1029.geometry}
                    material={materials.Fence}
                    position={[10.073, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1030.geometry}
                    material={materials.Fence}
                    position={[5.268, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1031.geometry}
                    material={materials.Fence}
                    position={[7.598, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1032.geometry}
                    material={materials.Fence}
                    position={[14.611, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1034.geometry}
                    material={materials.Fence}
                    position={[-14.161, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1035"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1035.geometry}
                    material={materials.Fence}
                    position={[-16.511, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Fence1036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Fence1036.geometry}
                    material={materials.Fence}
                    position={[-11.555, 1.1, -17.055]}
                    rotation={[0, -Math.PI / 2, 0]}
                />
                <group
                    name="Umbrella1"
                    position={[8.327, 1.633, 4.277]}
                    rotation={[Math.PI / 2, -0.2, 0]}
                >
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[0.35, 0.35, 1]}
                            position={[-1, 0, -0.5]}
                            rotation={[-0, 0, 0]}
                        />
                        <mesh
                            name="Plane013"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane013.geometry}
                            material={materials.Gray}
                        />
                    </RigidBody>
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.8, 1.8, 0.9]}
                            position={[-1, 0, -1.5]}
                            rotation={[-0, 0, 0]}
                        />
                        <mesh
                            name="Plane013_1"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane013_1.geometry}
                            material={materials.Pink}
                        />
                    </RigidBody>
                </group>
                <group
                    name="Umbrella2"
                    position={[-7, 1.822, -2.723]}
                    rotation={[Math.PI / 2, 0.094, 0]}
                >
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[0.35, 0.35, 1]}
                            position={[-1, 0, -0.5]}
                            rotation={[-0, 0, 0]}
                        />
                        <mesh
                            name="Plane014"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane014.geometry}
                            material={materials["Gray.001"]}
                        />
                    </RigidBody>
                    <RigidBody type="fixed" colliders={false} wireframe>
                        <CuboidCollider
                            args={[1.8, 1.8, 0.9]}
                            position={[-1, 0, -1.5]}
                            rotation={[-0, 0, 0]}
                        />
                        <mesh
                            name="Plane014_1"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Plane014_1.geometry}
                            material={materials.Blue}
                        />
                    </RigidBody>
                </group>

                {/* Water */}
                <mesh
                    name="Water"
                    castShadow
                    receiveShadow
                    geometry={nodes.Water.geometry}
                    material={materials.Water_Plane}
                    position={[0, 0.703, 13.13]}
                />

                { /* Floor */}
                <group name="Floor" position={[0, 0.5, 0]}>
                    <RigidBody type="fixed" colliders="cuboid" wireframe>
                        <mesh
                            name="Cube002"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Cube002.geometry}
                            material={materials.Sand}
                        />
                    </RigidBody>
                    <RigidBody type="fixed" colliders="cuboid" wireframe>
                        <mesh
                            name="Cube002_1"
                            // castShadow
                            //receiveShadow
                            geometry={nodes.Cube002_1.geometry}
                            material={materials.Water_Plane}
                        />
                    </RigidBody>
                </group>


                <group name="Empty" position={[0, 0.9, 36]} />
                { /* Wall 1 */}
                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[0.5, 3, 18.592]}
                        position={[-17.4, 1.6, 0]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="Transparent"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent.geometry}
                        material={materials["Transparent.001"]}
                        position={[-17.4, 1.6, 0]}
                        scale={[0.1, 1, 18.592]}
                    />
                </RigidBody>

                { /* Wall 1 */}
                <RigidBody type="fixed" colliders={false} wireframe>
                    <CuboidCollider
                        args={[0.35, 3, 18.592]}
                        position={[17, 1.6, 0]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="Transparent"
                        castShadow
                        receiveShadow
                        geometry={nodes.Transparent.geometry}
                        material={materials["Transparent.001"]}
                        position={[-17.4, 1.6, 0]}
                        scale={[0.1, 1, 18.592]}
                    />
                </RigidBody>
            </group>
        </group>
    );
}

export default Beach3D
useGLTF.preload("/assets/models/beach/beach.glb");
