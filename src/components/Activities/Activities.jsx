import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cardData from './cardData';

const Activities = () => {
  console.log(cardData)
    return ( 
        <>
      <Row xs={1} md={2} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
        <Card border="secondary" >
          <Card.Img variant='top' src={card.imageSrc}/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button  href={card.path} variant="secondary"><a href={card.path} style={{color: "white", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                    {card.button}
                  </a></Button>
          </Card.Body>
        </Card>
    </Col>
      ))}
    </Row>
    
  </>
)
}
 
export default Activities;