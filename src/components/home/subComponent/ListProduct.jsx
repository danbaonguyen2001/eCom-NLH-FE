import React, { useEffect, useState } from "react";
import "../../../sass/home/listproduct.scss";
import ProductCard from "./ProductCard";
import productController from "../../../features/product/function";
const ListProduct = ({ data }) => {
  return (
    <div className="lpWrap row">
      {data.map((product, i) => {
        return <ProductCard key={i} data={product} />;
      })}
    </div>
  );
};

export default ListProduct;
