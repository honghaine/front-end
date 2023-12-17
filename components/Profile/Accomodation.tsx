"use client"
import SideBar from '@/components/Profile/SideBar'
import React, { useState } from 'react'
import Image from 'next/image'

const Accomodation = () => {
    const [isMapVisible, setIsMapVisible] = useState(false);
    const toggleMapVisibility = () => {
        setIsMapVisible(!isMapVisible);
    };
    return (
        <div className="Frame13 w-[1530px] h-[682px] p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-8 inline-flex" style={{ marginTop: "32px", marginLeft: "20px" }}>
            <div className="Accomodation text-zinc-800 text-xl font-medium font-['Poppins'] leading-normal" style={{fontWeight: 600}}>Accomodation</div>
            <div className="Line2 self-stretch h-[0px] border border-gray-300"></div>
            <div className="Frame26 self-stretch justify-start items-end gap-5 inline-flex">
                <div className="Frame13 w-[367px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Check-in date</div>
                    <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">16/12/2023</div>
                        <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                            <div className="Calendar w-5 h-5 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame14 w-[367px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Check-out date</div>
                    <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">20/12/2023</div>
                        <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                            <div className="Calendar w-5 h-5 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame19 w-[665px] flex-col justify-start items-start gap-[8.20px] inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Location</div>
                    <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-center gap-[10.25px] inline-flex">
                        <div className="LamSonSquareBenNgheWardDistrict1Hcmc grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">2 Lam Son Square, Ben Nghe ward, District 1, HCMC </div>
                        <button className="ViewOnMap text-red-500 text-base font-normal font-['Poppins'] underline leading-tight" onClick={toggleMapVisibility}>View on map</button>
                        <div className="Location w-[20.49px] h-[20.49px] justify-center items-center flex">
                            <div className="Location w-[20.49px] h-[20.49px] relative">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Frame31 justify-start items-start gap-5 inline-flex">
                <div className="Frame30 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="ParkHyattSaigonParkDeluxeRoom text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Park Hyatt Saigon - Park deluxe room</div>
                    <Image className="Rectangle8 w-[367px] h-[253.45px]" src="/icons/room.png" width={367} height={253} alt={''} ></Image>
                </div>
                <div className="Frame32 flex-col justify-start items-start gap-5 inline-flex" style={{width: '370px'}}>
                    <div className="RoomAmenities text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Room amenities</div>
                    <div className="LedTvBoseBluetoothSpeakerNespressoCoffeeMakerIndividuallyControlledAirConditioningLeLaboBathroomAmenitiesInRoomSafeMinibarSpeakerphoneAndDataportHairDryerIronAndIroningBoardCribUponRequest w-full text-zinc-500 text-base font-normal font-['Poppins'] leading-[22.95px]">48” LED TV<br />Bose bluetooth speaker<br />Nespresso coffee maker<br />Individually controlled air conditioning<br />Le Labo bathroom amenities<br />In-room safe<br />Minibar<br />Speakerphone and Dataport<br />Hair dryer<br />Iron and ironing board<br />Crib upon request</div>
                </div>
                {isMapVisible && (
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4411211704023!2d106.70088037570329!3d10.77748725917282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f462f8cac37%3A0x3d4cc4e3c1887abb!2sPark%20Hyatt%20Saigon%20Hotel!5e0!3m2!1sen!2s!4v1702735771422!5m2!1sen!2s"
                        width="670"
                        height="300"
                        style={{ border: '0' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                )}
            </div>
        </div>
    )
}

export default Accomodation