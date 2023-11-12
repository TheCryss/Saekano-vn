import React from 'react'

export const Panel = ({dialog,character,type,change}) => {
    const color = "#F2C6F5"
    // console.log(props.dialog[0].action);
    return (
        <>

            <div className='flex justify-center '>

                <div className=' w-1/6 text-md my-8 h-40 flex flex-col mt-12 '>

                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Auto
                    </button>
                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Skip
                    </button>
                    <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                        Exit
                    </button>
                </div>
                <div className='w-3/4 h-56' onClick={() =>change()}>
                    <div className=' ml-8 mb-3  h-10  flex items-center justify-center rounded-md  bg-[rgba(242,198,245,0.75)] w-40 border-[#C6F5EB] text-pink-950 border-4 select-none font-bold' >
                        {character}
                    </div>
                    <div className={` outline-4 text-pink-950 p-2 px-4 flex items-center border-[#C6F5EB] border-4 select-none  text-xl mx-8 h-40 rounded-md  bg-[rgba(242,198,245,0.75)]`}>
                        {dialog}
                    </div>
                </div>
            </div>
        </>
    )
}
