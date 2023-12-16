import Navbar from '@/utils/navbar'
import React from 'react'
import Image from 'next/image'

const Calendar = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="Frame5013 w-[376.49px] h-[52.49px] justify-start items-center gap-16 inline-flex">
                <h1 className="YourSchedule text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]">Your Schedule</h1>
                <div className="Frame19 p-4 bg-zinc-800 rounded-[45px] justify-center items-center gap-2.5 flex">
                    <div className="AddCircle w-[20.49px] h-[20.49px] justify-center items-center flex">
                        <Image  className="AddCircle w-[20.49px] h-[20.49px] relative" src={'/icons/Frame_19.svg'} width={20} height={20} alt={'20'}>
                        </Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar