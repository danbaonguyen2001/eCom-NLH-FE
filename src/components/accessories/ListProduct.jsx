import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import "../../sass/accessories/accessories.scss";
import birdthdayEvent from "../../assets/images/accessories/birdthday-event.png";

const ListProduct = ({ listProduct, quantityShow }) => {
  return (
    <div className="listProduct">
      {listProduct?.slice(0, quantityShow).map((item) => (
        <Link
          to={{
            pathname: `/productdetail/${item.name}`,
            state: { productId: item._id },
          }}
          key={item?.id}
          className="item-product"
        >
          <div className="img">
            <img src={item?.image} alt={item?.name} className="img-product" />
          </div>
          <div className="special-event">
            <img src={birdthdayEvent} />
            <span>SINH NHẬT GIẢM SỐC</span>
          </div>
          <h3 className="title">{item?.name}</h3>
          <p className="text-online">Chỉ bán online</p>

          <div className="priceOld">
            {item ? (
              <div className="">
                <span className="initialPrice">
                  {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  <span className="currency">&#8363;</span>
                </span>
                <span className="discount">-{item?.promotion || 10}%</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="priceDeal">
            {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <span className="currency">&#8363;</span>
          </p>
          <StarRating rating={item?.rating} />
          <span className="rateTotal">{item?.rating || 5}</span>
        </Link>
      ))}
    </div>
  );
};

export default ListProduct;
