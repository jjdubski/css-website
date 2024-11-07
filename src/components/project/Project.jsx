import chevron from "/images/chevron-right.svg"
import "./project.css"

const Project = () => { 
return (
    <div className='tile-cont'>
        <h2 className="subtitle">Project Title</h2>
        <div className="tile-body">
            <p className="info project-status">Project Status</p>
            <p className="info project-desc">Project Description</p>
        </div>
        <p className="learn-more">Learn more<img src={chevron} alt=">" height={10}/></p>
    </div>
  )
}

export default Project;