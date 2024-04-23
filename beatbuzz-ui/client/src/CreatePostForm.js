import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import './CreatePostForm.css';

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    content: '',
    starRating: 1,
    albumName: '',
    userId: 1 // Assuming userId is hardcoded for testing
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, starRating: rating });
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
    try {
      const response = await axios.post('http://localhost:8080/api/posts', formData);
      console.log('Post created successfully:', response.data);
      setSuccessMessage('Post created successfully');
      setFormData({
        content: '',
        starRating: 0,
        albumName: '',
        userId: 1
      });
      setErrors({});
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="albumName" placeholder="Song Name" value={formData.albumName} onChange={handleChange} />
      {errors.albumName && <span className="error-message">{errors.albumName}</span>}
      <StarRating rating={formData.starRating} onChange={handleRatingChange} />
      {errors.starRating && <span className="error-message">{errors.starRating}</span>}
      <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
      {errors.content && <span className="error-message">{errors.content}</span>}
      {successMessage && <span className="success-message">{successMessage}</span>}
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  );
};

export default CreatePostForm;

