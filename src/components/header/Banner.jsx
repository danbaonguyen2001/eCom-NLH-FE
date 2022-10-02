import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/layout/banner.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Banner = () => {
    const [bg,setBG] = useState(false)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        afterChange:(i)=>{

            setBG(i)
        }
      };
  return (
    <div className={`bannerWrapper bg${bg}`}>
        {/* Banner Slider */}
        <Slider {...settings} className={`wide bannerSlider`}>
            {/* Banner Slider  - Nav */}
            {/* <div className="bannerSlider__Nav"> */}
            {/* Banner Slider  - Nav - Prev */}
                {/* <div className="bannerSlider__Nav--prev arrowBox ">
                    <div className="arrow-left"></div>
                </div> */}
                {/* Banner Slider  - Nav - Next */}
                {/* <div className="bannerSlider__Nav--next arrowBox ">
                    <div className="arrow-right"></div>
                </div> */}
            {/* </div> */}

            {/* Banner Slider  - Nav -  Item */}
                {/* Banner Slider  - Nav -  Item - 1 */}
                {/* Item 1 */}
                    <div className="bannerSlider__Item">
                        <div className="bannerSlider__Item--1">
                            <LazyLoadImage src={"https://cdn.tgdd.vn/2022/03/banner/1200-44-1200x44-9.png"}/>
                        </div>
                    </div>
                {/* Banner Slider  - Nav -  Item - 2 */}
                    <div className="bannerSlider__Item">
                        <div className="bannerSlider__Item--2">
                        <LazyLoadImage src={"https://cdn.tgdd.vn/2022/09/banner/1200-44-1200x40-2.png"}/>
                        </div>
                    </div>
                {/* Banner Slider  - Nav -  Item - 3 */}
                <div className="bannerSlider__Item">
                        <div className="bannerSlider__Item--3">
                        <LazyLoadImage src={"https://cdn.tgdd.vn/2022/08/banner/1200-44-1200x44-1.png"}/>
                        </div>
                    </div>
        </Slider>
    </div>
  )
}

export default Banner