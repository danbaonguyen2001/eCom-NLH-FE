import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SliderL from "react-slick";
import prevI from "../../../assets/images/home/prevI.png";
import "../../../assets/css/home/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//#region Nav bt
const addClass = (e, className) => {
  e.target.classList.add(className);
};
const rmClass = (e, className) => {
  e.target.classList.remove(className);
};
const PrevArr = (props) => {
  const [prevS, setPrevS] = useState(false);

  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className={`${prevS ? "moveLeft" : ""} prev nav__bt `}
    >
      {/* <LazyLoadImage
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setPrevS(!prevS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setPrevS(!prevS);
        }}
        src={prevI}
      /> */}
      <div
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setPrevS(!prevS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setPrevS(!prevS);
        }}
      />
    </div>
  );
};

const NextArr = (props) => {
  const [nextS, setNextS] = useState(false);

  const { onClick } = props;
  return (
    <div
      className={`${nextS ? "moveRight" : ""} next nav__bt`}
      onClick={onClick}
    >
      {/* <LazyLoadImage
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setNextS(!nextS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setNextS(!nextS);
        }}
        src={prevI}
      /> */}
      <div
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setNextS(!nextS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setNextS(!nextS);
        }}
      ></div>
    </div>
  );
};
//   #endregion
// End nav bt
const Slider = ({ ...props }) => {
  let { settings } = props;
  let { navArr } = { ...props.settings };
  if (navArr) {
    settings = {
      nextArrow: <NextArr />,
      prevArrow: <PrevArr />,
      focusOnSelect: true,
      ...props.settings,
    };
  } else {
    settings = {
      focusOnSelect: true,
      ...props.settings,
    };
  }

  console.log(props.data);
  return (
    <div className="sliderWrapper">
      {/* Item */}
      <div className="sliderList">
        <SliderL {...settings} className="sliderList__wrap">
          {/* Render item */}
          {props.data.map((v, i) => {
            return (
              <div key={i} className="sliderList__item scale-hover">
                <LazyLoadImage src={v.image} />
              </div>
            );
          })}
        </SliderL>
      </div>
    </div>
  );
};

export default Slider;
