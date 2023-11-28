
import CarouselComponent from './components/Carousel/Carousel';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import Activities from './components/Activities/Activities';
import NavBar from './components/NavBar/Navbar';
import Calendar from './components/Calendar/Calendar';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Weather from './components/Weather/Weather';


function App() {

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<CarouselComponent/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/availability' element={<Calendar/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        <Route path='/weather' element={<Weather/>}/>
        

      </Routes>
    </>
  )
}

export default App
