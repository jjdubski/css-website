// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from '@/src/components/navbar/Navbar'
import Welcome from '../../../src/components/welcome/Welcome'
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