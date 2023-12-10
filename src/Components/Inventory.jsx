import { useSelector } from 'react-redux';

export const Inventory = () => {
    const { hook, paint_palette, pencil } = useSelector(state => state.room.objects)
    const { hookDelivered, paint_paletteDelivered, pencilDelivered } = useSelector(state => state.room.deliveredObjects)
    return (
        <div className='absolute z-20  m-5 mg' >
            <div className='bg-amber-900 flex rounded-lg px-3' >
                <div className='p-3 w-20 bg-orange-300 my-3'>
                    {hook && !hookDelivered && <img src='/assets/img/hook.png' alt='hook' className='object-cover' />}
                </div>
                <div className='p-3 w-20 bg-orange-300 h-20 m-3' >
                    {paint_palette && !paint_paletteDelivered && <img src='/assets/img/paint_palette.png' alt='paint_palette' className='object-cover' />}
                </div>
                <div className='p-3 w-20 bg-orange-300  my-3' >
                    {pencil && !pencilDelivered &&<img src='/assets/img/pencil.png' alt='pencil' className='object-cover' />}
                </div>
            </div>
        </div>
    )
}
