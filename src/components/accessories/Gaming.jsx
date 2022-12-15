import React, { useState, useEffect } from "react";

import banner from "../../assets/images/accessories/gaming.png";
import ListProduct from "./ListProduct";
import MenuTop from "./MenuTop";
import { menuGaming } from "./data";
import productHandler from "../../features/product/function";
import { Link } from "react-router-dom";

const Gaming = () => {
  const [listProduct, setListProduct] = useState();
  const [showSub, setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId: 11,
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
    <div className="gaming list-product-same">
      <div className="banner">
        <img src={banner} alt="" />
      </div>

      <MenuTop menuTop={menuGaming} />

      <ListProduct listProduct={listProduct} quantityShow={10} />

      <button className="btnViewMore">
        <Link to="/chuot-ban-phim">XEM TẤT CẢ CÁC PHỤ KIỆN GAMMING</Link>
      </button>
    </div>
  );
};

export default Gaming;
