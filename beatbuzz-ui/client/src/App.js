
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
//   CardBody,
// } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import Dashboard from "./Dashbord";
// import Login from "./Login";

// const CLIENT_ID = "a749ae54533d4373a5cd180d822cf1e6";
// const CLIENT_SECRET = "22346e79e4514180b51fcc6abb6adcce";

// const code = new URLSearchParams(window.location.search).get("code");

// function App() {
//   return code ? <Dashboard code={code} /> : <Login />;
// }
// export default App;
// import React, {useEffect, useState} from "react";
// import Axios from "axios";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, InputGroup, FormControl, Button, Row, Card, CardBody } from 'react-bootstrap';
// import { useState, useEffect } from 'react';
// import Dashboard from './Dashbord';
// import Login from './Login';

// const getData=async()=>{
//   const response=await Axios.get("http://localhost:8080/api/hello");
//   setData(response.data);
// }

// useEffect(()=>{
//   getData()

// },[]);
// return(
//   <div>{data}</div>
// )
// }


// import Register from "./Register";
// import React, {useEffect, useState} from "react";
// import Axios from "axios";
// const App = () => {
// const [data, setData]=useState("");
// const getData=async()=>{
//   const response=await Axios.get("http://localhost:8080/api/hello");
//   setData(response.data);
// }
// useEffect(()=>{
//   getData()
// },[]);
// return(
//   <div>{data}</div>
// )
// }

// function App() {

//   return (
//     <Register />
//   )
// }
// export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


// import Login from "./Login";
// import CreatePostForm from "./CreatePostForm";

// const code = new URLSearchParams(window.location.search).get("code");

// // import Login from "./Login";
// import Register from "./Register";
// // import CreatePostForm from "./CreatePostForm";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/post/create" element={<CreatePostForm />} />
        
//         <Route path="/" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// }


// // export default App;

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreatePostForm.css';
import StarRating from './StarRating';
import useAuth from './useAuth'; // Import the useAuth hook
import SpotifyWebApi from "spotify-web-api-node";
import "./Sort.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "a749ae54533d4373a5cd180d822cf1e6",
});

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    starRating: 1,
    albumName: '',
    search: '',
    searchResults: []
  });

  const [errors, setErrors] = useState({});
  const accessToken = useAuth(); // Use the useAuth hook to get the access token

  useEffect(() => {
    if (formData.search.trim() && accessToken) {
      // Search for tracks when the search term changes and accessToken is available
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.searchTracks(formData.search)
        .then((res) => {
          console.log("Search results:", res.body.tracks.items);
          setFormData({ ...formData, searchResults: res.body.tracks.items });
        })
        .catch((error) => {
          console.error("Error searching tracks:", error);
        });
    }
  }, [formData.search, accessToken]); // Include accessToken in the dependency array

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, starRating: rating });
    // Clear star rating error when a rating is selected
    setErrors({ ...errors, starRating: '' });
  };

  const handleSongSelect = (track) => {
    const albumName = `${track.name} - ${track.artists[0].name}`; // Concatenate song name and artist name
    setFormData({ ...formData, albumName });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.content.trim()) {
      errors.content = 'Review is required';
    }
    if (!formData.albumName.trim()) {
      errors.albumName = 'Album Name is required';
    }
    if (formData.starRating < 1 || formData.starRating > 5) {
      errors.starRating = 'Please select a star rating';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Check if star rating is selected
    if (!formData.starRating || formData.starRating < 1 || formData.starRating > 5) {
      setErrors({ ...errors, starRating: 'Please select a star rating' });
      return;
    }
    try {
      await axios.post('http://localhost:8080/post/create', formData);
      alert('Post created successfully');
      setFormData({
        content: '',
        starRating: 1,
        albumName: '',
        search: '',
        searchResults: []
      });
      setErrors({});
    } catch (error) {
      alert('Error creating post');
      console.error(error);
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <div className="search-bar">
        <input className="input-field" type="search" name="search" placeholder="Search Songs/Artists" value={formData.search} onChange={handleChange} />
        <div className="search-results-dropdown" style={{ display: formData.searchResults.length > 0 ? 'block' : 'none' }}>
          {formData.searchResults.map((track) => (
            <div key={track.uri} className="search-result" onClick={() => handleSongSelect(track)}>
              <div>{track.name}</div>
              <div className="artist-name">{track.artists[0].name}</div>
            </div>
          ))}
        </div>
      </div>
      {errors.albumName && <span className="error-message">{errors.albumName}</span>}
      <StarRating rating={formData.starRating} onChange={handleRatingChange} />
      {errors.starRating && <span className="error-message">{errors.starRating}</span>}
      <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
      {errors.content && <span className="error-message">{errors.content}</span>}
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;
