import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <Card.Header>Increment/Decrement Counter</Card.Header>
        <Card.Body>
          <Card.Text>Using React and Redux</Card.Text>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={ () => dispatch(decNumber()) } variant="danger">-</Button>
            <input readOnly value={ myState }></input>
            <Button onClick={ () => dispatch(incNumber()) } variant="success">+</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      
    </>
  );
}

export default App;
