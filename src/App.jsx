//main file of the proyect, where all routes and manage
import { Helmet } from "react-helmet";
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
import Apartment from "./components/Apartment";
import NotFound from "./components/NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingChange = (value) => {
    setIsLoading(value);
  };
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "es";
  });
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };
  
  return (
    <>
      <NavigationBar
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Apartamento en Playa Honda - Inicio"
                    : "Apartment in Playa Honda - Home"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Descubre un increíble apartamento en Playa Honda, ideal para tus vacaciones."
                      : "Discover an amazing apartment in Playa Honda, perfect for your vacation."
                  }
                />
                <meta
                  property="og:title"
                  content={
                    language === "es"
                      ? "Apartamento en Playa Honda - Inicio"
                      : "Apartment in Playa Honda - Home"
                  }
                />
                <meta
                  property="og:description"
                  content={
                    language === "es"
                      ? "Alquila un apartamento con vistas al mar en Playa Honda."
                      : "Rent a sea-view apartment in Playa Honda."
                  }
                />
                <meta
                  property="og:image"
                  content="https://playa-honda.vercel.app/Terraza_1_min.jpg"
                />
              </Helmet>
              <Home
                isLoading={isLoading}
                handleLoadingChange={handleLoadingChange}
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />
        <Route
          path="/apartment"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Apartamento en Playa Honda - Detalles"
                    : "Apartment in Playa Honda - Details"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Detalles del apartamento en Playa Honda. Ideal para vacaciones con vistas al mar."
                      : "Details of the apartment in Playa Honda. Perfect for sea-view vacations."
                  }
                />
                <meta
                  property="og:title"
                  content={
                    language === "es"
                      ? "Apartamento en Playa Honda - Detalles"
                      : "Apartment in Playa Honda - Details"
                  }
                />
                <meta
                  property="og:description"
                  content={
                    language === "es"
                      ? "Consulta todos los detalles de este hermoso apartamento con vistas al mar."
                      : "Check all the details of this beautiful sea-view apartment."
                  }
                />
                <meta
                  property="og:image"
                  content="https://playa-honda.vercel.app/Paseo_2.jpg"
                />
              </Helmet>
              <Apartment
                isLoading={isLoading}
                handleLoadingChange={handleLoadingChange}
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Galería de imágenes - Playa Honda"
                    : "Image Gallery - Playa Honda"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Explora la galería de imágenes del apartamento en Playa Honda."
                      : "Explore the image gallery of the apartment in Playa Honda."
                  }
                />
              </Helmet>
              <Gallery
                isLoading={isLoading}
                handleLoadingChange={handleLoadingChange}
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />
        <Route
          path="/activities"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Actividades en Playa Honda - Disfruta tu estancia"
                    : "Activities in Playa Honda - Enjoy your stay"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Descubre las mejores actividades que puedes disfrutar durante tu estancia en Playa Honda."
                      : "Discover the best activities to enjoy during your stay in Playa Honda."
                  }
                />
                <meta
                  property="og:title"
                  content={
                    language === "es"
                      ? "Actividades en Playa Honda - Disfruta tu estancia"
                      : "Activities in Playa Honda - Enjoy your stay"
                  }
                />
                <meta
                  property="og:description"
                  content={
                    language === "es"
                      ? "Consulta las actividades más recomendadas en Playa Honda para hacer de tu estancia unas vacaciones inolvidables."
                      : "Check out the top recommended activities in Playa Honda to make your stay unforgettable."
                  }
                />
                <meta
                  property="og:image"
                  content="https://playa-honda.vercel.app/paddelsurf2.jpg"
                />
              </Helmet>
              <Activities
                isLoading={isLoading}
                handleLoadingChange={handleLoadingChange}
                language={language}
                
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />

        <Route
          path="/booking"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Reserva tu Apartamento en Playa Honda"
                    : "Book Your Apartment in Playa Honda"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Reserva el apartamento en Playa Honda de manera rápida y sencilla para tus próximas vacaciones."
                      : "Easily book the Playa Honda apartment for your next vacation."
                  }
                />
                <meta
                  property="og:title"
                  content={
                    language === "es"
                      ? "Reserva tu Apartamento en Playa Honda"
                      : "Book Your Apartment in Playa Honda"
                  }
                />
                <meta
                  property="og:description"
                  content={
                    language === "es"
                      ? "Haz tu reserva en línea para un apartamento con vistas al mar en Playa Honda."
                      : "Book online for a sea-view apartment in Playa Honda."
                  }
                />
                <meta
                  property="og:image"
                  content="https://www.cartagenacosta.com/alquiler/apartamento-playa-honda-apartamento-brisa-y-mar-en-playa-honda-501514.html"
                />
              </Helmet>

              <Booking
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />
        <Route
          path="/weather"
          element={
            <>
              <Helmet>
                <title>
                  {language === "es"
                    ? "Clima en Playa Honda - Consulta el Pronóstico"
                    : "Weather in Playa Honda - Check the Forecast"}
                </title>
                <meta
                  name="description"
                  content={
                    language === "es"
                      ? "Consulta el pronóstico del tiempo en Playa Honda para planificar tus actividades al aire libre."
                      : "Check the weather forecast in Playa Honda to plan your outdoor activities."
                  }
                />
                <meta
                  property="og:title"
                  content={
                    language === "es"
                      ? "Clima en Playa Honda - Consulta el Pronóstico"
                      : "Weather in Playa Honda - Check the Forecast"
                  }
                />
                <meta
                  property="og:description"
                  content={
                    language === "es"
                      ? "Obtén información actualizada sobre el clima en Playa Honda y planifica tu estancia."
                      : "Get the latest weather updates for Playa Honda and plan your stay."
                  }
                />
                <meta
                  property="og:image"
                  content="https://playa-honda.vercel.app/faro.jpg"
                />
              </Helmet>

              <Weather
                isLoading={isLoading}
                handleLoadingChange={handleLoadingChange}
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </>
          }
        />
        <Route path="*" element={<NotFound language={language} />} />

      </Routes>

      <Footer
        isLoading={isLoading}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
}

export default App;
