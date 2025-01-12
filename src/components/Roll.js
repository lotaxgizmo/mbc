import React from 'react'
import mutants from '../assets/mutants.png'
import Marquee4 from './Marquee4'
import Marquee5 from './Marquee5'

function Roll() {
    return (
        <div className='flex flex-col justify-center items-center px-4s my-20'>
            {/* <img src={mutants} alt="mutants" className='w-full lg:my-20 my-10' /> */}
            <div className="marq -rotate-6">
                <Marquee4 />
                <Marquee5 />
            </div>

        </div>
    )
}

export default Roll