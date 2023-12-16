"use client"
import React from 'react'
import Image from 'next/image'
import SideBar from '@/components/Profile/SideBar'

const Flight = () => {
    return (
        <div className="Frame13 w-[1530px] h-[682.02px] p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-8 inline-flex" style={{ marginTop: "32px", marginLeft: "20px" }}>
            <div className="FlightInformation text-zinc-800 text-xl font-medium font-['Poppins'] leading-normal">Flight information</div>
            <div className="Line2 self-stretch h-[0px] border border-gray-300"></div>
            <div className="Frame25 w-[753px] h-[398px] flex-col justify-start items-start gap-2 flex">
                <div className="FlightTicketPhotography text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Flight ticket photography</div>
                <Image className="Image10 self-stretch grow shrink basis-0" src="/icons/ticket.png" width={753} height={371} alt={''} ></Image>
            </div>
            <div className="Frame15 self-stretch justify-start items-end gap-5 inline-flex">
                <div className="Frame19 w-[347px] h-[84.02px] flex-col justify-center items-start gap-[8.20px] inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Flight number</div>
                    <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-start gap-[10.25px] inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">EK678</div>
                    </div>
                </div>
                <div className="Frame21 w-[255px] flex-col justify-start items-start gap-[8.20px] inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Arrival date & Time</div>
                    <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-center gap-[10.25px] inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">16/12/2023</div>
                        <div className="VuesaxTwotoneCalendar w-[20.49px] h-[20.49px] justify-center items-center flex">
                            <div className="Calendar w-[20.49px] h-[20.49px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame20 w-[255px] h-[57px] flex-col justify-center items-start gap-[8.20px] inline-flex">
                    <div className="StateDefaultHeaderFalse self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-start gap-[10.25px] inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">10:00 AM</div>
                    </div>
                </div>
                <div className="Frame13 w-[255px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Departure date & time</div>
                    <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">16/12/2023</div>
                        <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                            <div className="Calendar w-5 h-5 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame14 w-64 flex-col justify-center items-start gap-2 inline-flex">
                    <div className="StateDefaultHeaderFalse self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">11:00 PM</div>
                        <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                            <div className="Calendar w-5 h-5 relative">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight