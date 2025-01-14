import React from 'react'
import andyface from '../../assets/andyface.png'
import andybody from '../../assets/andybody.png'
import andyhead from '../../assets/andyhead.png'

function Andyanimation() {
    return (
        <div className='flex flex-row justify-center items-center '>
            <div className="relative left flex flex-col justify-center items-center w-full head-wobble2">

                <div className="headd z-10 head-updownandy2 flex flex-col">
                    <div className="head flex flex-col justify-center items-center -mb-[26%] ml-[15%] z-30 head-wobble2">
                        <img src={andyhead} alt="head" className='w-[110%] max-w-none z-30' />
                    </div>

                    <div className="head flex flex-col justify-center items-center -mb-[20%] ml-[15%] z-10 top-[-20%] head-updownandy">
                        <img src={andyface} alt="head" className='w-[80%] z-10' />
                    </div>
                </div>

                <img src={andybody} alt="body" className='w-[80%] ' />
            </div>
        </div>

    )
}

export default Andyanimation