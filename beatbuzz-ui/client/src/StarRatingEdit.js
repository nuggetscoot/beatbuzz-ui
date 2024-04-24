import React, { useState } from 'react';
import './StarRatingEdit.css'; // Import the CSS file

const StarRatingEdit = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="star-rating-edit"> {/* Apply the class name */}
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

export default StarRatingEdit;
