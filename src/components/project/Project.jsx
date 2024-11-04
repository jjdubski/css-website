import "./project.css"
import chevron from "/images/chevron-right.svg"

const Project = () => {
return (
    <div className='tile-cont'>
        <h2 className="subtitle">Project Title</h2>
        <div className="tile-body">
            <p className="tile-date-time">Event Date</p>
            <p className="info">Event Description</p>
            <p className="learn-more">Learn more<img src={chevron} alt=">" height={10}/></p>
        </div>
    </div>
  )
}

export default Project;