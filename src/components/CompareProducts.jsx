import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/_compare_products.scss";
import Rating from "@mui/material/Rating";
import { toVND } from "../utils/format";
const specifications = [
  {
    name: "Màn hình",
    value: "AMOLED",
  },
  {
    name: "Chip",
    value: "Apple A13",
  },
  {
    name: "Ram",
    value: "4G",
  },
  {
    name: "Dung Lượng",
    value: "64GB",
  },
  {
    name: "Chip",
    value: "Apple A13",
  },
  {
    name: "Camera Sau",
    value: "2 camera 12MP",
  },
  {
    name: "Camera trước",
    value: "12 MP",
  },
  {
    name: "Pin",
    value: "3110 mAH",
  },
  {
    name: "Sạc",
    value: "18 W",
  },
];

const product1 = {
  name: "Iphone 11",
  image:
    "https://res.cloudinary.com/ddxtcxrwg/image/upload/v1666687888/eCom-NLH-assets/products/phones/iphone-12/iphone-12-do-1-1-org_bopger.jpg",
  rating: "4.0",
  numberRate: "100",
  marketPrice: "11790000",
  price: "14990000",
  discount: "21",
  specifications1: specifications,
};

const product2 = {
  name: "Iphone 12",
  image:
    "https://res.cloudinary.com/ddxtcxrwg/image/upload/v1665117883/eCom-NLH-assets/products/phones/iphone-11/iphone-11_x1lrfo.jpg",
  rating: "4.0",
  numberRate: "100",
  marketPrice: "11790000",
  price: "14990000",
  discount: "21",
  specifications2: specifications,
};

const CompareProducts = () => {
  //   const [product1, setProduct1] = useState(product1);
  //   const [product2, setProduct2] = useState(product2);

  return (
    <div className="cps grid wide">
      <h2>
        {" "}
        <Link to={"/"}>
          <i class="fa-solid fa-angle-left"></i>
        </Link>{" "}
        So sánh sản phẩm
      </h2>
      &nbsp;
      <div className="row border cps-main" style={{ padding: "1.2rem" }}>
        {/*  */}
        {/* Tổng quan */}
        <div className="l-12 cps_seperate">
          <h3>Tổng quan</h3>
        </div>
        {product1.name ? (
          <div className="cps-l col l-6">
            &nbsp;
            <div className="cps-img l-12 mg_b_10">
              <img
                src={product1.image}
                alt="product1"
                style={{ width: "50%" }}
              />
            </div>
            <div className="cps-name mg_b_10">
              <h4>{product1.name}</h4>
            </div>
            <div className="cps-price mg_b_10">
              <s>{toVND(product1.price)}</s>
            </div>
            <div className="cps-marketprice mg_b_10">
              {toVND(product1.marketPrice)}
            </div>
            <div className="cps-rating">
              <Rating name="rate" value={product1.rating} readOnly />
              &nbsp;
              <span>{product1.numberRate} đánh giá</span>
              &nbsp;
              <span className="cps-rating-number"></span>
            </div>
            <div className="cps-delete1 l-2">
              <button className="cps-delete1__button">
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="cps-add col l-6">
            <center>
              <Link to={"/"}>
                <button className="cps-add__button">
                  <i class="fa-solid fa-circle-plus"></i>
                  <h4>Thêm sản phẩm khác</h4>
                </button>
              </Link>
            </center>
          </div>
        )}
        {product2.name ? (
          <div className="cps-l col l-6">
            &nbsp;
            <div className="cps-img l-12 mg_b_10">
              <img
                src={product2.image}
                alt="product1"
                style={{ width: "50%" }}
              />
            </div>
            <div className="cps-name mg_b_10">
              <h4>{product2.name}</h4>
            </div>
            <div className="cps-price mg_b_10">
              <s>{toVND(product2.price)}</s>
            </div>
            <div className="cps-marketprice mg_b_10">
              {toVND(product2.marketPrice)}
            </div>
            <div className="cps-rating">
              <Rating name="rate" value={product2.rating} readOnly />
              &nbsp;
              <span>{product2.numberRate} đánh giá</span>
              &nbsp;
              <span className="cps-rating-number"></span>
            </div>
            <div className="cps-delete2 l-2">
              <button className="cps-delete2__button">
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="cps-add col l-6">
            <center>
              <Link to={"/"}>
                <button className="cps-add__button">
                  <i class="fa-solid fa-circle-plus"></i>
                  <h4>Thêm sản phẩm khác</h4>
                </button>
              </Link>
            </center>
          </div>
        )}
        &nbsp;
        {/*  */}
        {/* Thông số kỹ thuật */}
        <div className="l-12 cps_seperate">
          <h3>Thông số kỹ thuật</h3>
        </div>
        {product1 ? (
          <div className="cps-l col l-6">
            <div class="cps_list">
              {product1?.specifications1?.map((v, i) => (
                <div
                  // class={`product_information_detail_item   ${
                  //   i % 2 === 0 ? "infor_1" : "infor_2"
                  // }`}

                  class={"product_information_detail_item "}
                  key={i}
                >
                  <li>
                    <span class="product_information_item_title">{v.name}</span>
                    &nbsp;
                    <span class="product_information_item_content ">
                      {v.value}
                    </span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {product2 ? (
          <div className="cps-r col l-6">
            <div class="cps_list">
              {product2?.specifications2?.map((v, i) => (
                <div
                  // class={`product_information_detail_item  ${
                  //   i % 2 === 0 ? "infor_1" : "infor_2"
                  // }`}
                  class={"product_information_detail_item "}
                  key={i}
                >
                  <li>
                    <span class="product_information_item_title">{v.name}</span>
                    &nbsp;
                    <span class="product_information_item_content ">
                      {v.value}
                    </span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CompareProducts;
