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
      <div className="logo-container py-3">
        <img src="/logo-costa-calida-color.png" alt="logo" />
      </div>
      <div className="text-container-big px-5 py-2">
        <h5 className="text-center">Bienvenido a nuestro apartamento en Playa Honda, un paraíso costero en la hermosa región de Murcia. Ubicado en un enclave privilegiado, este lugar te invita a sumergirte en un escenario idílico donde el sol, el mar y la tranquilidad se unen para brindarte una experiencia inolvidable.<br/><br/> 
        Imagina despertar cada mañana con el suave sonido de las olas del Mediterráneo, mientras te deleitas con la vista panorámica que este apartamento ofrece. La serenidad y la paz se entrelazan en cada rincón, invitándote a disfrutar de momentos inolvidables en la costa murciana. <br/><br/>
         La región de Murcia te ofrece una amplia gama de actividades para todos los gustos. Desde relajarte en las playas de aguas cristalinas hasta aventurarte en emocionantes deportes acuáticos como el windsurf o el paddle surf. Los amantes de la naturaleza encontrarán en los alrededores innumerables rutas de senderismo para explorar la belleza natural de la zona.<br/><br/>
          Además, la rica cultura y la deliciosa gastronomía local son imperdibles. Descubre los encantadores pueblos pesqueros cercanos, donde podrás degustar exquisitos platos de mariscos frescos y disfrutar de la hospitalidad de sus habitantes. <br/><br/>
          El apartamento en Playa Honda te ofrece un refugio acogedor y moderno, equipado con todas las comodidades necesarias para garantizar una estancia placentera. Con amplias terrazas que ofrecen vistas impresionantes, podrás relajarte y disfrutar de magníficos atardeceres.<br/><br/>
           ¡Sumérgete en la calidez de la Costa Cálida y descubre un lugar donde la tranquilidad y la diversión se unen de manera perfecta para ofrecerte unas vacaciones inolvidables!<br/><br/>
            ¡Te esperamos para vivir una experiencia única en nuestro apartamento en Playa Honda, Murcia!</h5>
      </div>
      
    </>
  );
};

export default CarouselComponent;
