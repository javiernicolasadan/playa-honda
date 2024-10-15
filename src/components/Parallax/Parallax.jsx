import { getTranslation } from "../../services/localizationservice";
import "./parallax.css";

const Parallax = ({language}) => {
  return (
    <>
      <section className="parallax">
        <h1>
        {getTranslation("home.parallax", language)}</h1>
      </section>
    </>
  );
};

export default Parallax;
