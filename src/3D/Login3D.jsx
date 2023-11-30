import { Canvas } from "@react-three/fiber"
// import { OrbitControls } from "@react-three/drei"
import { Camera_controls } from "./World/Controls/Camera"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
import { Loader } from "@react-three/drei";
//libs
import Experience from "./World/Experience"
import { Auth } from "./World/Scenes/Login/Text/Auth";
// import Transitions from "../Components/Transitions";
import { Fallback } from "../Components/Fallback";
import { lazy, Suspense } from "react"

// const Auth = lazy(() => import("./World/Scenes/Login/Text/Auth"))


const Login3D = () => {
    const orthographicCameraSettings = {
        makeDefault: true, // Make this camera the default camera
        zoom: 55,             // Zoom level of the camera
        near: 0.1,         // Near clipping plane
        far: 500,            // Far clipping plane
        position: [0, 16, 50],
        /*       left: -16,          // Left boundary of the view
                right: 16,          // Right boundary of the view
                top: 8,            // Top boundary of the view
                bottom: -8,        // Bottom boundary of the view */
    };


    return (
        <>
            <Auth></Auth>
            <Canvas shadows frameloop="demand" >
                <OrthographicCamera {...orthographicCameraSettings} />
                {/* <OrbitControls></OrbitControls> */}
                <Camera_controls></Camera_controls>
                <Physics>
                    <Experience />
                </Physics>
            </Canvas>
            <Loader />

        </>
    )
}

export default Login3D