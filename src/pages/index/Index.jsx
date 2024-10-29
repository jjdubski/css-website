// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from '../../components/navbar'
import Welcome from '../../components/welcome/';
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