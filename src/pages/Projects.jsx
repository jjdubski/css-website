import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/NavBar'
import Project from '../components/project/Project'
import "./styles/projects.css"


const Projects = () => {
  return (
    <>
    <Navbar/>
    <div className='projects'>
        <h1 className='title'>Project Inquiry</h1>
        <p className="info" id='subtitle-info'>Working on a project and need code? Want to code but need a project?</p>
        <div className="divider" style={{marginBottom: 30}}></div>
        <div className="msg-cont">
          <p className="msg">Whether you need help finding someone to work with or to find a project to work on, we got you covered.</p>
          <p className="info" id='subtitle-info' style={{textAlign: 'center', marginBottom: 0}}>Fill out the corresponding Google form below:</p>
        </div>
        <div className="button-cont" style={{display: 'flex'}}>
          <div className="project-button">Project Proposal</div>
          <div className="project-button">Join the Project Team</div>
        </div>
        <h1 className="title">Our Projects</h1>
        <p className="info" id='subtitle-info'>Take a look at our current and past projects!</p>
        <div className="divider"></div>
        <div className="grid">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Projects;