import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { setPaintPaletteDelivered, setHookDelivered, setPencilDelivered } from '../store/slicers/RoomSlicers'


export const Choices = () => {
    const { interaction, objects, deliveredObjects, room } = useSelector(state => state.room)
    const { hook, paint_palette, pencil } = objects
    const { hookDelivered, paint_paletteDelivered, pencilDelivered } = deliveredObjects

    const dispatch = useDispatch()

    useEffect(() => {
        deliverObject()
    }, [interaction])

    const deliverObject = (object) => {
        switch (object) {
            case "hook":
                if (room.megumiInteraction) dispatch(setHookDelivered(true))
                break;
            case "paint_palette":
                if (room.eririInteraction) dispatch(setPaintPaletteDelivered(true))
                break;
            case "pencil":
                if (room.utahaInteraction) dispatch(setPencilDelivered(true))
                break;
            default: break;
        }
    }

    return (
        <div className="absolute w-full min-h-screen flex items-center justify-center">
            {!(hookDelivered && room.megumiInteraction) && !(paint_paletteDelivered && room.eririInteraction) && !(pencilDelivered && room.utahaInteraction) && <div className='absolute bottom-1/2 left- z-20 w-1/6 text-md  h-40 flex flex-col mt-12 '>

                {hook && !hookDelivered && <button onClick={() => deliverObject("hook")} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)]  hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Perchero
                </button>}
                {paint_palette && !paint_paletteDelivered && <button onClick={() => deliverObject("paint_palette")} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Paleta de pintura
                </button>}
                {pencil && !pencilDelivered && <button onClick={() => deliverObject("pencil")} className={`border-[#C6F5EB] text-pink-950 border-4 select-none my-2 flex items-center justify-center  bg-[rgba(242,198,245,0.75)] hover:bg-[#F5EAC6] hover:scale-105 hover:  transition-all  rounded-md py-1 font-bold `} type='button'>
                    Lapiz
                </button>}

            </div>

            }

        </div>
    )
}
