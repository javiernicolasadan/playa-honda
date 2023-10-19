import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    return ( 
    <>
        <Carousel>
      <Carousel.Item>
        <img
      src="/DSCF2706.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Mar Menor, paraíso de los deportes de vela</h3>
          <p>En el Mar Menor se pueden practicar todo tipo de deportes de vela como Windsurf, Kitesurf, Vela Latina.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2864.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Conecta con la naturaleza</h3>
          <p>En un marco incomparable, rodeado de belleza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2895.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
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