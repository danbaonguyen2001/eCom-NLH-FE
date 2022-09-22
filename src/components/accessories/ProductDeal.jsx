import React,{useState,useEffect} from 'react'

import bannerDeal from "../../assets/images/accessories/product-deal.png"

import StarRating from './StarRating'
import { listProductDeal } from './data'
import productHandler from "../../features/product/function";
import ListProduct from './ListProduct';import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const ProductDeal = () => {
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
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId: 5,
    page: 1,
    size: 100,
  });
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(showSub);
      try {
        setListProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [showSub]);
  

  return (
    <div className='deal-main'>
        <h2 className='deal-title'>
            <a href="">
                <img src={bannerDeal} alt="" />
            </a>
            <span className='discount'>50%</span>
        </h2>
      
        <div className="listProduct-deal ">
            <ListProduct listProduct={listProduct}
                          quantityShow={5} />
        </div>

    </div>
  )
}

export default ProductDeal
