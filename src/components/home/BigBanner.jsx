import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/bigbanner.css";
// import bigBannerImg from "../../assets/images/home/bigBanner.png";

import { hoData } from "./mockData";
const Slider = React.lazy(() => import("./subComponent/Slider"));
// mock data
const dataS = hoData
const BigBanner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataS);
  }, [data]);
  // slider config
  const settings = {
    navArr:true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="bigBannerWrap">
      <div className="bigBanner__img">
        <LazyLoadImage src={"//cdn.tgdd.vn/2022/08/banner/1234787232-1920x450.png"} />
      </div>
      <div className="bigBanner__slider">
        <Slider  data={data} settings={settings} />
      </div>
    </div>
  );
};

export default BigBanner;
