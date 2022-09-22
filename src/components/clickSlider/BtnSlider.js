import React from "react";
import "../../sass/clickslider/Click_Slider.scss";
import leftArrow from "../../assets/images/clickslider/arrow-left-solid.svg";
import rightArrow from "../../assets/images/clickslider/arrow-right-solid.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "btn-slide slider_next" : "btn-slide slider_prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
