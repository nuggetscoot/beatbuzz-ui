import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, CardBody } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = "a749ae54533d4373a5cd180d822cf1e6";
const CLIENT_SECRET ="22346e79e4514180b51fcc6abb6adcce";

function App() { 
  const [ searchInput, setSearchInput] = useState("");
  const [accessToken, setAccsessToken] = useState("");
  const [albums, setAlbums] = useState([]);

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
.then(data => setAccsessToken(data.access_token))
}, [])

async function search(){

console.log('search for ' + searchInput)

var searchParameters = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  }
}

var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
.then(response => response.json())
.then(data => { return data.artists.items[0].id})

console.log('artist id is '+ artistID)

var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
.then(response => response.json())
.then(data => {
  console.log(data);
  setAlbums(data.items);
})
}

  return (
    <div className="App">
      <Container>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
          placeholder='Search For Artist'
          type='input'
          onKeyDown={event => {
            if (event.key == "Enter") {
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          {albums.map((album, i) => {
            console.log(album);
            return (
            <Card>
              <Card.Img src={album.images[0].url} />
              <CardBody>
                <Card.Title>{album.name}</Card.Title>
                </CardBody>
            </Card>)
          }
          )}
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
