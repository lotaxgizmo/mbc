import React from 'react'
import mbcvideo2 from '../assets/mbcvideo2.mp4'


function Firstvid() {
    return (
        <div className='flex flex-col justify-center items-center px-4s my-20'>
            <video src={mbcvideo2} autoPlay loop muted playsInline className='w-8/12 rounded-xl border-[0.1px] border-grey lg:my-20 my-10' />
        </div>
    )
}

export default Firstvid