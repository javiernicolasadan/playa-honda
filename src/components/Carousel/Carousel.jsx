import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2805.JPG"
            className="imgCarousel shadow-1-strong rounded mb-4"
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2864.JPG"
            className="imgCarousel shadow-1-strong rounded mb-4 "
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2940.JPG"
            className="imgCarousel shadow-1-strong rounded mb-4 "
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="logo-container">
      
        <img src="/logo-costa-calida-color.png" alt="logo"/>
      </div>
    </>
  );
};

export default CarouselComponent;
