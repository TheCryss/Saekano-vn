import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Camera_controls_room, Camera_controls_minigame1 } from "./World/Controls/Camera"
import { Physics } from "@react-three/rapier"
import { OrthographicCamera } from '@react-three/drei';
import { Loader } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { setScenario, setIs3D } from "../store/slicers/GameStatusSlice"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
//libs
import Experience from "./World/Experience";
import { Panel3D } from "../Components/Panel3D";
import { Panel3DInteraction } from "../Components/Panel3DInteraction";


const app_3D = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.room)

/*     useEffect(() => {
        dispatch(setScenario("Habitacion"));
        dispatch(setIs3D(true));
    }, []); */

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

    const { scenario, finishedScene, npcInteractions,finishedScript } = useSelector(state => state.gameStatus)

    const getCamera = () => {
        switch (scenario) {
            case "Habitacion":
                return {
                    camera: <Camera_controls_room/>,
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

    const areInteractionsLeft = () => {
        console.log(npcInteractions)
        if (npcInteractions[0] < 4 ) {//|| npcInteractions[1] < 4 || npcInteractions[2] < 4 || npcInteractions[3] < 4) {
            return true
        } else {
            //navigate('./')
        }
    }

    return (
        <>
            {!finishedScene && !finishedScript && <Panel3D />}
            {finishedScene && isAnyInteraction() && areInteractionsLeft() && <Panel3DInteraction />}
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