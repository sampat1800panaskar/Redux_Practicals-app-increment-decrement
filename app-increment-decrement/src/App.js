import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  return (
    <>
      <Card>
        <Card.Header>Increment/Decrement Counter</Card.Header>
        <Card.Body>
          <Card.Text>Using React and Redux</Card.Text>
          <ButtonGroup aria-label="Basic example">
            <Button variant="danger">-</Button>
            <input readOnly value={0}></input>
            <Button variant="success">+</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      
    </>
  );
}

export default App;
