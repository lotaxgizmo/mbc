import React from 'react'
import brettsmalleye from '../../assets/brettsmalleye.png'
import brettbigeye from '../../assets/brettbigeye.png'
import brettbody from '../../assets/brettbody.png'

function Brettanimation() {
    return (
        <div className='flex flex-row justify-center items-center '>
            <div className="relative left flex flex-col justify-center items-center w-full">

                <div className="div head-leftright  w-[3%] absolute right-[29%] top-[2%] ">

                    <img src={brettsmalleye} alt="bigeye" className=' head-updownbrett ' />
                </div>

                <div className="div head-leftright absolute left-[45%] top-[45%] w-[10%]">

                    <img src={brettbigeye} alt="bigeye" className='  head-updownbrett ' />
                </div>
                <img src={brettbody} alt="body" className='w-[100%] ' />
            </div>
        </div>


    )
}

export default Brettanimation