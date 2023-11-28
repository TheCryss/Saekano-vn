import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

export const Camera_controls = (props) => {
    useFrame(({ camera }) => {
        camera.lookAt(0, 0, -1.5)
    })
    return <OrbitControls {...props} autoRotate  autoRotateSpeed={0.4}  minPolarAngle={Math.PI / 4} enableZoom={false} maxPolarAngle={Math.PI / 2.5} />;
};

export const Camera_controls_room = (props) => {
    useFrame(({ camera }) => {
        camera.lookAt(0, 2, 3)
    })
    
    return <OrbitControls {...props} enableZoom={false}  />;
};

export const Camera_controls_minigame1 = (props) => {
    return <OrbitControls {...props} enabled={false}  />;
};