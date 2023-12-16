import Navbar from '@/utils/navbar'
import React from 'react'
import Image from 'next/image'

const Calendar = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="Frame5013 w-[376.49px] h-[52.49px] justify-start items-center gap-5 inline-flex" style={{marginLeft:"41px", marginTop:"41px"}}>
                <h1 className="YourSchedule text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]" >Your Schedule</h1>
                <div className="Frame19 p-4 bg-zinc-800 rounded-[45px] justify-center items-center gap-2.5 flex">
                        <Image  src={'/icons/Frame_19.svg'} width={50} height={50} alt={'20'}>
                        </Image>
                </div>
            </div>
        </>
    )
}

export default Calendar