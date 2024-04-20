
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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Login from "./Login";
import CreatePostForm from "./CreatePostForm";

const code = new URLSearchParams(window.location.search).get("code");

// import Login from "./Login";
import Register from "./Register";
// import CreatePostForm from "./CreatePostForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/post/create" element={<CreatePostForm />} />
        
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}


// export default App;

export default App;

