import { useEffect, useState } from "react";
//in media.json we are filtering the tag of each picture for "all", "nature", "activities" and "places"
import media from "../../assets/media/media.json";
//particular CSS for the gallery
import "./gallery.css";
import { Nav } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { getTranslation } from "../../services/localizationservice";

const Gallery = ({ isLoading, handleLoadingChange, language, onLanguageChange }) => {
  //{console.log(language)}
  const categoryTranslations = {
    "De todo": {
      en: "All",
      es: "De Todo"
    },
    "All": {
    en: "All",
    es: "Todo"
  },
    "Apartamento": {
      en: "Apartment",
      es: "Apartamento"
    },
    "Actividades": {
      en: "Activities",
      es: "Actividades"
    },
    "Naturaleza": {
      en: "Nature",
      es: "Naturaleza"
    },
    "Lugares": {
      en: "Places",
      es: "Lugares"
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("De todo");
  const categories = Object.keys(media.categories);
  const translatedCategories = categories.map(category => categoryTranslations[category][language]);
   //console.log(categories)
   const imagesByCategory = Object.keys(media.categories).reduce((result, category) => {
    const translatedCategory = categoryTranslations[category][language];
    result[translatedCategory] = media.categories[category];
    return result;
  }, {});
  
  
  
  useEffect(()=>{
    handleLoadingChange(true)
   },[])

  setTimeout(() => {
    handleLoadingChange(false);
  }, 2500);

   const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
  };
  useEffect(() => {
    const defaultCategory = language === "es" ? "De todo" : "All";
    const translatedDefaultCategory = categoryTranslations[defaultCategory] && categoryTranslations[defaultCategory][language];
  
    if (translatedDefaultCategory) {
      changeCategory(translatedDefaultCategory);
    } else {
      // Manejar el caso en el que la traducción de la categoría no está definida
      console.error(`Translation not defined for category: ${defaultCategory} in language: ${language}`);
    }
  }, [language]);
  
  

  return (
    <>
    {isLoading? <Spinner/> : (
      <div className="container-galleryTwo mt-0">
        <h2>{getTranslation("gallery.category", language)}</h2>
        <div className="category-buttons flex-wrap g-0">
          {translatedCategories.map((category, index) => (
            <Nav.Link
              key={index}
              onClick={() => changeCategory(category)}
              style={{ fontSize: "1.3rem", padding: " 0 0.7rem" }}
            >
              {category}
            </Nav.Link>
          ))}
        </div>
        <div className="media-container">
          {imagesByCategory[activeCategory] && imagesByCategory[activeCategory].map((image, index) => (
            <div
              className="media"
              key={index}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`image ${index + 1}`} />
            </div>
          ))}
        </div>

        <div
          className="popup-media"
          style={{ display: selectedImage ? "block" : "none" }}
        >
          <span onClick={() => setSelectedImage(null)}>&times;</span>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Image"></img>
          ) : null}
        </div>
      </div>
    )}
      
    </>
  );
};

export default Gallery;
