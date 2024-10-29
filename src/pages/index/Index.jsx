// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from '@/components/navbar/Navbar.jsx'
import Welcome from '@/components/welcome/Welcome.jsx';
import "./index.css"


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