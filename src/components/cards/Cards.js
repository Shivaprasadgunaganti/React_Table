import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../images.jpeg'
function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
     
      <img src={image} height={100} width={100}/>
     
      <Card.Body>
        <Card.Title>Beatuiful image</Card.Title>
        <Card.Text>
       Beautiful image shown in above
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;