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
