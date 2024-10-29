import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from '/images/logo.png'

const Navbar = () => {
return (
    <div className='navbar-cont'>
        <div className="navbar-left">
            <div className="left-menu">
                <Link to="/" className='flexRow'>
                    <img src={logo} alt="" className="logo-image" height={200} width={200}/>
                    <div className="stack">
                        <p className="title">CSS</p>
                        <p className="title-asset">Computer Science Society</p>
                    </div>
                    
                </Link>
            </div>
        </div>
        <div className="navbar-right">
            <div className="menu-cont-navbar">
                <Link to='/about'><p className="menu-item">About</p></Link>
                <Link to='/events'><p className="menu-item">Events</p></Link>
                <Link to='/projects'><p className="menu-item">Projects</p></Link>
                <Link to='/eboard'><p className="menu-item">Eboard</p></Link>
                {/* <Link to='/eboard'><button className="menu-item-button">eboard</button></Link> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar;