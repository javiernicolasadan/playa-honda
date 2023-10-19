import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Activities = () => {
    return ( 
        <>
            


    <Card style={{ width: '18rem', height: "30rem" }}>
      <Card.Img variant="top" src="DSCF2803.JPG" />
      <Card.Body>
        <Card.Title>Deportes Nauticos</Card.Title>
        <Card.Text>
          Cerca del apartamento puedes encontrar una escuela de deportes nauticos para alquilar tablas de windsurf, patines, barcos de vela, asi como recibir clases.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </>
)
}
 
export default Activities;