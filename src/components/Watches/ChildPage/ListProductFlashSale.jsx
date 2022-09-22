import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ListProductFlashSale  ({list_product_flash_sale}) 
{
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
    <div className='ListProductFlashSale'>
       <div className="list-item">
        <Slider {...settings}>
                    {list_product_flash_sale.map(slide => (
                        <div className='item-flash-sale' key={slide.id}>
                            <img src={slide.url} alt="Slider"/>

                            <div className="detail-product">
                                
                                <p id='nameproduct'>{slide.nameProduct}</p>
                                <p className='price-old'>
                                    <del>{slide.priceold} </del>
                                    <span>{slide.discount} </span>
                                </p>

                                <p className='price-new'> {slide.pricenew}</p>
                                
                            </div>
                        </div>
                        
                    ))}
            </Slider>
       </div>

       
    </div>
  )
}

export default ListProductFlashSale
