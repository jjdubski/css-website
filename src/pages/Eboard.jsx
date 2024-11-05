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
          <Member name={'Nick Dillato'} image='/images/nicholas_dilallo.png' pos={'President/Treasurer'} desc={`Senior-level computer science student with a minor in data science 
            who aspires to become a software developer. As a student at DePaul University, I am constantly seeking out new challenges and
            opportunities to grow both personally and professionally. With a solid foundation in programming languages and a passion for 
            problem-solving, I am well-equipped to tackle complex projects and develop innovative solutions.`}/>
          <Member name={'Mehmet Serhat Cingilli'} image='/images/serhat_cingilli.png' pos={'Vice President'} desc={`As a Senior at DePaul University, 
            I've cultivated a diverse skill set that bridges leadership, technical expertise, and a passion for continuous learning. My journey in technology 
            began with over 15 months as an intern developer at a startup, where I worked extensively with React, JavaScript, and React Native to build 
            innovative solutions that meet real-world needs.`}/>
          <Member name={'Jacob Waksmanski'} image='/images/jacob_waksmanski.png' pos={'Website Admin'} desc={`My name is Jacob Waksmanski and I am a 
            Computer Science major at DePaul University. I'm currently a senior and expected to graduate in March 2025. My interests include web 
            development & architecture, artificial intelligence, and video game development. I designed, developed and maintain the current website.`}/>
          <Member name={'Marisa Ban'} image='/images/marisa_ban.png' pos={'Social Media Coordinator'} desc={`I am a 4th year student at DePaul University studying computer science with 
            a concentration in software development set to graduate in November 2024. My first two years of college were completed at the University of 
            Illinois at Urbana-Champaign where I studied Agricultural and Biological Engineering until I transferred to DePaul in 2022 to pursue computer 
            science. At both DePaul and the University of Illinois I've achieved the Dean's List every semester of school. I'm passionate about learning 
            and love researching new subjects.`}/>
          <Member name={'Afroze Kassam'} image='/images/afroze_kassam.png' pos={'Outreach Coordinator'} desc={`My name is Afroze Kassam.`}/>
          <Member name={'Fritz Nastor'} image='/images/fritz_nastor.png' pos={'Board Member'} desc={`My name is Fritz Nastor.`}/>
          <Member name={'Rebecca Henzig'} image='/images/rebecca_henzig.png' pos={'Board Member'} desc={`I am an interdisciplinary student at DePaul University, 
            majoring in computer science and minoring in biological sciences and data science, with an expected graduation date of June 2026. I am planning to pursue 
            graduate study in computational biology and bioinformatics. Currently, I am involved with a research project conducting a genome-wide association study 
            of the Ecuadorian rainbow characin genus Rhoadsia to identify SNPs associated with differences in habitat elevation, in order to paint a clearer picture 
            of the evolutionary adaptations of the genus. `}/>
          <Member name={'Dave Shilander'} image='/images/dave_shilander.png' pos={'Board Member'}desc={`I’m a dedicated software engineer with a B.S. in Computer Science and am currently 
            pursuing an M.S. in Software Engineering. My long-term goal is to move into software architecture for large-scale systems. I have extensive experience in 
            software engineering and full-stack web development, having worked with a variety of languages including Java, JavaScript, Python, Swift, C, and C++, and
            databases such as SQL, Neo4J, and MongoDB. I’m familiar with cloud services (such as AWS), containerization (such as Docker), and DevOps practices, 
            including CI/CD pipelines. My project experience spans building full-stack CRUD apps, iOS applications, games, and NPM packages, along with applying 
            software engineering principles to design and implement robust systems.`}/>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default Eboard;