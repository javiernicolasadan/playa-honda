import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cardData from "./cardData";
import { Container } from "react-bootstrap";

const Activities = () => {
  /* console.log(cardData) */
  return (
    <>
      <Container style={{ paddingBottom: "8rem"}}>
        <Row  className="g-5 justify-content-center">
          {cardData.map((card, idx) => (
            <Col key={idx} xs={1} sm={1} lg={2} style={{ width: "35rem", height: "32rem" }}>
              <Card border="secondary" >
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button href={card.path} variant="secondary">
                    <a
                      href={card.path}
                      style={{ color: "white", textDecoration: "none" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.button}
                    </a>
                  </Button>
                  {card.button2 ? (
                    <Button href={card.path2} variant="secondary">
                      <a
                        href={card.path2}
                        style={{ color: "white", textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.button2}
                      </a>
                    </Button>
                  ) : (
                    ""
                  )}
                  {card.button3 ? (
                    <Button href={card.path3} variant="secondary">
                      <a
                        href={card.path3}
                        style={{ color: "white", textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.button3}
                      </a>
                    </Button>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Activities;
