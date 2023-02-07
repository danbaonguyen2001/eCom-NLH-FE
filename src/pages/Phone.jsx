import React, { useEffect, useState, useRef } from "react";

import "../sass/phone/phone.scss";
import TopSlider from "../components/PCPrint/TopSlider";
import Banner from "../components/phone/Banner";
import productHandler from "../features/product/function";
import Product from "../components/phone/Product";
import ListProduct from "../components/ListProduct";
import Select from "../components/Select";
import SkeletonProducts from "../components/phone/SkeletonProducts";
import PhoneFilter from "../components/phone/PhoneFilter";

const Phone = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const btnRef = useRef();
  const [showSub, setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 1,
    subCategoryId: 0,
    page: 1,
    size: 20,
  });
  const [totalQt, setTotalQt] = useState(0);

  const [filter, setFilter] = useState(0);

  useEffect(() => {
    productHandler
      .getProductsByCategory({ categoryName: "Điện thoại" })
      .then((res) => {
        console.log(res.isLoading);
        setIsLoading(res.isLoading);
        setListProduct(res.data);
        setFilter(res.data);
        setTotalQt(res.data);
      });
  }, [showSub]);

  // lọc theo giá
  const [listProduct, setListProduct] = useState(0);

  return (
    <div className="phone_rootPhone grid wide">
      <div className="phone_paddingtoppx"></div>
      {/* thêm slider   */}
      {/* <TopSlider /> */}
      <Banner />
      {/* Filter */}
      <PhoneFilter
        filter={filter}
        setShowSub={setShowSub}
        listProduct={listProduct}
        setListProduct={setListProduct}
      />
      {/* Product list */}
      {isLoading ? (
        <SkeletonProducts />
      ) : listProduct && listProduct.length > 0 ? (
        <Product list={listProduct} qt={totalQt} />
      ) : (
        <center style={{ marginBottom: "8px" }}>
          {" "}
          <h3>Không có sản phẩm phù hợp</h3>
        </center>
      )}
    </div>
  );
};

export default Phone;
