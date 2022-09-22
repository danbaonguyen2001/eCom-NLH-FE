import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import "../../sass/accessories/accessories.scss"




function SliderBanner({sliders,banners})
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return(
 
        <div className="slider-banner">
            <div className="slider">
            <Slider {...settings}>
            {sliders.map(slide => (
                <div key={slide.id}>
                <img src={slide.url} />
                </div>
            ))}
            </Slider>
            </div>

            <div className="banner">
                {banners.map(banner => (
                    <div key={banner.id}>
                        <img src={banner.url} alt={banner.title} />
                    </div>
                ))}
            </div>
        </div>      
    )
}

export default SliderBanner