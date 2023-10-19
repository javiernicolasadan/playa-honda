import Carousel from 'react-bootstrap/Carousel';



const Gallery = () => {
    return ( 
        <>
       <Carousel>
      <Carousel.Item>
        <img
      src="/DSCF2751.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2751.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      src="/DSCF2751.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
     />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>     
{/* <div className="row ">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="/DSCF2751.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Kite Surf"
    />

    <img
      src="/DSCF2762.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Windsurf"
    />
  </div>

 

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/DSCF2771.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Gaviotas"
    />

    <img
      src="/DSCF2786.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/DSCF2803.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Vela School"
    />

    <img
      src="/DSCF2816.JPG"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boats"
    />
  </div>
</div> */}





        </>
     );
}
 
export default Gallery;