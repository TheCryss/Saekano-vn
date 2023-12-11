import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

export const Room3D = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/room/Room.glb");
    return (
        <group {...props} dispose={null}>

            {/* Library 0 */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Stall.geometry}
                    material={materials.Wood}
                    position={[-5.5, 3.5, -2]}
                />
            </RigidBody>

            {/* Library 0 books */}
            <group position={[-9.25, 0.85, -2]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials["Book 1"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials["Book 2"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube001_3.geometry}
                    material={materials["Book 4"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube001_4.geometry}
                    material={materials["Book 3"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube001_5.geometry}
                    material={materials["Book 5"]}
                />
            </group>
            <group position={[-9.25, 5.6, -2]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials["Book 1"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube024_1.geometry}
                    material={materials["Book 2"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube024_2.geometry}
                    material={materials["Book 3"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube024_3.geometry}
                    material={materials["Book 4"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube024_4.geometry}
                    material={materials["Book 5"]}
                />
            </group>

            {/* Bed */}
            <group position={[-6.993, 0.9, -8.257]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials.Wood}
                />
                {/* Mattress */}
                <RigidBody type="fixed" colliders='cuboid' wireframe>
                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube007_1.geometry}
                        material={materials.Mattress}
                    />
                </RigidBody>

                {/* Pillow */}
                <RigidBody type="fixed" colliders='cuboid' wireframe>
                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube007_2.geometry}
                        material={materials.Pillow}
                    />
                </RigidBody>
            </group>

            {/* TV */}
            <group position={[-5.5, 3.34, -2.1]} scale={[1, 1, 0.08]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube025.geometry}
                    material={materials.TV}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube025_1.geometry}
                    material={materials.TV_Screen}
                />
            </group>

            {/* Black/Brown desk */}

            <group
                position={[5, 1.591, -9.036]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1.5, 1, 1]}
            >
                <RigidBody type="fixed" colliders="cuboid" wireframe>
                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube029.geometry}
                        material={materials.Desk_Black}
                    />
                </RigidBody>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube029_1.geometry}
                    material={materials.Desk_DarkBrown}
                />

            </group>

            {/* Black/Browm chair */}
            <RigidBody type="fixed" colliders={false} wireframe>
                <CuboidCollider
                    args={[0.8, 0.8, 0.5]}
                    position={[4.85, 2.048, -6.409]}
                />

                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Chair.geometry}
                    material={materials.Chair}
                    position={[4.85, 2.048, -6.409]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </RigidBody>

            {/* Carpet blue and white*/}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Carpet.geometry}
                material={materials.Carpet}
                position={[-4.9, 0.21, 4]}
            />

            {/* Trashcan */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.TrashCan.geometry}
                    material={materials.Trashcan}
                    position={[1.079, 0.21, -8.715]}
                />
            </RigidBody>

            {/* table browm */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Table.geometry}
                    material={materials.Chair}
                    position={[-6, 0.822, 9.75]}
                />
            </RigidBody>

            {/* white chair (eriri chair)  */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Chair2.geometry}
                material={materials.Chair2}
                position={[5, 2.048, 26.3]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />

            {/* white desk (eriri desk)  */}
            <group position={[4.85, 1.6, 29.591]} scale={[1.5, 1, 1]}>
                <RigidBody type="fixed" colliders='cuboid' wireframe>
                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube017.geometry}
                        material={materials.Desk_White}
                    />
                </RigidBody>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube017_1.geometry}
                    material={materials.Desk_Green}
                />
            </group>

            {/* windows */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Windows.geometry}
                material={materials.Wood}
                position={[-10, 5.51, 5]}
                rotation={[-Math.PI, 0, 0]}
            />

            {/* walls */}
            <RigidBody type="fixed" colliders={false} wireframe>

                {/* Wall 1 */}
                <CuboidCollider
                    args={[0.1, 4.1, 22]}
                    position={[-9.8, 4.27, 11.4]}
                />

                {/* Wall 2 */}
                <CuboidCollider
                    args={[0.1, 4.1, 22]}
                    position={[-2, 4.27, -9.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                />

                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Wall.geometry}
                    material={materials.Wall}
                    position={[-10, 4, 0]}
                />
            </RigidBody>
                        <RigidBody type="fixed" colliders={false} wireframe>

                {/* Wall 1 */}
                <CuboidCollider
                    args={[0.1, 4.1, 22]}
                    position={[-9.8, 4.27, 11.4]}
                />

                {/* Wall 2 */}
                <CuboidCollider
                    args={[0.1, 4.1, 22]}
                    position={[-2, 4.27, -9.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                />

                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Wall.geometry}
                    material={materials.Wall}
                    position={[-10, 4, 0]}
                />
            </RigidBody>

            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials.Floor}
            />


            {/* Door */}
            <group
                position={[-10.019, 6.151, 14.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.996, 1.73, 1.148]}
            >
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Plane032.geometry}
                    material={nodes.Plane032.material}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Plane032_1.geometry}
                    material={materials.Silver}
                />
            </group>

            {/* Paper on brown desk */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Letters.geometry}
                material={materials.Letter}
                position={[4.615, 2.261, -8.8]}
                rotation={[0, 0.279, 0]}
            />

            {/* thing on white desk */}
            <group
                position={[5, 2.5, 28.7]}
                rotation={[2.88, 0, Math.PI]}
                scale={[-9.7, -0.2, -5.2]}
            >
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials.Anime_draw}
                />
            </group>
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.Mattress}
                position={[5, 2.43, 29.15]}
                rotation={[-1.92, 0, Math.PI]}
                scale={[-9.7, -0.188, -1.844]}
            />

            {/* trash can beside white desk */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.TrashCan001.geometry}
                    material={materials["Trashcan.001"]}
                    position={[0.866, 0.21, 28.437]}
                />
            </RigidBody>

            {/* library 1 */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Stall2.geometry}
                    material={materials["Wood.001"]}
                    position={[-5.5, 3.5, 19]}
                />
            </RigidBody>

            {/* library 1 books */}
            <group position={[-9.25, 5.6, 19]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials["Book 1.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube008_1.geometry}
                    material={materials["Book 2.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube008_2.geometry}
                    material={materials["Book 3.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube008_3.geometry}
                    material={materials["Book 4.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube008_4.geometry}
                    material={materials["Book 5.001"]}
                />
            </group>
            <group position={[-9.25, 0.85, 19]}>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials["Book 1.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube010_1.geometry}
                    material={materials["Book 2.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube010_2.geometry}
                    material={materials["Book 4.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube010_3.geometry}
                    material={materials["Book 3.001"]}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Cube010_4.geometry}
                    material={materials["Book 5.001"]}
                />
            </group>

            {/* chess table */}
            <RigidBody type="fixed" colliders='cuboid' wireframe>
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes.Big_table.geometry}
                    material={materials["Chair.001"]}
                    position={[15.366, 1.634, 9.879]}
                    scale={[1, 2.3, 2.5]}
                />
            </RigidBody>

            {/* colorful carpet */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Carpet2.geometry}
                material={materials["Carpet.001"]}
                position={[-4.9, 0.21, 25]}
            />

            {/* wall besides closet */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Wall_expand.geometry}
                material={materials.Wall}
                position={[13.509, 4, -9.9]}
                scale={[6.5, 4.1, 0.129]}
            />

            {/* chess carpet */}
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Chess.geometry}
                material={materials["Carpet.002"]}
                position={[15.379, 3.008, 9.842]}
                scale={0.507}
            />

            {/* closet */}
            <group
                position={[13.128, 3.792, -7.547]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.102, -3.42, -1.696]}
            >
                <RigidBody type="fixed" colliders='cuboid' wireframe>
                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube055.geometry}
                        material={materials["Wood_transparent.002"]}
                    />

                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube055_1.geometry}
                        material={materials["Wood_transparent.001"]}
                    />

                    <mesh
                        castShadow
                        //receiveShadow
                        geometry={nodes.Cube055_2.geometry}
                        material={materials["Wood_transparent.003"]}
                    />
                </RigidBody>
            </group>

            <RigidBody type="fixed" colliders='cuboid' wireframe>

            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Wall1.geometry}
                material={materials.Transparent}
                position={[2.251, 4.27, 29.902]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.1, 4.1, 18.592]}
            />
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Wall2.geometry}
                material={materials["Transparent.001"]}
                position={[20.053, 4.27, 10.652]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.1, 4.1, 21.214]}
            />
            <mesh
                castShadow
                //receiveShadow
                geometry={nodes.Wall3.geometry}
                material={materials["Transparent.002"]}
                position={[-10.417, 4.27, 11.319]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.1, 4.1, 18.592]}
            />
            </RigidBody>
        </group >
    );
}

useGLTF.preload("/assets/models/room/Room.glb");
