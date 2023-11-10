import React from 'react'
import { Panel } from '../../Components/Panel'
import { useState } from 'react'
import data from '../../script/scene_1.json'

export const Dialog_2D = () => {
    const [dialog, setDialog] = useState(0)
    // console.log(data.scenes[0]);
    console.log(data.scenes[0].content);
    

    return (
        <>
            <div className="h-screen w-full bg-[url('/assets/scenes/1.png')] bg-cover">
                <div className='flex flex-col h-screen justify-end'>
                    <Panel dialog={data.scenes[0].content} />
                </div>
            </div>
        </>
    )
}
