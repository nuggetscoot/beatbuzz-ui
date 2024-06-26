import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import "./Sort.css"
const spotifyApi = new SpotifyWebApi({
  clientId: "a749ae54533d4373a5cd180d822cf1e6",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState()
  const [sortingPreference, setSortingPreference] = useState('popularity'); // Default sorting 

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch('')
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    console.log("Access Token:", accessToken); // Add this line to check the access token

  }, [accessToken]);

  useEffect(() => {
    if (!search) return;
    if (!accessToken) return;

    let cancel = false;

    spotifyApi
      .searchTracks(search)
      .then((res) => {
        if (cancel) return;
        console.log("Search results:", res.body.tracks.items);

                // Sorting the tracks based on the preference
                let sortedTracks = res.body.tracks.items;
                if (sortingPreference === "popularity") {
                  sortedTracks.sort((a, b) => b.popularity - a.popularity);
                } else if (sortingPreference === "release_date") {
                  sortedTracks.sort((a, b) => new Date(b.album.release_date) - new Date(a.album.release_date));
                }
        
        setSearchResults(
          res.body.tracks.items
            .map((track) => {
              // Check if album and images exist
              if (!track.album || !track.album.images) {
                return null; // Skip this track if album or images are missing
              }

              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image;
                  return smallest;
                },
                track.album.images[0]
              );

              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              };
            })
            .filter((track) => track !== null)
        ); // Filter out null values
      })
      .catch((error) => {
        console.error("Error searching tracks:", error);
      });

    return () => {
      cancel = true;
    };
  }, [accessToken, search, sortingPreference]);


  return (

    //this container is the search bar
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}> 
          <div className="search-bar">
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        onChange={(e) => setSearch(e.target.value)}
      />
            <div className="dropdown">
        <label>
          Sort by:
          <select value={sortingPreference} onChange={(e) => setSortingPreference(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="release_date">Recent</option>
          </select>
        </label>
        </div>
      </div>
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </div>
      <div> <Player accessToken={accessToken} trackUri={playingTrack?.uri}/></div>
    </Container>
  );
}


