
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Login";
// import CreatePostForm from "./CreatePostForm";
// import Dashboard from "./Dashbord";
// const code = new URLSearchParams(window.location.search).get("code");





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
// >>>>>>> ffceea697825fd60583fc878e6c48c6ad1012130

//   return code ? <Dashboard code={code} /> : <Login />;
// };


export default App;

