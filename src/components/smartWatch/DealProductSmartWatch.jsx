import React from 'react'

import { list_product_smartWatch } from './dataSmartWatch'
import ListProductSmartWatch from './ListProductSmartWatch'
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const DealProductSmartWatch = ({listProduct}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    nav: true,
    navText:['<span><i class="fas fa-chevron-left"></i></span>','<span><i class="fas fa-chevron-right"></i></span>']
    
  };
  return (
    <div className='deal-product'>
        <h2>DEAL SỐC <span>GIẢM TỚI 49%</span></h2>
        
        <Slider {...settings}>
        {listProduct?.map(slide => (
                    <Link
                    to={{
                        pathname: `/productdetail/${slide?.name}`,
                        state: { productId: slide?.id },
                      }} key={slide?.id} className='item' >
                        <img src={slide?.image} alt="Slider"/>

                        <div className="detail-product">
                              <p id='nameproduct'>{slide?.name}</p>
                              <p className='price-old'>
                                  <del>{slide?.marketPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span> </del>
                                  <span>-{slide?.promotion}%</span>
                              </p>

                              <p className='price-new'> {slide?.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                              
                              </p>
                            
                        </div>
                    </Link>
                    
                ))}
          </Slider>
    </div>
  )
}

export default DealProductSmartWatch 
