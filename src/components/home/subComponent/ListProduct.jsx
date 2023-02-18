import React, { useEffect, useState } from "react";
import "../../../sass/home/listproduct.scss";
import ProductCard from "./ProductCard";
import productController from "../../../features/product/function";
const ListProduct = () => {
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    productController
      .getProductList({ size: 20 })
      .then((res) => {
        setResultData(res?.data?.products);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="lpWrap row">
      {resultData?.length > 0 ? (
        resultData?.map((cur, i) => {
          return <ProductCard key={i} data={cur} />;
        })
      ) : (
        <>Đang tải</>
      )}
    </div>
  );
};

export default ListProduct;
