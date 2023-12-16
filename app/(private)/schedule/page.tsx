'use client'
import CalenderSchedule from '@/components/CalenderSchedule'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'
import { useState } from 'react'

const Schedule = () => {
  const [state, setState] = useState('workshop')
  const menuState = [
    {
      key: 'workshop',
      value: 'Workshop schedule',
    },
    {
      key: 'meal',
      value: 'Meal schedule',
    },
  ]
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="px-[41px] py-[31px] flex gap-9">
      <div className="w-[377px]">
        <div className="flex items-center justify-between">
          <div className="text-4xl	font-medium	">Your Schedule</div>
          <Image
            src="/icons/add.svg"
            alt="add icon"
            width={52}
            height={52}
            priority
          />
        </div>
        <div className="my-6 py-[42.5px] border rounded-2xl cursor-pointer	">
          {menuState.map((item) => (
            <div
              key={item.key}
              className={`flex gap-[10px] px-6 py-[10px] border-y	 text-[#333] font-medium	${
                item.key === state ? 'bg-[#CCDCDA]' : ''
              }`}
              onClick={() => setState(item.key)}
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right icon"
                width={20}
                height={20}
                priority
              />
              <div>{item.value}</div>
            </div>
          ))}
        </div>
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-2xl border"
          />
        </div>
      </div>
      <div className="w-auto flex-1">
        <CalenderSchedule />
      </div>
    </div>
  )
}

export default Schedule
