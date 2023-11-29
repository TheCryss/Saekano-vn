import React from 'react'
import { ClipLoader} from 'react-spinners'

export const Fallback = () => {
    return (
        <>
        <div className='w-full h-screen bg-[#faa820] flex justify-center items-center'>
            <ClipLoader

            color={'#fff'}
            size={100}
            ></ClipLoader>
        </div>
        </>
    )
}
