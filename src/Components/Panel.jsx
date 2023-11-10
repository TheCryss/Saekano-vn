import React from 'react'

export const Panel = () => {
    return (
        <>
            <div className='flex justify-center'>
            <div className=' w-1/6 text-md my-8 h-40 flex flex-col justify-between '>
                <button className="border-[#C6F5EB] border-4 select-none my-2 flex items-center justify-center  bg-[#F2C6F5]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold " type='button'>
                    Auto
                </button>
                <button className="border-[#C6F5EB] border-4 select-none my-2 flex items-center justify-center  bg-[#F2C6F5]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold " type='button'>
                    Skip
                </button>
                <button className=" border-[#C6F5EB] border-4 select-none my-2 flex items-center justify-center  bg-[#F2C6F5]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold " type='button'>
                    Exit
                </button>
            </div>
            <div className='p-2 px-4 flex items-center border-[#C6F5EB] border-4 select-none  text-xl w-3/5 m-8 h-40 rounded-md border-double border-8 border-[#F2C6F5] bg-[#F2C6F5]'>
                Debo de alistarme para ir a la escuela. Pero en el fondo, no olvidaba aquel momento que tuve aquel día…
                <br />¿Por qué a mí? ¿Por qué ese día y no otro?
                <br />¿Sería un mensaje del destino?
            </div>
            </div>
        </>
    )
}
