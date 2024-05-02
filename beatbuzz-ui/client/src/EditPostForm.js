import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StarRatingCreate';
import StarRatingEdit from './StarRatingEdit';

const EditPostForm = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [editedPost, setEditedPost] = useState({});

  // fetches post by post id
  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setEditedPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setEditedPost({ ...editedPost, starRating: rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/posts/${postId}`, editedPost);
      window.alert("Post edited successfully");
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-post-form">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="albumName"></label>
          <input
            type="text"
            id="albumName"
            name="albumName"
            value={editedPost.albumName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="starRating"></label>
          <StarRatingEdit initialValue={editedPost.starRating || 0} onChange={handleRatingChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content"></label>
          <textarea
            id="content"
            name="content"
            value={editedPost.content || ''}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
