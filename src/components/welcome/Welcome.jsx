import "./welcome.css"
import { Link } from 'react-router-dom';
import logo from '/images/logo.png'

const Welcome = () => {
  return (
    <div className='welcome-cont'>
        <div className="welcome-title">Welcome to the Computer Science Society (CSS)!</div>
        <div className="welcome-date">Last Updated: October 29, 2024</div>
        <div className="welcome-msg">
            <p className="msg">Welcome to the Computer Science Society at DePaul University. 
                We are a student organization that aims to provide a community for students interested in computer science. 
                We host events, workshops, and projects to help students learn and grow in the field of computer science. 
            </p>
            <p className="msg">The Computer Science Society (CSS) at DePaul University is a dynamic, student-run organization 
                dedicated to fostering a supportive and inclusive community for students passionate about technology, innovation, 
                and computing. Our mission is to advocate for and promote the field of computer science across the university, 
                while also providing a welcoming environment for students from all academic backgrounds—whether you're pursuing a 
                degree in computer science or simply have an interest in technology.
            </p>
            <p className="msg">At CSS, we believe that collaboration and knowledge-sharing are the keys to success in the tech industry. 
                We host a variety of events, workshops, and panels that encourage networking, skill development, and professional growth. 
                From coding bootcamps and hackathons to industry guest speaker sessions and career-building workshops, there’s something 
                for everyone, regardless of experience level. Our club provides hands-on opportunities to work on real-world projects, 
                preparing students for future careers in technology while connecting them with industry professionals.
            </p>
            <p className="msg">We are also passionate about promoting diversity in tech. By partnering with other student organizations 
                and departments, we aim to create a space that uplifts underrepresented voices and advocates for equity and inclusion 
                within the computing field. Whether you're a seasoned coder or just curious about technology, CSS is a place where you 
                can learn, grow, and connect with like-minded individuals.
            </p>
            <p className="msg">Join us to explore new technologies, develop skills, and be part of a thriving community dedicated to 
                advancing computing at DePaul University!
            </p>
        </div>
        <div className="button-cont">
            <Link to="/about"><div className="discord-button">Join our Discord</div></Link>
        </div>
    </div>
  )
}

export default Welcome