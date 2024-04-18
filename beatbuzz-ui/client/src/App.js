
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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import CreatePostForm from "./CreatePostForm";
import Dashboard from "./Dashbord";
const code = new URLSearchParams(window.location.search).get("code");

function App() {

  return code ? <Dashboard code={code} /> : <Login />;
};

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/post/create" element={<CreatePostForm />} />
//       </Routes>
//     </Router>
//   );
// }

//  699d9ccb6441801bd333414b7ffd7fb658a145e7
export default App;
