'use client'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useState } from 'react'
import { convertData, renderEventContent } from './handler'
const CalenderSchedule = () => {
  const [events, setEvents] = useState(convertData)

  return (
    <div className="">
      <FullCalendar
        key={'timeGridWeek'}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={'timeGridWeek'}
        events={events}
        editable={true}
        droppable={true}
        eventContent={renderEventContent}
      />
    </div>
  )
}

export default CalenderSchedule
