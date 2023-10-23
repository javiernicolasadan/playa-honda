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
            {card.button2 ? 
            <Button  href={card.path2} variant="secondary"><a href={card.path2} style={{color: "white", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                    {card.button2}
                  </a></Button> : ""
            }      
            {card.button3 ? 
            <Button  href={card.path3} variant="secondary"><a href={card.path3} style={{color: "white", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                    {card.button3}
                  </a></Button> : ""
            }      
          </Card.Body>
        </Card>
    </Col>
      ))}
    </Row>
    
  </>
)
}
 
export default Activities;