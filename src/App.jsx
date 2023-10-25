
import CarouselComponent from './assets/components/Carousel/Carousel';
import './App.css'

import Gallery from './assets/components/Gallery/gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import Activities from './components/Activities/Activities';
import NavBar from './components/NavBar/Navbar';
import Calendar from './components/Calendar/Calendar';

function App() {

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<CarouselComponent/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/availability' element={<Calendar/>}/>
      </Routes>
    </>
  )
}

export default App
