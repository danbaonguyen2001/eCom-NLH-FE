import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/eventlist.css";
import { veData } from "./mockData";
import eventController from "../../features/event/function";
import { toast } from "react-toastify";
import {toastObject} from "../../constants/toast"
//
//
// Slider item
const PSlider = React.lazy(() => import("./subComponent/PSlider"));
const ListAllButton = React.lazy(() =>
  import("./subComponent/ListAllButton.js")
);
const EventTimer = React.lazy(() => import("./subComponent/EventTimer"));
const EventList = () => {
  const [resultData, setResultData] = useState([]);
  // Fetch event
  useEffect(() => {
    eventController
      .getEvents()
      .then((res) => {

        setResultData(res?.data?.events);
      })
      .catch((e) => toast.error(`Lấy dữ liệu sự kiện thất bại`,{...toastObject,toastId:99}));
  }, []);


  
  // slider config
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    focusOnSelect: true,
  };

  const body = resultData?.map((event, index) => (
    <div  key={index} style={{backgroundColor:event?.color}} className="lcWrap grid wide">
      {/* Banner */}
      <div className="lcBanner" >
        <LazyLoadImage style={{maxHeight:"95px"}} src={event?.banner?.url} alt={event?.name} />
      </div>
      {/* Timer */}
      <EventTimer data={event}/>

      {/* Slider */}
      <div className="lcSlider">
        <PSlider award={event?.award} settings={settings}  event={event?.products} />
      </div>
      {/* Bt */}
      <div className="lcBt row">
        <ListAllButton className="col" />
      </div>
    </div>
  ));
  return body;
};

export default EventList;
