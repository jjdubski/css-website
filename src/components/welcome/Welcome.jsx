import "./welcome.css"
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png'

const Welcome = () => {
  return (
    <div className='welcome-cont'>
        <div className="left">
            <div className="welcome-title">DePaul</div>
            <div className="welcome-subtitle">Computer Science Society</div>
            <div className="welcome-intro">Welcome to the Computer Science Society at DePaul University. 
                We are a student organization that aims to provide a community for students interested in computer science. 
                We host events, workshops, and projects to help students learn and grow in the field of computer science. 
            </div>
            <Link to="/dashboard">
                <div className="welcome-button">Join our Discord</div>
            </Link>
        </div>
        <div className="right">
            <img src={logo} alt="" className="bg-main" height={120} width={240}/>
        </div>
    </div>
  )
}

export default Welcome