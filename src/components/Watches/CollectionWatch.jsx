import React from 'react'
import Slider from "react-slick";
import "../../assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css"
import "../../sass/Watches/Watches.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from './data';



function CollectionWatch()
{
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      nav: true,
      navText:['<span><i class="fas fa-chevron-left"></i></span>','<span><i class="fas fa-chevron-right"></i></span>']
        
      
    };
  return (
    <div className='collection' >
        <div className="title flex ">
          <h3>Bộ sưu tập</h3>
          <p>  Xem tất cả bộ sưu tập 
                  <i class="fas fa-caret-right"></i>
          </p>
        </div>

        <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div className='item-slide' key={item.id}>
              <img src={item.url}  />
            </div>
          ))}
        </Slider>
        </div>
    </div>
  )
}

export default CollectionWatch
