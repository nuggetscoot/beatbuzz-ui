// // import React, {useEffect, useState} from "react";
// // import Axios from "axios";

// // const App = () => {
// // const [data, setData]=useState("");

// // const getData=async()=>{
// //   const response=await Axios.get("http://localhost:8080/api/hello");
// //   setData(response.data);
// // }

// // useEffect(()=>{
// //   getData()

// // },[]);
// // return(
// //   <div>{data}</div>
// // )
// // }
// // export default App

// // CreatePostForm.js

// // CreatePostForm.js
// // App.js

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import CreatePostForm from './CreatePostForm';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //     <Routes>
// //         <Route exact path="/post/create" component={CreatePostForm} />
// //         {/* Define other routes here */}
// //     </Routes>
// //     </BrowserRouter>

// //   );
// // }

// // export default App;


// CreatePostForm.js

// CreatePostForm.js
// CreatePostForm.js

import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating'; // Import the StarRating component
import './CreatePostForm.css'; // Import CSS file for styling

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    starRating: 1, // Default value
    albumName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, starRating: rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/post/create', formData); // Send formData to backend
      alert('Post created successfully');
      setFormData({
        content: '',
        starRating: 1,
        albumName: ''
      });
    } catch (error) {
      alert('Error creating post');
      console.error(error);
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
      <StarRating onChange={handleRatingChange} />
      <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;
