import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevI from "../../assets/images/home/prevI.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/pSlider.css";
const ProductCard = React.lazy(() => import("./ProductCard"));
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
      className={`${prevS ? "moveLeft" : ""} prev nav__bt`}
    >
      <LazyLoadImage
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setPrevS(!prevS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setPrevS(!prevS);
        }}
        src={prevI}
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
      <LazyLoadImage
        onMouseEnter={(e) => {
          addClass(e, "rotate");
          setNextS(!nextS);
        }}
        onMouseLeave={(e) => {
          rmClass(e, "rotate");
          setNextS(!nextS);
        }}
        src={prevI}
      />
    </div>
  );
};
//#endregion
// end nav bt
const Pslider = ({ ...props }) => {
  let { event, data, award } = props;
  event = event?.length > 0 ? event : [...data];

  const settings = {
    ...props.settings,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
    infinite: event?.length > 5,
  };
  return (
    <div className="pSliderWrap">
      <Slider className="ps__slider" {...settings}>
        {event?.map((v, i) => {
          return (
            <div key={i} className="ps__item">
              <ProductCard data={v} award={award} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Pslider;
