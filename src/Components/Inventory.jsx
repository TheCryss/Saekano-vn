import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Inventory = () => {
    const { hook, paint_palette, pencil } = useSelector(state => state.room.objects)
    const [background, setBackground] = useState('hook')
    console.log(hook, paint_palette, pencil);
    return (
        <div className='absolute z-20  m-5 mg' >
            <div className='bg-amber-900 flex rounded-lg px-3' >
                <div className='p-3 w-20 bg-orange-300 my-3'>
                    {hook && <img src='/assets/img/hook.png' alt='hook' className='object-cover' />}
                </div>
                <div className='p-3 w-20 bg-orange-300 h-20 m-3' >
                    {paint_palette && <img src='/assets/img/paint_palette.png' alt='paint_palette' className='object-cover' />}
                </div>
                <div className='p-3 w-20 bg-orange-300  my-3' >
                    {pencil && <img src='/assets/img/pencil.png' alt='pencil' className='object-cover' />}
                </div>
            </div>
        </div>
    )
}
