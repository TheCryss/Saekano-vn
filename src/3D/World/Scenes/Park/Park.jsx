import React from 'react'
import { Park3D } from './Models/Park'
import { Lights_Room } from '../../Staging/Lights'


const Park = () => {
    return (
        <>
            <Park3D position={[0,-5,0]} scale={0.08}/>
            <Lights_Room />
        </>
    )
}

export default Park