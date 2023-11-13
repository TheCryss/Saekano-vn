import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Camera_controls_room, Camera_controls_minigame1 } from "./World/Controls/Camera"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
import { Loader } from "@react-three/drei";
import { useGame } from "../context/GameContext"
//libs
import Experience from "./World/Experience"

export const app_3D = () => {
    const orthographicCameraSettings = {
        makeDefault: true, // Make this camera the default camera
        zoom: 35,             // Zoom level of the camera
        near: 0.1,         // Near clipping plane
        far: 500,            // Far clipping plane
        position: [0, 16, 50],
        /*       left: -16,          // Left boundary of the view
                right: 16,          // Right boundary of the view
                top: 8,            // Top boundary of the view
                bottom: -8,        // Bottom boundary of the view */
    };

    const { getActualContent, nextContent, nextScene } = useGame();

    const getCamera = () => {
        const { content } = getActualContent();
        switch (content) {
            case "room":
                return {
                    camera: <Camera_controls_room />,
                    onPointerDown: (e) => {
                        e.target.requestPointerLock();
                    },
                };
            case "Minijuego-guion":
                return {
                    camera: <Camera_controls_minigame1 />,
                    onPointerDown: undefined, // No event handler for this case
                };
            default:
                return {
                    camera: <Camera_controls_room />,
                    onPointerDown: undefined, // No event handler for this case
                };
        }
    };

    const { camera, onPointerDown } = getCamera();

    return (
        <>
            <Canvas shadows className="bg-[#C6F5EB]" onPointerDown={onPointerDown} >
                <OrthographicCamera {...orthographicCameraSettings} />
                {camera}
                <Physics timeStep="vary" >
                    <Experience />
                </Physics>
            </Canvas>
            <Loader />
        </>
    )
}
