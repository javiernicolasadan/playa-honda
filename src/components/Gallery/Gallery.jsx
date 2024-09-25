import { useEffect, useState } from "react";
//in media.json we are filtering the tag of each picture for "all", "nature", "activities" and "places"
import media from "../../assets/media/media.json";
//particular CSS for the gallery
import "./gallery.css";
import { Nav } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { getTranslation } from "../../services/localizationservice";

const Gallery = ({
  isLoading,
  handleLoadingChange,
  language,
  onLanguageChange,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("De todo");

  const categories = ["all", "apartment", "activities", "nature", "places"];

  const translatedCategories = categories.map((category) =>
    getTranslation(`gallery.categories.${category}`, language)
  );
  
  const imagesByCategory = categories.reduce((result, category) => {
    result[category] = media.categories[category];
    return result;
  }, {});

  useEffect(() => {
    handleLoadingChange(true);
  }, []);

  setTimeout(() => {
    handleLoadingChange(false);
  }, 2500);

  const changeCategory = (categoryKey) => {
    console.log("Category selected:", categoryKey);
    setActiveCategory(categoryKey);
    setSelectedImage(null);
  };

  useEffect(() => {
    setActiveCategory("all"); 
    console.log("Language changed, setting category to 'all'")
  }, [language]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container-galleryTwo mt-0">
          <h2>{getTranslation("gallery.category", language)}</h2>
          <div className="category-buttons flex-wrap g-0">
            {translatedCategories.map((category, index) => (
              <Nav.Link
                key={index}
                onClick={() => changeCategory(categories[index])}
                style={{ fontSize: "1.3rem", padding: " 0 0.7rem" }}
              >
                {translatedCategories[index]}
              </Nav.Link>
            ))}
          </div>
          <div className="media-container">
            {imagesByCategory[activeCategory] &&
              imagesByCategory[activeCategory].map((image, index) => (
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
