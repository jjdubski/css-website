import "./project.css"
import chevron from "/images/chevron-right.svg"

const Project = () => { 
return (
    <div className='tile-cont'>
        <h2 className="subtitle">Project Title</h2>
        <div className="tile-body">
            <p className="project-desc">Project Description</p>
            <p className="info" id="project-status">Project Status</p>
            <p className="learn-more">Learn more<img src={chevron} alt=">" height={10}/></p>
        </div>
    </div>
  )
}

export default Project;