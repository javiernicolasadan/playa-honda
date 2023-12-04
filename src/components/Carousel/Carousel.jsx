import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <>
      <Carousel style={{ width: "100vw" }}>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2805.JPG"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2864.JPG"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2940.JPG"
            className="imgCarousel shadow-1-strong mb-4 d-block w-100"
            alt="Kite Surf"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      
      
    </>
  );
};

export default CarouselComponent;
