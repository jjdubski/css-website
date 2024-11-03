import Navbar from '../components/navbar/NavBar'
import "./styles/projects.css"


const Projects = () => {
  return (
    <>
    <Navbar/>
    <div className='projects'>
        <h1 className='title'>Project Inquiry</h1>
        <div className="info" id='projects-info'>Working on a project and cod</div>
        <div className="divider"></div>
    </div>
    </>
  )
}

export default Projects;