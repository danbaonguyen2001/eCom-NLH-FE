import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/layout/header.css";
import { setCurrentCart } from "../features/cart/cartSlice";
import cartHandler from "../features/cart/function";
import { toast } from "react-toastify";
import productHandler from "../features/product/function";
const Banner = React.lazy(() => import("../components/header/Banner.jsx"));
const HeaderContent = React.lazy(() =>
  import("../components/header/HeaderContent.jsx")
);

const Header = () => {
  const [imgArr, setImgArr] = useState([]);
  const [product, setProduct] = useState();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //Test API - Nguyên
  useEffect(() => {
    // //Get All products New Api
    // productHandler.getAllProducts().then((res) => {
    //   // console.log(res.data);
    //   const listProducts = res.data.products;
    //   console.log("List of products:");
    //   console.log(listProducts);
    // });
    // //Get Products by keyword New Api
    // productHandler.getProductList({ size: 10 }).then((res) => {
    //   console.log(res);
    //   const listProducts = res.data.products;
    //   console.log("Filter:");
    //   console.log(listProducts);
    // });
    // productHandler
    //   .getProductById({ productId: "63743fa09878bcdd84b437ab" })
    //   .then((res) => {
    //     console.log(res);
    //     const product = res.data;
    //     console.log("Get product by Id:");
    //     console.log(product);
    //     setProduct(product);
    //   });

    // productHandler.getProductsTop().then((res) => {
    //   console.log(res);
    //   const product = res.data;
    //   console.log("Get Top products:");
    //   console.log(product);
    //   setProduct(product);
    // });

    cartHandler
      .getCurrentCart()
      .then((res) => {
        console.log("Get cart:");

        console.log(res.data.cart);
        dispatch(setCurrentCart(res?.data?.cart));
        

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // let arr = [];
    // product?.productOptions.forEach((productOption) => {
    //   productOption?.colors.forEach((color) => {
    //     color?.images.forEach((img) => {
    //       arr.push(img?.urlImage);
    //     });
    //   });
    // });
    // console.log(product?.productOptions);
    // // console.log(product?.productOptions?.colors);
    // console.log(arr);
  }, [product]);

  return (
    <div className="headerWrapper grid  ">
      <Banner />
      {/* Header */}
      {/* Header - Top */}
      {/* Header - Main */}
      <HeaderContent />
    </div>
  );
};

export default Header;
