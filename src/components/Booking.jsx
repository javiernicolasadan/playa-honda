import { getTranslation } from "../services/localizationservice";
import Button from "react-bootstrap/Button";


const Booking = ({ language, onLanguageChange }) => {
  return (
    <>
      <div
        style={{ marginTop: "3rem" }}
        className="d-flex justify-content-center align-items-center contact"
      >
      <img src="/calareona.jpg" alt="calareona" className="img-booking"/>
        <h3 style={{ lineHeight: "2", margin: "5rem 2rem" }} className="text-booking">
          {getTranslation("booking.intro", language)} <br />
          {getTranslation("booking.info", language)} <br />
          <Button variant="info"  size="lg" href="https://www.cartagenacosta.com/alquiler/apartamento-playa-honda-apartamento-brisa-y-mar-en-playa-honda-501514.html">
          {getTranslation("booking.redirect", language)} <br />
          </Button>
        </h3>
      </div>
    </>
  );
};

export default Booking;
