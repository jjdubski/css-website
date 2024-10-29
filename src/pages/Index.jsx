// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from '../components/navbar/NavBar'
import Welcome from '../components/welcome/Welcome'
import "./styles/index.css"


const Index = () => {
  return (
    <>
    <Navbar/>
    <div className='index'>
      <Welcome/>
    </div>
    </>
  )
}

export default Index;