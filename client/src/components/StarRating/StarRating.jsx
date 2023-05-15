import React from "react";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span
          key={i}
          className="star"
          style={{
            fontSize: "30px",
            color: "gold",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3);",
            filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.145));",
          }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className="starRating">{renderStars()}</div>;
};

export default StarRating;
