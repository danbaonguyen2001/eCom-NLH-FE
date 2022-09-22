import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListProductOld from "../ListProductOld";
import productHandler from "../../../features/product/function";
import "../../../assets/css/tabletlaptop/priceshock.css";
const PriceShock = () => {
  const params = {
    manufacturerId: 0,
    categoryId: 0,
    subCategoryId: 0,
    page: 1,
    size: 20,
  };

  const [totalQt, setTotalQt] = useState(0);

  const [listProduct, setListProduct] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(params);
      try {
        setListProduct(res.data);
        setTotalQt(res?.data?.length);
        //console.log(listProduct);
        // console.log(listProduct.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="the2fillter">
        <div className="thecondeal">
          <img
            src="https://cdn.tgdd.vn/2022/03/banner/desk-1200x70.png"
            alt=""
          />
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <ListProductOld list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="thesanpham">
        <div className="thetitle">
          <div className="titlesanpham">Điện thoại cũ giá sốc</div>
          <div className="xemtatca">Xem tất cả</div>
        </div>
        <div className="listproduct_old">
          {listProduct.length > 0 && (
            <ListProductOld list={listProduct} qt={totalQt} />
          )}
        </div>
      </div>
      <div className="thesanpham">
        <div className="thetitle">
          <div className="titlesanpham">Máy tính bảng cũ giá sốc</div>
          <div className="xemtatca">Xem tất cả</div>
        </div>
        <div className="listproduct_old">
          {listProduct.length > 0 && (
            <ListProductOld list={listProduct} qt={totalQt} />
          )}
        </div>
      </div>
      <div className="thesanpham">
        <div className="thetitle">
          <div className="titlesanpham">Đồng hồ thông minh cũ giá sốc</div>
          <div className="xemtatca">Xem tất cả</div>
        </div>
        <div className="listproduct_old">
          {listProduct.length > 0 && (
            <ListProductOld list={listProduct} qt={totalQt} />
          )}
        </div>
      </div>
      <div className="thesanpham">
        <div className="thetitle">
          <div className="titlesanpham">Phụ kiện cũ giá rẻ</div>
          <div className="xemtatca">Xem tất cả</div>
        </div>
        <div className="listproduct_old">
          {listProduct.length > 0 && (
            <ListProductOld list={listProduct} qt={totalQt} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceShock;
