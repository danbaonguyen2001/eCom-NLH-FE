import React from "react";
import { useHistory } from "react-router-dom";

const NoProduct = () => {
  let history = useHistory();
  const routeHome = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div className="no_cart flex ">
      <i className="fa-solid fa-cart-plus no_cart_icon"></i>
      <p className="no_cart_text"> Không có sản phẩm nào trong giỏ hàng</p>
      <button className="btn no_cart_btn" onClick={routeHome}>
        Về trang chủ
      </button>
      <div className="flex_center">
        <span className="no_cart_text"> Khi cần trợ giúp vui lòng gọi</span>
        <span className="no_cart_contact">1800. 1060</span>
        <span className="no_cart_text">hoặc</span>
        <span className="no_cart_contact">028.3622.1060</span>
        <span className="no_cart_text">(7h30-22h)</span>
      </div>
    </div>
  );
};

export default NoProduct;
