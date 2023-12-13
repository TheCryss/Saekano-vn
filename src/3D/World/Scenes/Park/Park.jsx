import React from 'react'
import { Park3D } from './Models/Park'
import { Lights_Room } from '../../Staging/Lights'
import { Megumi } from './Models/Megumi'
import { Utaha } from './Models/Utaha'
import { Eriri } from './Models/Eriri'


const Park = () => {
    return (
        <>
            <Park3D position={[0,-7,0]} scale={0.08}/>
            <Utaha scale={2} position={[0, 1, 0]} />
            <Eriri scale={2} position={[4.9, 0.7, 27]} />
            <Megumi scale={2} position={[-6.9, 0, 7]} rotation-y={Math.PI / 2} />
            <Lights_Room />
        </>
    )
}

export default Park