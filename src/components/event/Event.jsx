import "./event.css"
import chevron from "/images/chevron-right.svg"

const Event = () => {
return (
    <div className='event-cont'>
        <h2 className="subtitle">Event Title</h2>
        <div className="event-body">
            <p className="event-description">Event Description</p>
            <p className="event-date-time">Event Date</p>
            <p className="learn-more">Learn more<img src={chevron} alt=">" height={10}/></p>
        </div>
    </div>
  )
}

export default Event;