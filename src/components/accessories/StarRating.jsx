import React, { useRef } from "react";

const StarRating = ({ rating }) => {


    const starsTotal = 5;

    const starPercentage = (rating / starsTotal) * 100;

    const starPercentageRounded = (starPercentage / 10) * 10;

    const starRating = useRef()
    starRating.current = starPercentageRounded

    

  return (
  
    <div className="star-outer">
      <div
        className="star-inner"
        style={{
          width: `${starRating.current}%`,
        }}
      ></div>
    </div>
  )
};

export default StarRating;
