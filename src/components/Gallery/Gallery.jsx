import { useState } from "react";
import media from "../../assets/media/media.json"
import  "./gallery.css"


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeCategory, setActiveCategory] = useState("Todas")

    const categories = Object.keys(media.categories);

    const imagesByCategory = media.categories;

    const changeCategory = (category) => {
        setActiveCategory(category);
        setSelectedImage(null);
      };

    return ( 
        <>
            <div className="container-galleryTwo">
                <h2>Selecciona una categoría.</h2>
                <div className="category-buttons flex-wrap">
                    {categories.map((category, index) => (
                        <button
                        key={index}
                        onClick={() => changeCategory(category)}
                        className="btn btn-outline-secondary"
                        
                        >
                        {category}
                        </button>
                ))}
                </div>
                <div className="media-container">
                    { 
                        imagesByCategory[activeCategory].map((image, index) => (
                        <div className="media" key={index} onClick={() => setSelectedImage(image)}>
                            <img src={image} alt={`image ${index + 1}`} />
                        </div>
                    ))
                    }
                </div>

                <div className="popup-media" style={{display: selectedImage? "block" : "none"}}>
                <span onClick={() => setSelectedImage(null)}>&times;</span>
                {
                    selectedImage?
                    <img src={selectedImage} alt="Selected Image"></img> :
                    null
                }

                </div>    

            </div>
        </>
     );
}
 
export default Gallery;