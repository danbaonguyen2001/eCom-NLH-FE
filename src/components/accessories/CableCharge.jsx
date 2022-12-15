import React, { useState, useEffect } from "react";
import banner from "../../assets/images/accessories/cable-charge.png";

import MenuTop from "./MenuTop";
import { menuCableCharge } from "./data";
import ListProduct from "./ListProduct";
import productHandler from "../../features/product/function";
import { Link } from "react-router-dom";

const CableCharge = () => {
  const [listProduct, setListProduct] = useState();
  const [showSub, setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId: 6,
    page: 1,
    size: 10,
  });
  useEffect(() => {
    productHandler.getAllProducts().then((res) => {
      const listProducts = res.data.products;
      //console.log("List of products:");
      setListProduct(res.data.products);
      //setFilter(res.data.products);
      //setTotalQt(res.data.products);
      //console.log(res.data);
      //console.log(listProducts);
    });
  }, [showSub]);
  return (
    <div className="cableCharge list-product-same">
      <div className="banner">
        <img src={banner} alt="" />
      </div>

      <MenuTop menuTop={menuCableCharge} />

      <ListProduct listProduct={listProduct} quantityShow={10} />
      <button className="btnViewMore">
        <Link to="sac-cap">XEM TẤT CẢ CÁC CÁP SẠC</Link>
      </button>
    </div>
  );
};

export default CableCharge;
