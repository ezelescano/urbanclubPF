import React from "react";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return stars;
  };

  return <div className="starRating">{renderStars()}</div>;
};

export default StarRating;