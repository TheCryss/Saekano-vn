import { DirectionalLightHelper, SpotLightHelper, HemisphereLightHelper, PointLightHelper } from "three";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
const Lights = () => {
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper);
    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 10, 0]} intensity={500} color={"white"} castShadow />
            <hemisphereLight
                ref={hemisphereLightRef}
                position={[8, 15, -2]}
                intensity={1}
                color={"white"}
            />

        </>
    )
}

export default Lights