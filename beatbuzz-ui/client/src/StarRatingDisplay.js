import React from 'react';
import './StarRatingCreate.css'; // Import CSS file for styling stars

const StarRating = ({ rating }) => {
  const filledStars = [...Array(rating)].map((_, index) => (
    <span key={index} className="filled">&#9733;</span>
  ));
  const emptyStars = [...Array(5 - rating)].map((_, index) => (
    <span key={index}>&#9733;</span>
  ));

  return (
    <div className="star-rating">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
