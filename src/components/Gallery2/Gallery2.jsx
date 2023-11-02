import media from "../../assets/media/media.json"

const Gallery2 = () => {
    console.log(media)
    return ( 
        <>
            <div className="container">
                <h1>Galeria</h1>
                <h1>Galeria</h1>
                
                
                <div className="media-container">
                    { 
                        media.images.map((image, index) => (
                        <div className="media" key={index}>
                            <img src={image} alt={`image ${index + 1}`} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
     );
}
 
export default Gallery2;