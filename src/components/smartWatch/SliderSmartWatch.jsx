import React from 'react'
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ListProductSmartWatch from './ListProductSmartWatch';
import { sliders_smart_watch } from './dataSmartWatch';

const SliderSmartWatch = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
      };

  return (
    <div className='sliders-smart-watch'>
      <Slider {...settings}>
            {sliders_smart_watch.map(slide => (
              <Link to={slide.linkTo}>
                <div key={slide.id}>
                    <img src={slide.url} />
                </div>
              </Link>
            ))}
            </Slider>
    </div>
  )
}

export default SliderSmartWatch 
