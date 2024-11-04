import Navbar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Member from '../components/member/Member'
import "./styles/eboard.css";


const Eboard = () => {
  return (
    <>
    <Navbar/>
    <div className='eboard'>
        <h1 className='title'>Executive Board</h1>
        <p className="info" id='subtitle-info'>Meet the team behind our originzation</p>
        <div className='divider'></div>
        <div className="member-cont">
          <Member name={'Jacob Waksmanski'} image='/images/logo.png'/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Eboard;