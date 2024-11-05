import "./navbar.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png'

const Navbar = () => {
return (
    <div className='navbar-cont'>
        <div className="navbar-header">
            <Link to="/" className="header-link">
                <img src={logo} alt="" className="logo" height={200} width={200}/>
                <div className="navbar-stack">
                    <p className="title" style={{marginTop: 0}}>Computer Science Society</p>
                    <p className="subtitle">@DePaul University, Chicago</p>
                </div>
            </Link>
        </div>
        <div className="navbar-menu">
            <NavLink to='/' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>About</NavLink>
            <span className="navbar-divider"></span>
            <NavLink to='/events' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>Events</NavLink>
            <span className="navbar-divider"></span>
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>Projects</NavLink>
            <span className="navbar-divider"></span>
            <NavLink to='/eboard' className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>eBoard</NavLink>
            {/* <Link to='/eboard'><button className="menu-item-button">eboard</button></Link> */}
        </div>
    </div>
  )
}

export default Navbar;