
import CarouselComponent from './assets/components/Carousel/Carousel';
import './App.css'
import BodyFirst from './assets/components/BodyFirst/BodyFirst';
import Gallery from './assets/components/Gallery/gallery';
import NavBar from './assets/components/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";



function App() {
  

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<BodyFirst/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/carousel' element={<CarouselComponent/>}/>
        {/* <Route path='/activities' element={<Activities/>}/>
        <Route path='/gallery' element={<Gallery/>}/> */}
      
      </Routes>
      


      
      
    </>
  )
}

export default App
