
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Calendar from "./components/Calendar/Calendar";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery/Gallery";
import Weather from "./components/Weather";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingChange = (value) => {
    setIsLoading(value);
  };

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} handleLoadingChange={handleLoadingChange}/>} />
        <Route path="/gallery" element={<Gallery isLoading={isLoading} handleLoadingChange={handleLoadingChange} />} />
        <Route path="/activities" element={<Activities isLoading={isLoading} handleLoadingChange={handleLoadingChange}/>} />
        <Route path="/availability" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather isLoading={isLoading} handleLoadingChange={handleLoadingChange}/>} />
      </Routes>

      <Footer isLoading={isLoading}/>
    </>
  );
}

export default App;
