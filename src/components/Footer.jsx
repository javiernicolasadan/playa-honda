import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4 ">
      <Container>
        <Row>
          <Col md={6}>
            <p>Ave. Julietta Orbaiceta, Playa Honda, Cartagena</p>
            <p>javiernicolasadan@gmail.com</p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled">
              <li>
                <a href="/gallery">Galería</a>
              </li>
              <li>
                <a href="/activities">Actividades</a>
              </li>
              <li>
                <a href="/availability">Disponibilidad</a>
              </li>
              <li>
                <a href="/weather">El Tiempo</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Hecho por JavierN con ❤️</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
