import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cardData from "./cardData";
import { Container, Spinner } from "react-bootstrap";
import { useEffect } from "react";

const buttonStyle = {
  fontFamily: "'Hedvig Letters Serif', serif",
};
const titleStyle = {
  fontFamily: "'Hedvig Letters Serif', serif",
  fontWeight: "bold"
}

//using handleLoadingChange to show spinner 2seg untill pic are showed
const Activities = ({ isLoading, handleLoadingChange }) => {
  useEffect(()=>{
    handleLoadingChange(true)
   },[])

  setTimeout(() => {
    handleLoadingChange(false);
  }, 2000);

  return (
    <>
    {isLoading? <Spinner/> : (
      <Container style={{ paddingBottom: "8rem"}}>
        <Row  className="g-5 justify-content-center">
          {cardData.map((card, idx) => (
            <Col key={idx} xs={1} sm={1} lg={2} style={{ width: "35rem", height: "32rem", padding:"0" }}>
              <Card className="border border-5 rounded-3 " >
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title style={titleStyle}>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button  style={buttonStyle} href={card.path} variant="secondary">
                    <a
                      href={card.path}
                      style={{ color: "white", textDecoration: "none" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.button}
                    </a>
                  </Button>
                  //just in case the card have more than one button
                  {card.button2 ? (
                    <Button style={buttonStyle} href={card.path2} variant="secondary">
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
                    <Button style={buttonStyle} href={card.path3} variant="secondary">
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
    )}
      
    </>
  );
};

export default Activities;
