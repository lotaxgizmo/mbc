import React from 'react'
import body from '../../assets/body.png'
import flower from '../../assets/flower.png'
import head from '../../assets/head.png'

function Landwolf() {
    return (
        <div className='flex flex-row justify-center items-center mr-5 lg:mr-0'>

            <div className="relative left flex flex-col justify-center items-center blg:w-1/2l w-full">
                <img src={flower} alt="flower" className='w-[33%] -mb-[20%] z-20 absolute right-[-5%] top-[60%] head-wobble ' />
                <div className="things flex flex-col justify-center items-center head-updown">
                    <img src={head} alt="head" className='w-[70%] -mb-[20%] z-10 head-upsdown head-wobble2 ' />
                </div>
                <img src={body} alt="body" className='w-[80%] ' />
            </div>

            {/* 
            <div className="right lg:w-1/2k w-full">
                <img src={landwolf} alt="landwolf" className='w-1/2' />
            </div>
             */}

        </div>
    )
}

export default Landwolf