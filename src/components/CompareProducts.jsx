import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/product/productSlice";
import productHandler from "../features/product/function";
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

  const [products, setProducts] = useState([]);

  //handle
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  //console.log(productList);
  useEffect(() => {
    const fetchProduct = async () => {
      const compareList = await Promise.all(
        productList?.map(async (product, i) => {
          const res = await productHandler.getProductById({
            productId: productList[i],
          });
          console.log(res.data);
          return res?.data;
        })
      );
      setProducts([...compareList]);
    };
    fetchProduct();
  }, [productList]);

  console.log(products);

  const handleDeleteProduct1 = () => {
    dispatch(removeProduct(products[0]._id));
  };
  const handleDeleteProduct2 = () => {
    dispatch(removeProduct(products[1]._id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="line"></div>
        {products[0] ? (
          <div className="cps-l col l-6">
            &nbsp;
            <div className="cps-img l-12 mg_b_10">
              <img
                src={products[0]?.image}
                alt={products[0]?.name}
                style={{ width: "50%" }}
              />
            </div>
            <div className="cps-name mg_b_10">
              <h4>
                {products[0]?.name}
                &nbsp;
                {products[0]?.productOptions[0]?.productOptionName}
              </h4>
            </div>
            <div className="cps-price mg_b_10">
              <s>{toVND(products[0]?.productOptions[0]?.price * 1.1)}</s>
            </div>
            <div className="cps-marketprice mg_b_10">
              {toVND(products[0]?.productOptions[0]?.price)}
            </div>
            <div className="cps-rating">
              <Rating name="rate" value={products[0]?.rating} readOnly />
              &nbsp;
              <span>{products[0]?.countRate} 6 đánh giá</span>
              &nbsp;
              <span className="cps-rating-number"></span>
            </div>
            <div className="cps-delete1 l-2">
              <button
                className="cps-delete1__button"
                onClick={handleDeleteProduct1}
              >
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
        {products[1] ? (
          <div className="cps-l col l-6">
            &nbsp;
            <div className="cps-img l-12 mg_b_10">
              <img
                src={products[1]?.image}
                alt={products[1]?.name}
                style={{ width: "50%" }}
              />
            </div>
            <div className="cps-name mg_b_10">
              <h4>
                {products[1]?.name}
                &nbsp;
                {products[1]?.productOptions[0]?.productOptionName}
              </h4>
            </div>
            <div className="cps-price mg_b_10">
              <s>{toVND(products[1]?.productOptions[0]?.price * 1.1)}</s>
            </div>
            <div className="cps-marketprice mg_b_10">
              {toVND(products[1]?.productOptions[0]?.price)}
            </div>
            <div className="cps-rating">
              <Rating name="rate" value={products[1]?.rating} readOnly />
              &nbsp;
              <span>{products[1]?.countRate} 6 đánh giá</span>
              &nbsp;
              <span className="cps-rating-number"></span>
            </div>
            <div className="cps-delete2 l-2">
              <button
                className="cps-delete2__button"
                onClick={handleDeleteProduct2}
              >
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
        <div className="line"></div>
        {products[0] ? (
          <div className="cps-l col l-6">
            <div class="cps_list">
              {products[0]?.detailSpecs?.map((v, i) => (
                <div
                  // class={`product_information_detail_item   ${
                  //   i % 2 === 0 ? "infor_1" : "infor_2"
                  // }`}

                  class={"product_information_detail_item "}
                  key={i}
                >
                  <li>
                    <span class="product_information_item_title">
                      {v.name} :
                    </span>
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
        {products[1] ? (
          <div className="cps-l col l-6">
            <div class="cps_list">
              {products[1]?.detailSpecs?.map((v, i) => (
                <div
                  // class={`product_information_detail_item   ${
                  //   i % 2 === 0 ? "infor_1" : "infor_2"
                  // }`}

                  class={"product_information_detail_item "}
                  key={i}
                >
                  <li>
                    <span class="product_information_item_title">
                      {v.name} :
                    </span>
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
