import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useLocation } from "react-router-dom";

import Introduce from "../components/productdetail/Introduce";
import "../assets/css/productdetail/productdetail.css";
import Information from "../components/productdetail/Information";
import Feedback from "../components/productdetail/Feedback";
import SeeMore from "../components/SeeMore";
import productHandler from "../features/product/function";
import StarRating from "../components/accessories/StarRating";
import "../sass/phone/rating.scss";
import "../sass/productdetail/_product_detail.scss";
const ProductDetail = () => {
  const location = useLocation();

  const productId = location.state.productId;

  console.log(location);

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productHandler.getProductById(productId);
      console.log(res);
      try {
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div className="produt_detail">
      {/* <!-- category --> */}
      <div className="product_category">
        <span className="product_category-title ">
          {product?.category?.categoryName}
        </span>
        <span className="product_category-title">
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className="product_category-title">
          {product?.category?.categoryName} {product?.manufacturer?.name}
        </span>
      </div>

      {/* <!-- title --> */}
      <div className="product_title">
        <h2 className="product_title_name">{product?.name}</h2>
        <div className="product_title_star">
          <div className="star-phone">
            <StarRating rating={product?.rate} />
          </div>
        </div>
        {/* <div className="product_title_star">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div> */}
        <span className="product_title_review flex_center">
          {product?.countRate} đánh giá
        </span>
      </div>
      <div className="line"></div>
      <Introduce product={product} />
      <div className="line"></div>
      <Information product={product} />
      <div className="line"></div>
      <Feedback product={product} />
      <div className="line"></div>
      <SeeMore />
    </div>
  );
};

export default ProductDetail;
