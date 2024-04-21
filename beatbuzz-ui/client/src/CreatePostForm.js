import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import './CreatePostForm.css';
import SpotifyWebApi from "spotify-web-api-node";
import "./Sort.css"
const spotifyApi = new SpotifyWebApi({
  clientId: "a749ae54533d4373a5cd180d822cf1e6",
});

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    starRating: 1,
    albumName: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, starRating: rating });
    // Clear star rating error when a rating is selected
    setErrors({ ...errors, starRating: '' });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.content.trim()) {
      errors.content = 'Review is required';
    }
    if (!formData.albumName.trim()) {
      errors.albumName = 'Album Name is required';
    }
    if (formData.starRating < 1 || formData.starRating > 5) {
      errors.starRating = 'Please select a star rating';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Check if star rating is selected
    if (!formData.starRating || formData.starRating < 1 || formData.starRating > 5) {
      setErrors({ ...errors, starRating: 'Please select a star rating' });
      return;
    }
    try {
      await axios.post('http://localhost:8080/post/create', formData);
      alert('Post created successfully');
      setFormData({
        content: '',
        starRating: 1,
        albumName: ''
      });
      setErrors({});
    } catch (error) {
      alert('Error creating post');
      console.error(error);
    }
  };
  

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
      {errors.albumName && <span className="error-message">{errors.albumName}</span>}
      <StarRating rating={formData.starRating} onChange={handleRatingChange} />
      {errors.starRating && <span className="error-message">{errors.starRating}</span>}
      <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
      {errors.content && <span className="error-message">{errors.content}</span>}
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;
