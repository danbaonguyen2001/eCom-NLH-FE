import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useLocation } from "react-router-dom";

import Introduce from "../components/productdetail/Introduce";
import "../assets/css/productdetail/productdetail.css";
import Information from "../components/productdetail/Information";
import Feedback from "../components/productdetail/Feedback";
import SeeMore from "../components/seemore/SeeMore";
import productHandler from "../features/product/function";
import StarRating from "../components/accessories/StarRating";
import "../sass/phone/rating.scss";
import "../sass/productdetail/_product_detail.scss";
const ProductDetail = () => {
  const location = useLocation();

  const productId = location.state.productId;

  //const fakeProductId = "637349ce6e199507ee1d91b9";

  console.log(location);

  const [product, setProduct] = useState();

  useEffect(() => {
    productHandler.getProductById({ productId: productId }).then((res) => {
      console.log(res);
      const product = res.data;
      // console.log("Get product by Id:");
      // console.log(product);
      setProduct(product);
    });
  }, [productId]);

  // useEffect(() => {
  //   productHandler.getProductById({ productId: productId }).then((res) => {
  //     // console.log(res);
  //     const product = res.data;
  //     // console.log("Get product Test:");
  //     // console.log(product);
  //     // console.log(product?.category);
  //     // console.log(product?.manufacturer);
  //     // console.log(product?.reviews?.lenght);
  //     setProduct(product);
  //   });
  // }, []);

  return (
    <div className="produt_detail grid  wide">
      {/* <!-- category --> */}
      <div className="product_category">
        <span className="product_category-title ">{product?.category}</span>
        <span className="product_category-title">
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <span className="product_category-title">
          {product?.category} {product?.manufacturer}
        </span>
      </div>

      {/* <!-- title --> */}
      <div className="product_title">
        <h2 className="product_title_name">{product?.name}</h2>
        <div className="product_title_star">
          <div className="star-phone">
            <StarRating rating={product?.rating} />
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
          {product?.reviews.lenght || 5} đánh giá
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
