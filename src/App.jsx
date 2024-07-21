//main file of the proyect, where all routes and manage
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Activities from "./components/Activities/Activities";
import Calendar from "./components/Calendar/Calendar";
import Gallery from "./components/Gallery/Gallery";
import Weather from "./components/Weather";
import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";
import Booking from "./components/Booking";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingChange = (value) => {
    setIsLoading(value);
  };
  
  const [language, setLanguage] = useState("es");
  const handleLanguageChange = () => {
    setLanguage(prevLanguage => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <>
      <NavigationBar language={language} onLanguageChange={handleLanguageChange}  />
      
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} handleLoadingChange={handleLoadingChange} language={language} onLanguageChange={handleLanguageChange}/>}
         />
        <Route path="/gallery" element={<Gallery isLoading={isLoading} handleLoadingChange={handleLoadingChange} language={language} onLanguageChange={handleLanguageChange}/>} 
         />
        <Route path="/activities" element={<Activities isLoading={isLoading} handleLoadingChange={handleLoadingChange}/>} 
          language={language} onLanguageChange={handleLanguageChange}
        />
        <Route path="/availability" element={<Calendar />} />
        <Route path="/booking" element={<Booking language={language} onLanguageChange={handleLanguageChange}/>} 
        />
        <Route path="/weather" element={<Weather isLoading={isLoading} handleLoadingChange={handleLoadingChange}/>} 
          language={language} onLanguageChange={handleLanguageChange}
        />
        
      </Routes>
      

      <Footer isLoading={isLoading} language={language} onLanguageChange={handleLanguageChange}/>
    </>
  );
}

export default App;
