import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel fade >
        <Carousel.Item >
          <img
            src="/BarcoSolaz3_resultado.webp"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="boats in the sea"
            loading="lazy"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            src="/DSCF2864_resultado.webp"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="sunset in Mar Menor sea"
            loading="lazy"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            src="/carouselOneJPG_resultado.webp"
            className="imgCarousel shadow-1-strong mb-4 d-block w-100"
            alt="Mar Menor´s shore"
            loading="lazy"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
