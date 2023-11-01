import Floor from "./Models/Floor"
import { Cherry_Blossom } from "./Models/Cherry_Blossom"
import { Rocks } from "./Models/Rocks"
const Login = () => {
    return (
        <>
            <Cherry_Blossom/>
            <Floor position={[0,-2,0]}></Floor>
            <Rocks position-x={-5} scale={0.008}></Rocks>
        </>
    )
}

export default Login