import React from 'react';
import './App.css'
import BodyFirst from './assets/components/BodyFirst/BodyFirst';
import BodySecond from './assets/components/BodySecond/BodySecond';
import Gallery from './assets/components/Gallery/gallery';

import NavBar from './assets/components/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<BodyFirst/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        {/* <Route path='/activities' element={<Activities/>}/>
        <Route path='/gallery' element={<Gallery/>}/> */}
      
      </Routes>
      


      
      
    </>
  )
}

export default App
