import { RigidBody } from "@react-three/rapier";



const FloorRoom = () => {
    return (
        <>
            <RigidBody colliders={"cuboid"}  type="fixed" linearDamping={0.5}>
                <mesh rotation-x={-Math.PI / 2} >
                    <boxGeometry args={[128, 128,0.2]} />
                    <meshStandardMaterial color={"lightgreen"} />
                </mesh>
            </RigidBody>
        </>

    )
}

export default FloorRoom