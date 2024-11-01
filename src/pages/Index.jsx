// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/NavBar'
import Welcome from '../components/welcome/Welcome'
import "./styles/index.css"


const Index = () => {
  return (
    <>
    <Navbar/>
    <div className='index'>
      <div className="meeting-info">
        <h1>Our weekly meetings are every Wednesday @ 4:30pm in Lewis 1007</h1>
      </div>
      <Welcome/>
    </div>
    <Footer/>
    </>
  )
}

export default Index;