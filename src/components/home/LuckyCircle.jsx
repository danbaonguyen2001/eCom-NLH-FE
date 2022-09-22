import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/luckycircle.css";
import lcBanner from "../../assets/images/home/lcBanner.png";
import { veData } from "./mockData";
import eventController from "../../features/event/function";
import { event } from "jquery";
//
//
// Slider item
const PSlider = React.lazy(() => import("./subComponent/PSlider"));
const ListAllButton = React.lazy(() =>
  import("./subComponent/ListAllButton.js")
);
const EventTimer = React.lazy(() => import("./subComponent/EventTimer"));
const dataS = veData;
const LuckyCircle = () => {
  //
  const [resultData, setResultData] = useState([]);
  // Fetch event
  useEffect(() => {
    eventController
      .handlerGetCurrentEvent()
      .then((data) => {
        const result = data.data;
        setResultData(result.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataS);
  }, [data]);

  
  // slider config
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
  };
  // console.log(resultData);
  const body = resultData?.map((event, index) => (
    <div  key={index} style={{backgroundColor:event?.color}} className="lcWrap grid wide">
      {/* Banner */}
      <div className="lcBanner">
        <LazyLoadImage src={event?.banner} alt={event?.name} />
      </div>
      {/* Timer */}
      <EventTimer data={event}/>

      {/* Slider */}
      <div className="lcSlider">
        <PSlider award={event?.award} settings={settings} data={data} event={event?.productList} />
      </div>
      {/* Bt */}
      <div className="lcBt row">
        <ListAllButton className="col" />
      </div>
    </div>
  ));
  return body;
};

export default LuckyCircle;
