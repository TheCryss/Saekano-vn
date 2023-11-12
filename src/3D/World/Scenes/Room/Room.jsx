import React from 'react'
import { Room3D } from './Models/Room'
import { RigidBody } from '@react-three/rapier'

export const Room = () => {
    return (
        <>
        <RigidBody type="fixed" colliders="trimesh">
        <Room3D/>
        </RigidBody>
        </>
    )
}
