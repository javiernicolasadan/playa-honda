import CarouselComponent from "./Carousel";
import Grid from "./Grid";
import Parallax from "./Parallax/Parallax";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { getTranslation } from "../services/localizationservice";

const Home = ({
  isLoading,
  handleLoadingChange,
  language,
  onLanguageChange,
}) => {
  useEffect(() => {
    handleLoadingChange(true);
  }, []);

  setTimeout(() => {
    handleLoadingChange(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CarouselComponent />
          <div className="logo-container py-3">
            <img src="/logo-costa-calida-color.png" alt="logo" />
          </div>
          <div className="text-container-big px-5 py-2">
            <h5 className="text-center">
              {getTranslation("home.textOne", language)}
              <br />
              <br />
              {getTranslation("home.textTwo", language)}
              <br />
              <br />
              {getTranslation("home.textThree", language)}
              <br />
              <br />
              {getTranslation("home.textFour", language)}
              <br />
              <br />
              {getTranslation("home.textFive", language)}
              <br />
              <br />
              {getTranslation("home.textSix", language)}
              <br />
              <br />
              {getTranslation("home.textSeven", language)}
            </h5>
          </div>
          <div className="text-container-small px-5 py-2">
            <h6 className="text-center">
              {getTranslation("home.textEight", language)}
              <br />
              <br />
              {getTranslation("home.textNine", language)}
              <br />
              <br />
              {getTranslation("home.textTen", language)}
              <br />
              <br />
              {getTranslation("home.textEleven", language)}
            </h6>
          </div>
          
          <Parallax language={language} onLanguageChange={onLanguageChange} />
          <Grid language={language} onLanguageChange={onLanguageChange} />
        </>
      )}
    </>
  );
};

export default Home;
