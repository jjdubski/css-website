import Navbar from '../components/navbar/NavBar'
import Event from '../components/event/Event'
import "./styles/events.css"
import Footer from '../components/footer/Footer'


const Events = () => {
  return (
    <>
    <Navbar/>
    <div className="events">
      <h1 className='title'>Upcoming Events</h1>
      <p className='info' id='subtitle-info'>Click on event to learn more & sign up!</p>
      <div className='divider'></div>
      <div className='flex-grid'>
        <Event/>
        <Event/>
        <Event/>
      </div>
      <h1 className='title' style={{marginTop:70}}>Past Events</h1>
      <p className='info' id='subtitle-info'>Click on event to learn more & view available photos!</p>
      <div className='divider'></div>
      <div className='flex-grid'>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Events;