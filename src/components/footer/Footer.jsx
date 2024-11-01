import "./footer.css"
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
import ig from '/images/instagram.svg'
import discord from '/images/discord.svg'
import fb from '/images/facebook.svg'
import mail from '/images/mail.svg'

const Footer = () => {
return (
    <div className='footer-cont'>
        <div className="footer-left">
            <Link to="/">
                <img src={logo} className="footer-logo"></img>
            </Link>
            <div className="copyright">© 2024 University of DePaul Computer Science Society</div>
        </div>
        <div className="footer-right">
            <Link to="https://www.instagram.com/depaulcss/"><div className="social"><img src={ig} className="igLogo"></img></div></Link>
            <Link to="https://discord.gg/2WN7ZyDV7j"><div className="social"><img src={discord} className="discordLogo"></img></div></Link>
            <Link to="https://www.facebook.com/groups/cssdepaul/"><div className="social"><img src={fb} className="fbLogo"></img></div></Link>
            <Link to="mailto:cssdepaul@gmail.com"><div className="social"><img src={mail} className="emailLogo"></img></div></Link>
        </div>
    </div>
  )
}

export default Footer;