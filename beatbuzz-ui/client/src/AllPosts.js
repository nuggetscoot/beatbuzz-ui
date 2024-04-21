import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend when the component mounts
    axios.get('http://localhost:8080/post/all')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="all-posts">
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <p>Star Rating: {post.starRating}</p>
          <p>Album Name: {post.albumName}</p>
          {/* You can display other post details as needed */}
        </div>
      ))}
    </div>
  );
};

export default AllPostsPage;

