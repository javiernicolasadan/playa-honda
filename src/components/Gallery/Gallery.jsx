import "./gallery.css"



const Gallery = () => {
    return ( 
        <>
     

  <div  className="row gallery"  >

    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" style={{ marginTop: "30rem", paddingTop: "30rem" }} >
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
  
  </div>
</>
     );
}
 
export default Gallery;