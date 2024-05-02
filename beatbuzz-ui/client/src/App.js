import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import Dashboard from './Dashbord';
import Login from './Login';
import EditPostForm from './EditPostForm';
import AllPostsPage from './AllPosts';
import './App.css';
import logo from './logo.jpeg';

const App = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  const userId = 1;

  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };
  
  

  return (
    <Router>
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* ternary operator checks for when toggle is clicked */}
        <button onClick={toggleDarkMode} className={`toggle-button ${isDarkMode ? 'dark-mode-text' : ''}`}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className={`title ${isDarkMode ? 'dark-mode-text' : ''}`}>Beat Buzz</h1>
        {/* changes text to white when dark mode is toggled */}
        <div className="button-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-review" element={<CreatePostForm userId={userId} />} />
            <Route path="/search" element={<Search code={code} />} />
            <Route path="/all-posts" element={<AllPostsPage />} />
            <Route path="/edit-post/:postId" element={<EditPostForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// home page
const Home = () => (
  <div className='home'>
    <button><Link to="/create-review" className="submit-button">Create Review</Link></button>
    <button><Link to="/search" className="submit-button">Search</Link></button>
    <button><Link to="/all-posts" className="submit-button">All Posts</Link></button>
  </div>
);

const Search = ({ code }) => (
  <div>
    {code ? <Dashboard code={code} /> : <Login />}
  </div>
);

export default App;