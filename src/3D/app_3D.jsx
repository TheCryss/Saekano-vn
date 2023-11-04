import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
//libs
import Experience  from "./World/Experience"
const app_3D = () => {
    const orthographicCameraSettings = {
        makeDefault: true, // Make this camera the default camera
        zoom: 55,             // Zoom level of the camera
        near: 0.1,         // Near clipping plane
        far: 500,            // Far clipping plane
        position: [0, 16, 50],
/*         left: -16,          // Left boundary of the view
        right: 16,          // Right boundary of the view
        top: 8,            // Top boundary of the view
        bottom: -8,        // Bottom boundary of the view */
    };
    return (
        <>
            <Canvas shadows >
            <OrthographicCamera {...orthographicCameraSettings} />
                <OrbitControls></OrbitControls>
                <Physics>
                <Experience />
                </Physics>
            </Canvas>
        </>
    )
}

export default app_3D