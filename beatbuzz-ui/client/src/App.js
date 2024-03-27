import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, CardBody } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "a749ae54533d4373a5cd180d822cf1e6";
const CLIENT_SECRET ="22346e79e4514180b51fcc6abb6adcce";

function App() { 

useEffect(() => {
  var authParameters = {
    method: 'POST',
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  }

fetch('https://accounts.spotify.com/api/token', authParameters)
.then(result => result.json())
.then(data => console.log(data))
}, [])


  const [ searchInput, setSearchInput] = useState("")
  return (
    <div className="App">
      <Container>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
          placeholder='Search For Artist'
          type='input'
          onKeyDown={event => {
            if (event.key == "Enter") {
              console.log("pressed enter")
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={event => {console.log("clicked button")}}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
        <Card>
          <Card.Img src='#' />
          <CardBody>
            <Card.Title>Album Name Here</Card.Title>
            </CardBody>
        </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
