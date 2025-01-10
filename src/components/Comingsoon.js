import React from 'react'
import mintcomingsoon from '../assets/mintcomingsoon.png'
import roll from '../assets/roll.png'

function Comingsoon() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={mintcomingsoon} alt="mintcomingsoon" className='w-8/12 my-5' />
            <img src={roll} alt="roll" className='w-full' />

        </div>
    )
}

export default Comingsoon