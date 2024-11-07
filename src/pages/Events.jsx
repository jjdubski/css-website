import Navbar from '../components/navbar/NavBar'
import Event from '../components/event/Event'
import Footer from '../components/footer/Footer'
import Papa from 'papaparse'
import { useEffect, useState } from 'react'
import './styles/events.css'

const Events = () => {
  const [currEvents, setCurrEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    Papa.parse('/events/events.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const events = result.data;
        const currEvents = events
          .filter(event => new Date(event.date) >= new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        const pastEvents = events
          .filter(event => new Date(event.date) < new Date())
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setCurrEvents(currEvents);
        setPastEvents(pastEvents);
      },
    });

  }, []);

  return (
    <>
    <Navbar/>
    <div className="events">
      <h1 className='title'>Upcoming Events</h1>
      <p className='info subtext'>Click on event to learn more & sign up!</p>
      <div className='divider'></div>
      <div className='flex-grid'>
        {currEvents.map(event => (
          <Event key={event.title} event={event} />
        ))}
      </div>
      <h1 className='title' style={{marginTop:70}}>Past Events</h1>
      <p className='info subtext'>Click on event to learn more & view available photos!</p>
      <div className='divider'></div>
      <div className='flex-grid'>
        {pastEvents.map(event => (
          <Event key={event.title} event={event} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Events;