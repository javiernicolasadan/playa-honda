import "./parallax.css";

const Parallax = () => {
  return (
    <>
      <div className="parallax">
        <div className="parallax-background"></div>
        <div className="parallax-content">
          <h1>Título</h1>
          <p>Texto descriptivo...</p>
          <p>Más contenido...</p>
        </div>
      </div>
    </>
  );
};

export default Parallax;
