import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Camera_controls_room, Camera_controls_minigame1 } from "./World/Controls/Camera"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
import { Loader } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { setScenario, setIs3D } from "../store/slicers/GameStatusSlice"
import { useEffect } from "react"
//libs
import Experience from "./World/Experience";
import { Panel3D } from "../Components/Panel3D";

const app_3D = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(setScenario("Habitacion"));
    //     dispatch(setIs3D(true));
    // }, []);

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

    const { room,interaction } = useSelector(state => state.room)
    const { scenario } = useSelector(state => state.gameStatus)
    const getCamera = () => {
        switch (scenario) {
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
            {room.utahaInteraction && interaction && <Panel3D />}
            <Canvas shadows className="bg-[lightgreen]" onPointerDown={onPointerDown}>
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

export default app_3D