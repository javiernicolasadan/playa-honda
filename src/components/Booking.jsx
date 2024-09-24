import { getTranslation } from "../services/localizationservice";
import Button from "react-bootstrap/Button";

const Booking = ({ language, onLanguageChange }) => {
  return (
    <>
      <div
        style={{ marginTop: "3rem" }}
        className="d-flex justify-content-center align-items-center contact"
      >
        {/*
          <img src="/calareona.jpg" alt="calareona" className="img-booking" />
      */}
        <h3
          style={{ lineHeight: "2", margin: "2rem 2rem" }}
          className="text-booking"
        >
          {getTranslation("booking.intro", language)} <br />
          {getTranslation("booking.info", language)} <br />
          <a href="https://www.cartagenacosta.com/alquiler/apartamento-playa-honda-apartamento-brisa-y-mar-en-playa-honda-501514.html" target="_blank" rel="noopener noreferrer">
            <Button
              variant="info"
              size="lg"
              
            >
              {getTranslation("booking.redirect", language)} <br />
            </Button>
          </a>
        </h3>
        <iframe
      src="https://www.cartagenacosta.com/alquiler/apartamento-playa-honda-apartamento-brisa-y-mar-en-playa-honda-501514.html"
      width="100%"
      height="800px"
      style={{ border: "none" }}
      title="Booking iframe"
    ></iframe>
      </div>
    </>
  );
};

export default Booking;
