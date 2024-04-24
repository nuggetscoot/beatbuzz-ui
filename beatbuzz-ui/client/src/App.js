// import React, { useState } from 'react';
// import CreatePostForm from './CreatePostForm';
// import Dashboard from './Dashbord';
// import Login from './Login';
// import AllPostsPage from './AllPosts';
// import './App.css'; 
// import logo from './logo.jpeg'; 

// const App = () => {
//   const code = new URLSearchParams(window.location.search).get("code");
//   const userId = 1;

//   const [currentPage, setCurrentPage] = useState('home');

//   const [redirectToHome, setRedirectToHome] = useState(false); // State to control redirection

//   const handleCreatePost = () => {
//     setRedirectToHome(true); // Set redirectToHome to true to trigger redirection
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'create-review':
//         return (
//           <div className="App">
//             <CreatePostForm userId={userId} className="create-post-form" /> {/* Add className for styling */}
//           </div>
//         );
//       case 'search':
//         return code ? <Dashboard code={code} /> : <Login />;
//       case 'all-posts':
//         return <AllPostsPage className="all-posts-page" />; {/* Add className for styling */}
//       default:
//         return (
//           <div className="container">
//             <img src={logo} alt="Logo" className="logo" />
//             <h1 className="title">Beat Buzz</h1>
//             <div className="button-container">
//               <button onClick={() => setCurrentPage('create-review')} className="submit-button">Create Review</button>
//               <button onClick={() => setCurrentPage('search')} className="submit-button">Search</button>
//               <button onClick={() => setCurrentPage('all-posts')} className="submit-button">All Posts</button>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div>
//       {renderPage()}
//     </div>
//   );
// };

// export default App;

// App.js

import React from 'react';
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

  return (
    <Router>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Beat Buzz</h1>
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

const Home = () => (
  <div>
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

