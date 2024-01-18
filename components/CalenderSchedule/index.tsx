'use client'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayjs from 'dayjs'
import { listEvent } from './mockup'
import './style.scss'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
const CalenderSchedule = () => {
  const detailSchedule = ['link', 'participant', 'estimate', 'email']
  return (
    <div className="work-schedule">
      <FullCalendar
        key={'timeGridWeek'}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={'timeGridWeek'}
        events={listEvent}
        editable={true}
        titleFormat={{ year: 'numeric', month: 'short' }}
        droppable={true}
        headerToolbar={{
          left: 'today,title,prev,next',
          center: 'description',
          right: null,
        }}
        customButtons={{
          description: {
            text: 'Work schedule',
          },
        }}
        dayHeaderClassNames="header-calender"
        dayHeaderContent={(content) => {
          const stringDay = dayjs(content.date).format('ddd')
          return (
            <div className="flex flex-col gap-1 text-[#333] uppercase py-2">
              <div className="font-normal	">{stringDay}</div>
              <div className="font-medium	text-2xl	">
                {dayjs(content.date).date()}
              </div>
            </div>
          )
        }}
        allDaySlot={false}
        slotDuration="01:00"
        expandRows
        // stickyHeaderDates={true}
        aspectRatio={0.7}
        slotLabelContent={(item) => (
          <div className="text-[#333] text-base font-medium uppercase text-left">
            {item.text.slice(0, -2)} {item.text.slice(-2)}
          </div>
        )}
        eventMinHeight={100}
        // timeZone="UTC7"
        eventBackgroundColor="#CCDCDA"
        eventBorderColor="#CCDCDA"
        eventContent={(eventInfo) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="px-3 py-3">
                  <div className="text-[#333] font-medium mb-2 text-base">
                    {eventInfo.event.title}
                  </div>
                  <div className="text-[#333] font-medium">
                    {dayjs(eventInfo.event.start).format('h:mm A')} -{' '}
                    {dayjs(eventInfo.event.end).format('h:mm A')}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                style={{ boxShadow: '2px 18px 17.6px 0px #C9DFDD' }}
              >
                <div className="flex flex-col gap-[21px] text-[#333]">
                  <div className="text-xl font-medium">
                    {eventInfo.event.title}
                  </div>
                  <div className="text-base	font-normal">
                    {eventInfo.event.extendedProps.bookingTime}
                  </div>
                  <div className="h-px bg-[#C9D5D6] "></div>
                  <div className="flex flex-col gap-[10px]">
                    {detailSchedule.map((item) => (
                      <div
                        className="flex gap-[10px] items-center text-base	"
                        key={item}
                      >
                        <Image
                          src="/icons/add.svg"
                          width={20}
                          height={20}
                          alt="add icon"
                        />
                        <div>{eventInfo.event.extendedProps[item]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      />
    </div>
  )
}

export default CalenderSchedule
