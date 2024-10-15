import { getTranslation } from "../services/localizationservice";

const Apartament = ({ language }) => {
  const items = [
    { title: "apartment.titleLiving", image: "/small_Salon_2.jpg", textKey: "apartment.descriptionLiving", orientation: "landscape" },
    { title: "apartment.titleTerrace", image: "/small_Terraza_1.jpg", textKey: "apartment.descriptionTerrace", orientation: "portrait" },
    { title: "apartment.titleKitchen", image: "/small_Cocina_1.jpg", textKey: "apartment.descriptionKitchen", orientation: "landscape" },
    { title: "apartment.titleBedroomOne", image: "/small_Dormitorio_principal_1.jpg", textKey: "apartment.descriptionBedroomOne", orientation: "portrait" },
    { title: "apartment.titleBedroomTwo", image: "/small_Dormitorio_literas_1.jpg", textKey: "apartment.descriptionBedroomTwo", orientation: "landscape" },
    { title: "apartment.titleBathroom", image: "/small_Aseo_1.jpg", textKey: "apartment.descriptionBathroom", orientation: "portrait" },
  ];

  return (
    <div className="container-fluid grid-container apartment-section" style={{ marginTop: "4rem" }}>
      <div className="row justify-content-evenly" style={{ gap: "2rem" }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`d-flex ${index % 2 === 0 ? "apartment-section" : "flex-row-reverse apartment-section" }`}
            style={{ alignItems: "center", marginBottom: "2rem", gap: "2rem" }}
          >
           
            <div
              style={{
                flex: "0 0 45%",
                height: item.orientation === "landscape" ? "300px" : "500px",
                overflow: "hidden",
                borderRadius: item.orientation === "landscape" ? "20px" : "40%",  
              }}
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
