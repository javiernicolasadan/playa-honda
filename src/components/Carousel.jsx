import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <>
    <div className="carousel-container">
    <Carousel>
        <Carousel.Item interval={15000}>
          <img
            src="/carouselOneJPG.jpg"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="boats in the sea"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/DSCF2864.JPG"
            className="imgCarousel shadow-1-strong  mb-4 d-block w-100"
            alt="sunset in Mar Menor sea"
            loading="lazy" 
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
          <img
            src="/BarcoSolaz3.jpeg"
            className="imgCarousel shadow-1-strong mb-4 d-block w-100"
            alt="Mar Menor´s shore"
            loading="lazy" 
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      
    </>
  );
};

export default CarouselComponent;
