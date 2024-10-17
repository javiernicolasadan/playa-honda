import { useState } from "react";
import "./Gallery/gallery.css";
import { getTranslation } from "../services/localizationservice";
import { useMediaQuery } from "@react-hook/media-query";

const Apartament = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const items = [
    {
      title: "apartment.titleLiving",
      image: "/small_Salon_2.jpg",
      textKey: "apartment.descriptionLiving",
      orientation: "landscape",
    },
    {
      title: "apartment.titleTerrace",
      image: "/small_Terraza_1.jpg",
      textKey: "apartment.descriptionTerrace",
      orientation: "portrait",
    },
    {
      title: "apartment.titleKitchen",
      image: "/small_Cocina_1.jpg",
      textKey: "apartment.descriptionKitchen",
      orientation: "landscape",
    },
    {
      title: "apartment.titleBedroomOne",
      image: "/small_Dormitorio_principal_1.jpg",
      textKey: "apartment.descriptionBedroomOne",
      orientation: "portrait",
    },
    {
      title: "apartment.titleBedroomTwo",
      image: "/small_Dormitorio_literas_1.jpg",
      textKey: "apartment.descriptionBedroomTwo",
      orientation: "landscape",
    },
    {
      title: "apartment.titleBathroom",
      image: "/small_Aseo_1.jpg",
      textKey: "apartment.descriptionBathroom",
      orientation: "portrait",
    },
    {
      title: "apartment.titlePromenade",
      image: "/Paseo_2.jpeg",
      textKey: "apartment.descriptionPromenade",
      orientation: "landscape",
    },
  ];

  const galleryImages = [
    "/DSC_6253.jpg",
    "/DSC_6477.jpg",
    "/Jardin_1.jpeg",
    "/DSC_6364-HDR-1.jpg",
    "/Edificio_4.jpeg",
    "/DSC_6526-HDR.jpg",
    "/Paseo_2.jpeg",
    "/DSC_6612.jpg",
    "/DSC_6616.jpg",
    "/DSC_6619.jpg",
  ];

  return (
    <div
      className="container-galleryTwo mt-0 container-fluid grid-container apartment-section"
      style={{ marginTop: "4rem" }}
    >
      {/* horizontal banner pictures */}
      <div
        className="horizontal-gallery media-container"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          marginBottom: "2rem",
        }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              height: "200px", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`gallery image ${index + 1}`}
              style={{
                maxHeight: "100%", 
                maxWidth: "100%", 
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          flex: "0 0 50%",
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "10px",
          textAlign: "left",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <h4 style={{ marginBottom: "1rem" }}>
          {getTranslation("apartment.title", language)}
        </h4>
        <p>{getTranslation("apartment.general1", language)}</p>
        <p>{getTranslation("apartment.general2", language)}</p>
      </div>
      {/* Popup for showing zoomed image */}
      {selectedImage && (
        <div className="popup-media">
          <span onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}

      {/* apartment main section */}
      <div className="row justify-content-evenly" style={{ gap: "2rem" }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`d-flex ${
  index % 2 === 0
    ? "apartment-section"
    : isMobile
    ? "flex-column apartment-section"
    : "flex-row-reverse apartment-section"
}`}

            style={{ alignItems: "center", marginBottom: "2rem", gap: "2rem" }}
          >
            <div
              className="media "
              style={{
                flex: "0 0 45%",
                height: item.orientation === "landscape" ? "400px" : "600px",
                overflow: "hidden",
                borderRadius: item.orientation === "landscape" ? "50px" : "60%",
                display: "flex",
                
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", 
                }}
              />
            </div>
            <div
            className="img-responsive"
              style={{
                flex: "0 0 50%",
                padding: "20px",
                background: "#f0f0f0",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <h4>{getTranslation(item.title, language)}</h4>
              <p>{getTranslation(item.textKey, language)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartament;
