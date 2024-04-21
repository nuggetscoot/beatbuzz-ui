
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


// import React, { useState } from 'react';
// import axios from 'axios';
// import StarRating from './StarRating';
// import './CreatePostForm.css';

// const CreatePostForm = () => {
//   const [formData, setFormData] = useState({
//     content: '',
//     starRating: 1,
//     albumName: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRatingChange = (rating) => {
//     setFormData({ ...formData, starRating: rating });
//     // Clear star rating error when a rating is selected
//     setErrors({ ...errors, starRating: '' });
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!formData.content.trim()) {
//       errors.content = 'Review is required';
//     }
//     if (!formData.albumName.trim()) {
//       errors.albumName = 'Album Name is required';
//     }
//     if (formData.starRating < 1 || formData.starRating > 5) {
//       errors.starRating = 'Please select a star rating';
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     // Check if star rating is selected
//     if (!formData.starRating || formData.starRating < 1 || formData.starRating > 5) {
//       setErrors({ ...errors, starRating: 'Please select a star rating' });
//       return;
//     }
//     try {
//       await axios.post('http://localhost:8080/post/create', formData);
//       alert('Post created successfully');
//       setFormData({
//         content: '',
//         starRating: 1,
//         albumName: ''
//       });
//       setErrors({});
//     } catch (error) {
//       alert('Error creating post');
//       console.error(error);
//     }
//   };
  

//   return (
//     <form className="create-post-form" onSubmit={handleSubmit}>
//       <input className="input-field" type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
//       {errors.albumName && <span className="error-message">{errors.albumName}</span>}
//       <StarRating rating={formData.starRating} onChange={handleRatingChange} />
//       {errors.starRating && <span className="error-message">{errors.starRating}</span>}
//       <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
//       {errors.content && <span className="error-message">{errors.content}</span>}
//       <button className="submit-button" type="submit">Submit</button>
//     </form>
//   );
// };

// export default CreatePostForm;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreatePostForm from "./CreatePostForm";
// import AllPostsPage from "./AllPosts";
// import Login from "./Login";
// import Register from "./Register";
// import DeleteAndEditForm from "./DeleteAndEditForm";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="post/create" element={<CreatePostForm />} />
//         <Route path="post/delete-edit" element={<DeleteAndEditForm/>} />
//         <Route path="all" element={<AllPostsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CreatePostForm from './CreatePostForm';
// import Dashboard from './Dashbord';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/create-review" component={CreatePostForm} />
//         <Route path="/search" component={Dashboard} />
//       </Switch>
//     </Router>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Your App</h1>
//       <div>
//         <a href="/create-review">
//           <button>Create Review</button>
//         </a>
//         <a href="/search">
//           <button>Search</button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import Dashboard from './Dashbord';
import './App.css'; 
import logo from './logo.jpeg'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const [redirectToHome, setRedirectToHome] = useState(false); // State to control redirection

  const handleCreatePost = () => {
    setRedirectToHome(true); // Set redirectToHome to true to trigger redirection
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'create-review':
        return <CreatePostForm />;
      case 'search':
        return <Dashboard />;
      default:
        return (
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Beat Buzz</h1>
            <div className="button-container">
              <button onClick={() => setCurrentPage('create-review')}>Create Review</button>
              <button onClick={() => setCurrentPage('search')}>Search</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;

