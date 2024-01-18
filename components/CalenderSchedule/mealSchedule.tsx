'use client'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useSetState } from 'react-use'
import { listFood } from './mockup'
import './style.scss'
const MealSchedule = () => {
  const obj = {}
  listFood.forEach((element) => {
    obj[element.id] = element.menu
  })
  const [activeFood, setActiveFood] = useSetState(obj)
  const handleUpdateActive = (id, foodId) => {
    const newMenu = activeFood[id].map((item) => {
      if (item.id === foodId) {
        item.isActive = true
      } else {
        item.isActive = false
      }
      return item
    })
    setActiveFood({ [id]: newMenu })
  }

  return (
    <div className="work-schedule">
      <FullCalendar
        key={'timeGridWeek'}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={'timeGridWeek'}
        events={listFood}
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
            text: 'Meal schedule',
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
                  <div className="flex flex-col gap-[21px]">
                    <div className="text-[#686868] text-xs	font-normal	">
                      {eventInfo.event.extendedProps.descriptions}
                    </div>
                    {eventInfo.event.extendedProps.menu.map((item) => (
                      <div
                        key={item.name}
                        className={`p-2 rounded-lg ${
                          activeFood[eventInfo.event.id]?.find(
                            (data) => data.id === item.id
                          ).isActive
                            ? 'bg-[#CCDCDA]'
                            : ''
                        }`}
                        onClick={() =>
                          handleUpdateActive(eventInfo.event.id, item.id)
                        }
                      >
                        <div className="flex gap-3 mb-2">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={52}
                            className="rounded-lg"
                            height={52}
                          />
                          <div className="text-[#333] font-normal	text-base	flex items-center	">
                            {item.desc}
                          </div>
                          <Image
                            src={
                              item.isActive
                                ? '/icons/checked.svg'
                                : '/icons/uncheck.svg'
                            }
                            alt={item.name}
                            width={24}
                            className="ml-auto"
                            height={24}
                          />
                        </div>
                        <div className="text-[#333] text-base	font-normal">
                          {item.name}
                        </div>
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

export default MealSchedule
