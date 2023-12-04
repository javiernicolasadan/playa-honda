
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Calendar from "./components/Calendar/Calendar";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Weather from "./components/Weather/Weather";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/availability" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
