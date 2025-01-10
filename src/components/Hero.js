import React from 'react'
import mutantboosterbtn from '../assets/mutantboosterbtn.png'
import buymbc from '../assets/buymbc.png'
import mutantbooosters from '../assets/mutantbooosters.png'
import part1 from '../assets/part1.png'

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <h1 className='text-center text-white lg:text-6xl text-5xl mb-5 mt-10'>Welcome to <br />
                Mutant Boys Club</h1>

            <h2 className='text-md text-[#9F9F9F] text-center lg:w-[52%] mb-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, leo id tristique sagittis, lectus orci mollis velit, eget condimentum augue erat quis risus. Nullam ultrices metus quam, eget vehicula ligula commodo a.
            </h2>

            <div className="btns flex lg:flex-row gap-5  ">
                <img src={buymbc} alt="buymbc" className='w-40' />
                <img src={mutantboosterbtn} alt="mutantboosterbtn" className='w-40' />
            </div>

            <div className="booster flex justify-center items-center m-20 w-full">
                <img src={mutantbooosters} alt="mutantbooosters" className='lg:ml-20 lg:w-11/12 w-full' />
            </div>

            <div className="three flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10 mb-5">
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
            </div>

        </div>
    )
}

export default Hero