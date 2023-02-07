import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../features/product/productSlice";
import { toVND } from "../utils/format";
import StarRating from "./accessories/StarRating";
import ProductCard from "./ProductCard";

const ListProduct = ({ list, qt }) => {
  const listProduct = list;
  const [quantityShow, setQuantityShow] = useState(5);
  const [totalQuantity, setTotalQuantity] = useState(
    listProduct?.length - quantityShow
  );
  useEffect(() => {
    setQuantityShow(5);
    setTotalQuantity(listProduct?.length - 5);
  }, [listProduct]);

  const handleShowViewMore = (e) => {
    setQuantityShow((prev) => prev + 5);
    setTotalQuantity((prev) => prev - 5);
  };

  return (
    <div>
      <div className="list-product grid wide">
        <div className="row">
          {listProduct?.slice(0, quantityShow)?.map((item) => (

            <ProductCard item={item} />
          ))}
        </div>
      </div>
      <div className="button_xemthem">
        {totalQuantity <= 0 ? (
          ""
        ) : (
          <button onClick={handleShowViewMore}>
            Xem thêm {totalQuantity} sản phẩm &nbsp;
            <i className="fa-solid fa-caret-down"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
