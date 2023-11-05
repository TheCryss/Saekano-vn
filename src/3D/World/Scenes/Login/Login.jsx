import Floor from "./Models/Floor"
import { Cherry_Blossom } from "./Models/Cherry_Blossom"
import { Rocks } from "./Models/Rocks"
const Login = () => {
    return (
        <>
            <Floor position={[0,-2,0]}></Floor>
            <group position={[0,0,0]}>
                <Cherry_Blossom position={[0,-0.3,-0.5]}/>
                <Rocks position-x={-5} scale={0.008}></Rocks>
            </group>
        </>
    )
}

export default Login