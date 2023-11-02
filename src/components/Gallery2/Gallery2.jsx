import { useState } from "react";
import media from "../../assets/media/media.json"
import  "./gallery2.css"


const Gallery2 = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    return ( 
        <>
            <div className="container-galleryTwo">
                <h1>Galeria</h1>
                <h2>Galeria</h2>
                
                
                <div className="media-container">
                    { 
                        media.images.map((image, index) => (
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
 
export default Gallery2;