import React from 'react'
import Image from 'next/image'
import Navbar from '@/utils/navbar'

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="PersonalInformation text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]" style={{ marginTop: '32px', marginLeft: '41px' }}>Personal information</div>
            <div className='flex'>
                <div className="Rectangle7 w-[290px] h-[681.53px] rounded-[20px] border border-gray-300" style={{ marginTop: '32px', marginLeft: '41px' }} >
                    <div className="Frame29 w-[289px] h-[119.48px] flex-col justify-start items-start inline-flex" style={{ marginTop: '42px' }}>
                        <button className="Frame27 w-[289px] px-6 py-2.5 bg-gray-300 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                            <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                            </Image>

                            <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Visa information</div>
                        </button>
                        <button className="Frame28 w-[289px] px-6 py-2.5 bg-slate-100 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                            <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                            </Image>

                            <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Flight information</div>
                        </button>
                        <button className="Frame29 w-[289px] px-6 py-2.5 bg-slate-100 border border-gray-300 justify-start items-center gap-2.5 inline-flex">

                            <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                            </Image>


                            <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Accomodation</div>
                        </button>
                    </div>
                </div>
                <div className="Frame13 w-[1530px] h-[683.53px] p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-8 inline-flex" style={{marginTop:"32px", marginLeft:"20px"}}>
                    <div className="VisaInformation text-zinc-800 text-xl font-medium font-['Poppins'] leading-normal">Visa information</div>
                    <div className="Line2 self-stretch h-[0px] border border-gray-300"></div>
                    <div className="Frame25 justify-start items-start gap-8 inline-flex">
                        <div className="Frame23 h-[196px] flex-col justify-start items-start gap-2 inline-flex">
                            <div className="PortraitPhotography text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Portrait photography</div>
                            <img className="Rectangle6 self-stretch grow shrink basis-0" src="https://via.placeholder.com/151x169" />
                        </div>
                        <div className="Frame24 h-[196px] flex-col justify-start items-start gap-2 inline-flex">
                            <div className="PassportDataPageImage text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Passport data page image</div>
                            <img className="Rectangle6 w-[257.83px] grow shrink basis-0" src="https://via.placeholder.com/258x169" />
                        </div>
                    </div>
                    <div className="Frame15 self-stretch justify-start items-end gap-5">

                        <div className='flex'>
                            <div className="Frame19 w-[470px] flex-col justify-start items-start gap-[8.20px] inline-flex" style={{ marginRight: "20px" }}>
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Arrival Date & Time</div>
                                <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-center gap-[10.25px] inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">16/12/2023</div>
                                    <div className="VuesaxTwotoneCalendar w-[20.49px] h-[20.49px] justify-center items-center flex">
                                        <div className="Calendar w-[20.49px] h-[20.49px] relative">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Frame20 w-[470px] flex-col justify-start items-start gap-[8.20px] inline-flex" style={{ marginRight: "20px" }}>
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Departure date</div>
                                <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-center gap-[10.25px] inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">20/12/2023</div>
                                    <div className="VuesaxTwotoneCalendar w-[20.49px] h-[20.49px] justify-center items-center flex">
                                        <div className="Calendar w-[20.49px] h-[20.49px] relative">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Frame13 w-[470px] h-[82px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Passport full name</div>
                                <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">Jason Cheng</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="Frame14 w-[470px] flex-col justify-start items-start gap-2 inline-flex" style={{ marginRight: "20px" }}>
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Date of birth</div>
                                <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">19/07/1990</div>
                                    <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                                        <div className="Calendar w-5 h-5 relative">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Frame15 w-[470px] h-[82px] flex-col justify-center items-start gap-2 inline-flex" style={{ marginRight: "20px" }}>
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Nationality</div>
                                <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">Japanese</div>
                                </div>
                            </div>

                            <div className="Frame16 w-[470px] h-[82px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Passport  number</div>
                                <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">PE0000000</div>
                                </div>
                            </div>

                            <div className="Frame17 w-[470px] h-[82px] flex-col justify-center items-start gap-2 inline-flex"style={{ marginRight: "20px" }}>
                                <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Expiration date</div>
                                <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                    <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">9/12/2028</div>
                                </div>
                            </div>
                            <div className="Frame18 w-[470px] h-[82px] flex-col justify-center items-start gap-2 inline-flex">
                            <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Gender</div>
                            <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">Male</div>
                            </div>
                        </div>
                        </div>

                      


                    </div>
                </div>
            </div>
        </div>


    )
}

export default page


