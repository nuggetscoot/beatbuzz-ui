// StarRating.js

import React, { useState } from 'react';
import './StarRating.css'; // Import CSS file for styling stars

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <span className={ratingValue <= rating ? 'filled' : ''}>&#9733;</span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

