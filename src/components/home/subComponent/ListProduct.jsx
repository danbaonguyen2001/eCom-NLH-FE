import React, { useEffect, useState } from "react";
import "../../../sass/home/listproduct.scss";
import ProductCard from "./ProductCard";
import productController from "../../../features/product/function";
const ListProduct = (props) => {
  const { data } = props;
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      return await productController.getProductList({ size: 20 });
    };
    fetchProduct()
      .then((data) => {
        setResultData(data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="lpWrap row">
      {resultData?.length > 0
        ? resultData?.map((cur, i) => {
            return <ProductCard key={i} data={cur}/>;
          })
        : data?.map((cur, i) => {
            return <ProductCard key={i} data={cur} />;
          })}
    </div>
  );
};

export default ListProduct;