"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SideBar from '@/components/Profile/SideBar'

const Flight = () => {
    const router = useRouter()

    function handleClick(event) {
        event.preventDefault()
        var regex = /^[a-zA-Z]{3}\d{5}$/
        var txtFlightNr = (document.getElementById('flightNr') as HTMLInputElement).value
        if (txtFlightNr != '' && regex.test(txtFlightNr)) {
            var currentDate = new Date();

            var currentDate = new Date();

            var numbers = [1, 2, 3, 4];

            var randomIndex = Math.floor(Math.random() * numbers.length);
            var randomNumber = numbers[randomIndex];


            var day = currentDate.getDate() + 3;
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();

            var hours = currentDate.getHours() - 1;
            var hoursNew = currentDate.getHours() + randomNumber;
            var minutes = currentDate.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';

            var ampmNew = hoursNew >= 12 ? 'PM' : 'AM';
            var formattedDate = day + '/' + month + '/' + year;
            var formattedTime = hours % 12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
            var formattedTimeNew = hoursNew % 12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampmNew;

            (document.getElementById('arrivalDt') as HTMLInputElement).innerHTML = formattedDate;
            (document.getElementById('arrivalTm') as HTMLInputElement).innerHTML = formattedTime;
            (document.getElementById('departureDt') as HTMLInputElement).innerHTML = formattedDate;
            (document.getElementById('departureTm') as HTMLInputElement).innerHTML = formattedTimeNew;
        }
        else {
            (document.getElementById('arrivalDt') as HTMLInputElement).innerHTML = "";
            (document.getElementById('arrivalTm') as HTMLInputElement).innerHTML = "";
            (document.getElementById('departureDt') as HTMLInputElement).innerHTML = "";
            (document.getElementById('departureTm') as HTMLInputElement).innerHTML = "";
        }


    }


    return (
        <div className="Frame13 w-[1530px] h-[682.02px] p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-8 inline-flex" style={{ marginTop: "32px", marginLeft: "20px" }}>
            <div className="FlightInformation text-zinc-800 text-xl font-medium font-['Poppins'] leading-normal" style={{fontWeight: 600}}>Flight information</div>
            <div className="Line2 self-stretch h-[0px] border border-gray-300"></div>
            <div className="Frame25 w-[753px] h-[398px] flex-col justify-start items-start gap-2 flex">
                <div className="FlightTicketPhotography text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Flight ticket photography</div>
                <Image className="Image10 self-stretch grow shrink basis-0" src="/icons/ticket.png" width={753} height={371} alt={''} ></Image>
            </div>
            <div className="Frame15 self-stretch justify-start items-end gap-5 inline-flex">
                <div className="Frame19 w-[347px] h-[84.02px] flex-col justify-center items-start gap-[8.20px] inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Flight number</div>
                    <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-start gap-[10.25px] inline-flex">
                        <input type="text" className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight uppercase " maxLength={20} onChange={(e) => handleClick(e)} id="flightNr" placeholder='VNA00000' />
                    </div>
                </div>
                <div className="Frame21 w-[255px] flex-col justify-start items-start gap-[8.20px] inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Arrival date & Time</div>
                    <div className="Frame3 self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-center gap-[10.25px] inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight" id="arrivalDt"></div>
                        <div className="VuesaxTwotoneCalendar w-[20.49px] h-[20.49px] justify-center items-center flex">
                            <div className="Calendar w-[20.49px] h-[20.49px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame20 w-[255px] h-[57px] flex-col justify-center items-start gap-[8.20px] inline-flex">
                    <div className="StateDefaultHeaderFalse self-stretch h-[55.33px] px-[24.59px] py-[18.44px] rounded border border-gray-300 justify-start items-start gap-[10.25px] inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight" id="arrivalTm"></div>
                    </div>
                </div>
                <div className="Frame13 w-[255px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="FlightNumber text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>Departure date & time</div>
                    <div className="Frame3 self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight" id="departureDt"></div>
                        <div className="VuesaxTwotoneCalendar w-5 h-5 justify-center items-center flex">
                            <div className="Calendar w-5 h-5 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame14 w-64 flex-col justify-center items-start gap-2 inline-flex">
                    <div className="StateDefaultHeaderFalse self-stretch h-[54px] px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                        <div className="PleaseInsertYourEmail grow shrink basis-0 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight" id="departureTm"></div>
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