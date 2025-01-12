import React from 'react'
import joinwhitelist from '../assets/joinwhitelist.png'
import contract from '../assets/contract.png'
import dexscreener from '../assets/dexscreener.png'
import discord from '../assets/discord.png'
import instagram from '../assets/instagram.png'
import reddit from '../assets/reddit.png'
import telegram from '../assets/telegram.png'
import x from '../assets/x.png'
import buymbcwhite from '../assets/buymbcwhite.png'

function Waitlist() {
    return (
        <div className='flex flex-col justify-center items-center bg-[#60DD3C]'>
            <h2 className='text-center  mb-1 lg:text-xl font-bold text-xl   mt-10 uppercase text-[#0D4300]'>top 100 holders whitelisted</h2>
            <img src={joinwhitelist} alt="joinwhitelist" className='w-9/12 lg:w-5/12 mb-5' />

            <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                <img src={buymbcwhite} alt="buymbcwhite" className='w-40' />
                <img src={contract} alt="contract" className='p-4 lg:p-0 w-full lg:w-[470px]' />
            </div>

            <div className="socials flex flex-row justify-center items-center gap-4 my-5">
                <img src={dexscreener} alt="dexscreener" className='w-1/12' />
                <img src={discord} alt="discord" className='w-1/12' />
                <img src={instagram} alt="instagram" className='w-1/12' />
                <img src={reddit} alt="reddit" className='w-1/12' />
                <img src={telegram} alt="telegram" className='w-1/12' />
                <img src={x} alt="x" className='w-1/12' />
            </div>
        </div>
    )
}

export default Waitlist