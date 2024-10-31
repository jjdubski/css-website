import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from '/images/logo.png'

const Navbar = () => {
return (
    <div className='navbar-cont'>
        <div className="navbar-header">
            <Link to="/" className="header-link">
                <img src={logo} alt="" className="logo" height={200} width={200}/>
                <div className="navbar-stack">
                    <p className="title">Computer Science Society</p>
                    <p className="subtitle">@DePaul University, Chicago</p>
                </div>
            </Link>
        </div>
        <div className="navbar-menu">
            <Link to='/'><p className="menu-item">About</p></Link>
            <span className="divider"></span>
            <Link to='/events'><p className="menu-item">Events</p></Link>
            <span className="divider"></span>
            <Link to='/projects'><p className="menu-item">Projects</p></Link>
            <span className="divider"></span>
            <Link to='/eboard'><p className="menu-item">eBoard</p></Link>
            {/* <Link to='/eboard'><button className="menu-item-button">eboard</button></Link> */}
        </div>
    </div>
  )
}

export default Navbar;