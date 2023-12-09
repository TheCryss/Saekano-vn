import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Camera_controls_room, Camera_controls_minigame1 } from "./World/Controls/Camera"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
import { Loader } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { setNpcInteractionsFinished } from "../store/slicers/GameStatusSlice"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
//libs
import Experience from "./World/Experience";
import { Panel3D } from "../Components/Panel3D";
import { Panel3DInteraction } from "../Components/Panel3DInteraction";
import { LoadingScreen3D } from "../Components/LoadingScreen3D";


const app_3D = () => {

    const [started, setStarted] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.room)


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

    const { scenario, finishedScene, npcInteractions, finishedScript, npcMaxInteractions } = useSelector(state => state.gameStatus)

    const getCamera = () => {
        switch (scenario) {
            case "Habitacion":
                return {
                    camera: <Camera_controls_room />,
                    onPointerDown: (e) => {
                        e.target.requestPointerLock();
                    },
                };
            case "Minijuego-Habitacion":
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

    const isAnyInteraction = () => {
        return room.utahaInteraction || room.eririInteraction || room.megumiInteraction || room.tomoyaInteraction
    }

    useEffect(() => {
        console.log(npcMaxInteractions)
        if (npcInteractions[0] >= npcMaxInteractions[0] &&
                npcInteractions[1] >= npcMaxInteractions[1] &&
                npcInteractions[2] >= npcMaxInteractions[2] &&
                npcInteractions[3] >= npcMaxInteractions[3]) {
            dispatch(setNpcInteractionsFinished(true));
        }
    }, [npcInteractions]);

    return (
        <>
            <LoadingScreen3D started={started} onStarted={() => setStarted(true)} />
            {!finishedScene && !finishedScript && <Panel3D />}
            {finishedScene && isAnyInteraction() && setNpcInteractionsFinished && <Panel3DInteraction />}
            <Canvas shadows className="bg-[lightgreen]" onPointerDown={onPointerDown}>
                <OrthographicCamera {...orthographicCameraSettings} />
                {camera}
                <Physics timeStep="vary" >
                    <Experience />
                </Physics>
            </Canvas>
        </>
    )
}

export default app_3D