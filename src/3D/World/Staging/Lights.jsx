import { DirectionalLightHelper, SpotLightHelper, HemisphereLightHelper, PointLightHelper } from "three";
import { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
export const Lights = () => {
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    // useHelper(pointLightRef, PointLightHelper);
    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 10, 0]} intensity={300} color={"white"} castShadow />
            <hemisphereLight
                ref={hemisphereLightRef}
                position={[8, 15, -2]}
                intensity={1}
                color={"white"}
            />
        </>
    )
}


export const Lights_Room = () => {
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    const pointLightRef2 = useRef();

    // useHelper(pointLightRef, PointLightHelper);
    useEffect(() => {
        pointLightRef.current.shadow.bias = 0.0005;
        pointLightRef2.current.shadow.bias = 0.00005;


    }, [])

    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 15, -5]} intensity={300} color={"white"} castShadow />
            <pointLight ref={pointLightRef2} position={[0, 15, 10]} intensity={300} color={"white"} castShadow />
            <hemisphereLight
                ref={hemisphereLightRef}
                position={[8, 15, -2]}
                intensity={1}
                color={"white"}

            />
        </>
    )
}

export const Lights_Minigame1 = () => {
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    // useHelper(pointLightRef, PointLightHelper);
    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 5, 10]} scale={3} intensity={300} color={"white"} castShadow />
            <hemisphereLight
                ref={hemisphereLightRef}
                position={[8, 15, -2]}
                intensity={1}
                color={"white"}
            />
        </>
    )
}

export const SunLight = () => {
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    // const spotLightRef = useRef();
    return (
        <>
            <ambientLight intensity={0.2} color={0xfff} />
            <pointLight ref={pointLightRef} position={[0, 5, 10]} scale={3} intensity={300} color={"white"} castShadow />
            <hemisphereLight
                ref={hemisphereLightRef}
                position={[8, 15, -2]}
                intensity={1}
                color={"white"}
            />
            {/* <spotLight
            ref={spotLightRef}
            /> */}
        </>
    );
};