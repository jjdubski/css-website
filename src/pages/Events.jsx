import Navbar from '../components/navbar/NavBar'
import Event from '../components/event/Event'
import "./styles/events.css"
import Footer from '../components/footer/Footer'

const currEvents = [
  {
    title: 'Hackathon 2024',
    date: '2024-11-21',
    description: `Join us for a 24-hour coding marathon! Prizes and swag included.
    Be sure to register early! Be there or be square!`,
    googleDriveLink: 'https://drive.google.com/drive/folders/hackathon2024',
  },
  {
    title: 'AI Workshop',
    date: '2024-12-22',
    description: `Discover the fundamentals of Artificial Intelligence in this 
    hands-on workshop. Learn about machine learning, neural networks, and AI applications. 
    Perfect for beginners and enthusiasts looking to dive into the world of AI.
    Discover the fundamentals of Artificial Intelligence in this 
    hands-on workshop. Learn about machine learning, neural networks, and AI applications. 
    Perfect for beginners and enthusiasts looking to dive into the world of AI.`,
    googleDriveLink: 'https://drive.google.com/drive/folders/aiworkshop',
  },
  {
    title: 'Web Development Bootcamp',
    date: '2025-01-23',
    description: 'A comprehensive bootcamp on modern web development.',
    googleDriveLink: 'https://drive.google.com/drive/folders/webdevbootcamp',
  },
  {
    title: 'Cybersecurity Seminar',
    date: '2025-02-15',
    description: 'Understand the fundamentals of cybersecurity.',
    googleDriveLink: 'https://drive.google.com/drive/folders/cybersecurityseminar',
  },
  {
    title: 'Data Science Conference',
    date: '2025-03-10',
    description: 'Explore the world of data science and analytics.',
    googleDriveLink: 'https://drive.google.com/drive/folders/datascienceconference',
  },
];

const pastEvents = [
  {
    title: 'Intro to Python',
    date: '2024-10-01',
    description: 'A beginner-friendly introduction to Python programming.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtopython',
  },
  {
    title: 'JavaScript Essentials',
    date: '2024-09-15',
    description: 'Learn the essentials of JavaScript for web development.',
    googleDriveLink: 'https://drive.google.com/drive/folders/javascriptessentials',
  },
  {
    title: 'Machine Learning 101',
    date: '2024-09-01',
    description: 'An introductory course on machine learning concepts.',
    googleDriveLink: 'https://drive.google.com/drive/folders/machinelearning101',
  },
  {
    title: 'Cloud Computing Basics',
    date: '2024-08-20',
    description: 'Understand the basics of cloud computing.',
    googleDriveLink: 'https://drive.google.com/drive/folders/cloudcomputingbasics',
  },
  {
    title: 'Blockchain Technology',
    date: '2024-08-05',
    description: 'Explore the fundamentals of blockchain technology.',
    googleDriveLink: 'https://drive.google.com/drive/folders/blockchaintechnology',
  },
  {
    title: 'Advanced Java',
    date: '2024-07-25',
    description: 'Deep dive into advanced Java programming concepts.',
    googleDriveLink: 'https://drive.google.com/drive/folders/advancedjava',
  },
  {
    title: 'React Native Workshop',
    date: '2024-07-10',
    description: 'Build mobile apps using React Native.',
    googleDriveLink: 'https://drive.google.com/drive/folders/reactnativeworkshop',
  },
  {
    title: 'DevOps Practices',
    date: '2024-06-30',
    description: 'Learn about modern DevOps practices and tools.',
    googleDriveLink: 'https://drive.google.com/drive/folders/devopspractices',
  },
  {
    title: 'Intro to SQL',
    date: '2024-06-15',
    description: 'A beginner-friendly introduction to SQL databases.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtosql',
  },
  {
    title: 'Mobile App Development',
    date: '2024-06-01',
    description: 'Learn how to develop mobile applications.',
    googleDriveLink: 'https://drive.google.com/drive/folders/mobileappdevelopment',
  },
  {
    title: 'Game Development with Unity',
    date: '2024-05-20',
    description: 'Create games using the Unity game engine.',
    googleDriveLink: 'https://drive.google.com/drive/folders/gamedevelopmentwithunity',
  },
  {
    title: 'Intro to Algorithms',
    date: '2024-05-05',
    description: 'Understand the basics of algorithms and data structures.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtalgorithms',
  },
  {
    title: 'Networking Fundamentals',
    date: '2024-04-25',
    description: 'Learn the fundamentals of computer networking.',
    googleDriveLink: 'https://drive.google.com/drive/folders/networkingfundamentals',
  },
  {
    title: 'Software Testing',
    date: '2024-04-10',
    description: 'An introduction to software testing methodologies.',
    googleDriveLink: 'https://drive.google.com/drive/folders/softwaretesting',
  },
  {
    title: 'Intro to HTML & CSS',
    date: '2024-03-30',
    description: 'Learn the basics of HTML and CSS for web development.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtohtmlcss',
  },
  {
    title: 'Agile Methodologies',
    date: '2024-03-15',
    description: 'Understand the principles of Agile software development.',
    googleDriveLink: 'https://drive.google.com/drive/folders/agilemethodologies',
  },
  {
    title: 'Intro to C++',
    date: '2024-03-01',
    description: 'A beginner-friendly introduction to C++ programming.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtocpp',
  },
  {
    title: 'Full Stack Development',
    date: '2024-02-20',
    description: 'Learn full stack web development with MERN stack.',
    googleDriveLink: 'https://drive.google.com/drive/folders/fullstackdevelopment',
  },
  {
    title: 'Data Visualization',
    date: '2024-02-05',
    description: 'Create stunning data visualizations with D3.js.',
    googleDriveLink: 'https://drive.google.com/drive/folders/datavisualization',
  },
  {
    title: 'Intro to Git & GitHub',
    date: '2024-01-25',
    description: 'Learn version control with Git and GitHub.',
    googleDriveLink: 'https://drive.google.com/drive/folders/introtogitgithub',
  },
];

const Events = () => {
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