import React from 'react'

export const Panel = (props) => {
    const color = "#F2C6F5"
    // console.log(props.dialog[0].action);
    return (
        <>
            <div className='flex justify-center '>
            <div className=' w-1/6 text-md my-8 h-40 flex flex-col '>
                <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[${color}]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold `} type='button'>
                    Auto
                </button>
                <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[${color}]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold `} type='button'>
                    Skip
                </button>
                <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[${color}]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all text-black rounded-md py-1 font-bold `} type='button'>
                    Exit
                </button>
            </div>
            <div className={`outline-4 text-pink-950 p-2 px-4 flex items-center border-[#C6F5EB] border-4 select-none  text-xl w-3/5 m-8 h-40 rounded-md  bg-[${color}]`}>
                {props.dialog[1].speech}
            </div>
            </div>
        </>
    )
}
