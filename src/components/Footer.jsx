import { Container, Row, Col } from "react-bootstrap";
import { getTranslation } from "../services/localizationservice";
const Footer = ({ isLoading, language }) => {
  return isLoading ? null : (
    <footer className="bg-secondary text-light py-4 ">
      <Container>
        <Row>
          <Col md={6}>
            <address>
              <p>{getTranslation("footer.adress", language)}</p>
              <p>
                <a href="mailto:javiernicolasadan@gmail.com">
                  javiernicolasadan@gmail.com
                </a>
              </p>
              <p>{getTranslation("footer.register", language)} VV.MU.6915-1</p>
            </address>
          </Col>
          <Col md={6}>
            <nav>
              <ul className="list-unstyled">
                <li>
                  <a href="/">{getTranslation("footer.home", language)}</a>
                </li>
                <li>
                  <a href="/gallery">
                    {getTranslation("footer.gallery", language)}
                  </a>
                </li>
                <li>
                  <a href="/activities">
                    {getTranslation("footer.activities", language)}
                  </a>
                </li>
                <li>
                  <a href="/booking">
                    {getTranslation("footer.booking", language)}
                  </a>
                </li>
                <li>
                  <a href="/weather">
                    {getTranslation("footer.weather", language)}
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {getTranslation("footer.madeWith", language)}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
