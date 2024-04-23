import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllPosts.css'; // Import CSS file for AllPostsPage styling
import StarRating from './StarRatingDisplay';

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend when the component mounts
    axios.get('http://localhost:8080/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts



  return (
    <div className="all-posts-container">
      <h2 className="all-posts-title">All Posts</h2>
    {posts.map(post => (
        <div key={post.id} className="post">
          <p className="title">{post.albumName}</p>
          <p className="post-details"><StarRating rating={post.starRating} /></p>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPostsPage;



