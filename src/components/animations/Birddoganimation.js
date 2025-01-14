import React from 'react'
import birddogbody from '../../assets/birddogbody.png'
import birddogcap from '../../assets/birddogcap.png'
import birddogglass from '../../assets/birddogglass.png'
import birddogrolly from '../../assets/birddogrolly.png'

function Birddoganimation() {
    return (
        <div className='flex flex-row justify-center items-center '>
            <div className="relative left flex flex-col justify-center items-center w-full head-wobble">

                <img src={birddogglass} alt="glass" className='absolute w-[8%] right-[15%] top-[43%]    max-w-none z-30 head-wobble2' />
                <div className="head flex flex-col justify-center items-center  z-30  head-updownandy">
                    <img src={birddogcap} alt="head" className='w-[50%] ml-[-5%] -mb-[14%]  max-w-none z-30 head-wobble' />
                </div>

                <div className="rolly">
                    <img src={birddogrolly} alt="rolly" className='absolute w-[7%] right-[36%] bottom-[23.3%] z-[5]   max-w-none  spinny' />
                    <img src={birddogrolly} alt="rolly" className='absolute w-[7%] right-[40.5%] bottom-[16.5%] z-[5]   max-w-none  spinny1' />
                    <img src={birddogrolly} alt="rolly" className='absolute w-[7%] right-[44.6%] bottom-[8.5%] z-[5]   max-w-none  spinny2' />
                    <img src={birddogrolly} alt="rolly" className='absolute w-[7%] right-[49.2%] bottom-[0.1%] z-[5]   max-w-none  spinny3' />

                </div>
                <img src={birddogbody} alt="body" className='w-[80%] z-[6] ' />
            </div>
        </div>
    )
}

export default Birddoganimation