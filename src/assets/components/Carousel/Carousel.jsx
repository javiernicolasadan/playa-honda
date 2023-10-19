import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

const CarouselComponent = () => {
    return ( 
    <>
        <Carousel>
      <Carousel.Item>
        <img
        
      src="/DSCF2805.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Deportes nauticos.</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2864.JPG"
      className="w-100 shadow-1-strong rounded mb-4 "
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Conecta con la naturaleza</h3>
          <p>En un marco incomparable, rodeado de belleza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2940.JPG"
      className="w-100 shadow-1-strong rounded mb-4 col-lg-8"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Tranquilidad</h3>
          <p>Paseos que relajan el alma</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </> );
}
 
export default CarouselComponent;