import CalenderSchedule from '@/components/CalenderSchedule'
import Image from 'next/image'

const Schedule = () => {
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
      </div>
      <div className="w-auto flex-1">
        <CalenderSchedule />
      </div>
    </div>
  )
}

export default Schedule
