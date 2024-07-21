import { getTranslation } from "../services/localizationservice";

const Booking = ({language, onLanguageChange}) => {

  return (
    <>
      <div
        style={{ marginTop: "3rem" }}
        className="d-flex justify-content-center align-items-center contact"
      >
        <h3 style={{ lineHeight: "2", margin: "5rem 2rem" }}>
          {getTranslation("booking.intro", language)} <br />
          javiernicolasadan@gmail.com
        </h3>
      </div>
    </>
  );
};

export default Booking;
