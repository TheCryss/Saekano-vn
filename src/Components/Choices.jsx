import { useSelector } from 'react-redux';

export const Choices = () => {
    const { hook, paint_palette, pencil } = useSelector(state => state.room.objects)
    return (
        <div className="absolute w-full min-h-screen flex items-center justify-center">
            <div className='absolute bottom-1/2 left- z-20 w-1/6 text-md  h-40 flex flex-col mt-12 '>

                {hook && <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Perchero
                </button> }
                {paint_palette && <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Paleta de pintura
                </button>}
                {pencil && <button className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Lapiz
                </button>}

            </div>
        </div>
    )
}
