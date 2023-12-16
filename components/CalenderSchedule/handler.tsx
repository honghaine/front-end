import { listJob } from './mockup'

export const convertData = listJob.map((job) => ({
  title: job.tile.header,
  start: job.event.start,
  end: job.event.end,
  style: job.color,
  date: job.event.start,
  demo: 'hoaafucn',
  id: job.event.id,
}))

export const renderEventContent = (eventInfo) => (
  <div style={{ color: 'black' }}>{eventInfo.event.title}</div>
)

export const renderSidebar = (
  <div
    id="external-events"
    style={{ display: 'flex', gap: 20, flexDirection: 'column' }}
  >
    <p>
      <strong>Draggable Events</strong>
    </p>
    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div className="fc-event-main">My Event 1</div>
    </div>
    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div className="fc-event-main">My Event 2</div>
    </div>
    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div className="fc-event-main">My Event 3</div>
    </div>
    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div className="fc-event-main">My Event 4</div>
    </div>
    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
      <div className="fc-event-main">My Event 5</div>
    </div>
  </div>
)

export const formatTime = (hour, minute) => {
  const ampm = hour >= 12 ? 'pm' : 'am'
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12
  const formattedMinute = minute < 10 ? '0' + minute : minute
  return `${formattedHour}:${formattedMinute}${ampm}`
}
