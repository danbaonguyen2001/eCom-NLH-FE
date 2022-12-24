import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/layout/header.css";

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
