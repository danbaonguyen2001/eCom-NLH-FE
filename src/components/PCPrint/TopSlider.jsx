import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../sass/PCPrint/PCPrint.scss"

//import "../../assets/css/layout.css"








function TopSlider({sliders, banners})
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nav: true,
        navText:['<span><i class="fas fa-chevron-left"></i></span>','<span><i class="fas fa-chevron-right"></i></span>']
        
      };

    return(
 
        <div className="containerPC">
            <div className="slider-banner">
            <div className="slider">
                <Slider {...settings}>
                {sliders.map(slide => (
                    <div key={slide.id}>
                    <img src={slide.url} alt="Slider"/>
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
        </div>

        
        
        
    )
}

export default TopSlider