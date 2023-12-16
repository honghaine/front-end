"use client"
import Navbar from "@/utils/navbar"
import Image from 'next/image'
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Schedule = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="Frame5013 w-[376.49px] h-[52.49px] justify-start items-center gap-5 inline-flex" style={{ marginLeft: "41px", marginTop: "41px" }}>
        <h1 className="YourSchedule text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]" >Your Schedule</h1>
        <button className="Frame19 p-4 bg-zinc-800 rounded-[45px] justify-center items-center gap-2.5 flex" style={{ padding: "0" }}>
          <Image src={'/icons/Frame_19.svg'} width={50} height={50} alt={'20'}>
          </Image>
        </button>
      </div>
      <div className="Group647 w-[377px] h-[161.64px] relative" style={{ marginLeft: "40px", marginTop: "31.75px" }}>
        <div className="Rectangle7 w-[377px] h-[161.64px] left-0 top-0 absolute rounded-[20px] border border-gray-300" />
        <div className="Frame29 w-[376px] h-20 left-[1px] top-[42.50px] absolute flex-col justify-start items-start inline-flex">
          <button className="Frame27 self-stretch px-6 py-2.5 bg-gray-300 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
            <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
            </Image>
            <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Workshop schedule</div>
          </button>
          <button className="Frame28 self-stretch px-6 py-2.5 bg-slate-100 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
            <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
            </Image>
            <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Meal schedule</div>
          </button>
        </div>
      </div>

      <div className="Calendar w-[377px] h-[379px] p-6 rounded-[20px] shadow border border-gray-300 flex-col justify-center items-start gap-[21px] inline-flex" style={{ marginLeft: "40px", marginTop: "24px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar']}>
            <DateCalendar
              referenceDate={dayjs('2023-12-17')}
              views={['year', 'month', 'day']}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>


    </>
  )
}

export default Schedule