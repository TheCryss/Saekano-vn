import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Room3D = (props) => {
    const { nodes, materials } = useGLTF("/assets/models/room/Room.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                
                receiveShadow
                geometry={nodes.Stall.geometry}
                material={materials.Wood}
                position={[-5.5, 3.5, -2]}
            />
            <group position={[-9.25, 0.85, -2]}>
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials["Book 1"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials["Book 2"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials["Book 4"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube002_3.geometry}
                    material={materials["Book 3"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube002_4.geometry}
                    material={materials["Book 5"]}
                />
            </group>
            <group position={[-9.25, 5.6, -2]}>
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials["Book 1"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube024_1.geometry}
                    material={materials["Book 2"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube024_2.geometry}
                    material={materials["Book 3"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube024_3.geometry}
                    material={materials["Book 4"]}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube024_4.geometry}
                    material={materials["Book 5"]}
                />
            </group>
            <group position={[-6.993, 0.9, -8.257]}>
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials.Wood}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube007_1.geometry}
                    material={materials.Mattress}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube007_2.geometry}
                    material={materials.Pillow}
                />
            </group>
            <group position={[-5.5, 3.34, -2.1]} scale={[1, 1, 0.08]}>
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube025.geometry}
                    material={materials.TV}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube025_1.geometry}
                    material={materials.TV_Screen}
                />
            </group>
            <group
                position={[5, 1.591, -9.036]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1.5, 1, 1]}
            >
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube029.geometry}
                    material={materials.Desk_Black}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube029_1.geometry}
                    material={materials.Desk_DarkBrown}
                />
            </group>
            <mesh
                
                receiveShadow
                geometry={nodes.Chair.geometry}
                material={materials.Chair}
                position={[4.85, 2.048, -6.409]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.Carpet.geometry}
                material={materials.Carpet}
                position={[-4.9, 0.21, 4]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.TrashCan.geometry}
                material={materials.Trashcan}
                position={[1.079, 0.21, -8.715]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.Table.geometry}
                material={materials.Chair}
                position={[-6, 0.822, 9.75]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.Chair2.geometry}
                material={materials.Chair2}
                position={[5, 2.048, 16.3]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <group position={[4.85, 1.6, 19.591]} scale={[1.5, 1, 1]}>
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube017.geometry}
                    material={materials.Desk_White}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube017_1.geometry}
                    material={materials.Desk_Green}
                />
            </group>
            <mesh
                
                receiveShadow
                geometry={nodes.Windows.geometry}
                material={materials.Wood}
                position={[-10, 5.51, 5]}
                rotation={[-Math.PI, 0, 0]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.Wall.geometry}
                material={materials.Wall}
                position={[-10, 4, 0]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials.Floor}
            />
            <group
                position={[-10.019, 6.151, 14.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.996, 1.73, 1.148]}
            >
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Plane032.geometry}
                    material={nodes.Plane032.material}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Plane032_1.geometry}
                    material={materials.Silver}
                />
            </group>
            <mesh
                
                receiveShadow
                geometry={nodes.Letters.geometry}
                material={materials.Letter}
                position={[4.615, 2.261, -8.8]}
                rotation={[0, 0.279, 0]}
            />
            <group
                position={[5, 2.5, 18.7]}
                rotation={[2.88, 0, Math.PI]}
                scale={[-9.7, -0.2, -5.2]}
            >
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials.Black}
                />
                <mesh
                    
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                    material={materials.Anime_draw}
                />
            </group>
            <mesh
                
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.Mattress}
                position={[5, 2.43, 19.15]}
                rotation={[-1.92, 0, Math.PI]}
                scale={[-9.7, -0.188, -1.844]}
            />
            <mesh
                
                receiveShadow
                geometry={nodes.TrashCan001.geometry}
                material={materials["Trashcan.001"]}
                position={[0.866, 0.21, 18.437]}
            />
        </group>
    );
}

useGLTF.preload("/assets/models/room/Room.glb");
