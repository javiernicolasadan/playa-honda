import { getTranslation } from "../services/localizationservice";

const Grid = ({
  language,
}) => {
  return (
    <>
      <div
        className="container text-center grid-container"
        style={{ marginTop: "4rem" }}
      >
        <div className="row justify-content-evenly grid-row" style={{ gap: "2rem" }}>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-1">
            
              <h4>Playa Honda</h4>
              <img src="/atardecer4.jpg" className="mb-3"/>
            
            <p>
            {getTranslation("grid.textOne", language)}
            </p>
          </div>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-2">
            <h4>Cabo de palos</h4>
            <div>
              <img src="/faro.jpg" className="mb-3"/>
            </div>
            <p>
            {getTranslation("grid.textTwo", language)}
            </p>
          </div>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-3">
            <h4>La Manga del Mar Menor</h4>
            <div>
              <img src="/laManga.jpg" className="mb-3"/>
            </div>
            <p>
            {getTranslation("grid.textThree", language)}
            </p>
          </div>
          <div className="p-3 col-xl-4  col-xl-3  col-md-4  col-sm-6 col-12 grid-item item-4">
            <h4>Calblanque</h4>
            <div>
              <img src="/calblanque.jpg" className="mb-3"/>
            </div>
            <p>
            {getTranslation("grid.textFour", language)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
