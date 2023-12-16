'use client'
import CalenderSchedule from '@/components/CalenderSchedule'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'
import { useState } from 'react'

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="px-[41px] py-[31px] flex gap-9">
      <div className="">
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
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
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
