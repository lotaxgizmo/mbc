import React from 'react'
import mutantboosterbtn from '../assets/mutantboosterbtn.png'
import footerlogo from '../assets/footerlogo.png'
import jointelegram from '../assets/jointelegram.png'

function Header() {
    return (
        <div className='flex flex-row justify-between items-center px-10 py-5 text-white'>
            <div className="left flex flex-row justify-center items-center">
                <img src={footerlogo} alt="footerlogo" className='w-72' />

            </div>

            <div className="right flex flex-row justify-center items-center gap-4">

                <a href="https://t.me/mutantboysclub" target="_blank" rel="noopener noreferrer" className='text-sm font-thin hidden lg:block'>Home</a>
                <a href="https://t.me/mutantboysclub" target="_blank" rel="noopener noreferrer" className='text-sm font-thin hidden lg:block'>Contact Us</a>

                <img src={mutantboosterbtn} alt="mutantboosterbtn" className='w-40 hidden lg:block' />
                <img src={jointelegram} alt="jointelegram" className='w-40 hidden lg:block' />
            </div>
        </div>
    )
}

export default Header