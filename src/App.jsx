
import CarouselComponent from './assets/components/Carousel/Carousel';
import './App.css'
import BodyFirst from './assets/components/BodyFirst/BodyFirst';
import Gallery from './assets/components/Gallery/gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import Activities from './components/Activities/Activities';
import NavBar from './components/NavBar/Navbar';

function App() {

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<BodyFirst/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/carousel' element={<CarouselComponent/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </>
  )
}

export default App
