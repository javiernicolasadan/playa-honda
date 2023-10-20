import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Activities = () => {
    return ( 
        <>
            

      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
        <Card border="secondary" >
          <Card.Img variant='top' src="DSCF2803.JPG" />
          <Card.Body>
            <Card.Title>Deportes Nauticos</Card.Title>
            <Card.Text>
              Cerca del apartamento puedes encontrar una escuela de deportes nauticos para alquilar tablas de windsurf, patines, barcos de vela, asi como recibir clases.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card border="secondary" >
          <Card.Img variant='top' src="DSCF2892.JPG" />
          <Card.Body>
            <Card.Title>Espacios de ocio.</Card.Title>
            <Card.Text>
              Cerca del apartamento puedes encontrar espacios de ocio tranquilos para relajarse con una bebida.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card border="secondary" >
          <Card.Img variant='top' src="DSCF2968.JPG" />
          <Card.Body>
            <Card.Title>Espacios de ocio.</Card.Title>
            <Card.Text>
              Cerca del apartamento puedes encontrar espacios de ocio tranquilos para relajarse con una bebida.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card border="secondary" >
          <Card.Img variant='top' src="DSCF2965.JPG" />
          <Card.Body>
            <Card.Title>Espacios de ocio.</Card.Title>
            <Card.Text>
              Cerca del apartamento puedes encontrar espacios de ocio tranquilos para relajarse con una bebida.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
    
  </>
)
}
 
export default Activities;