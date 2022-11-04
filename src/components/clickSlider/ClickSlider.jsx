import React, { useState } from "react";
import "../../sass/clickslider/Click_Slider.scss";
import BtnSlider from "./BtnSlider";
import dataSlider from "./mockData";

const ClickSlider = ({ imgArr }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const lenghtArr = imgArr.length;

  const nextSlide = () => {
    if (slideIndex !== imgArr.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgArr.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgArr.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider l-12 m-12 c-12">
      {imgArr.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={imgArr[index]} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from(imgArr, (item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClickSlider;
