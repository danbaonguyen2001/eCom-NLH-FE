import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/productdetail/_add_cart_modal.scss";
import img from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
import { toVND } from "../../utils/format";

import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectLoginStatus,
} from "../../features/auth/authSlice";
import cartController from "../../features/cart/function";
//feature
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const AddCartModal = ({ closeModal, chooseOption, product }) => {
  // config
  const status = useSelector(selectLoginStatus) || false;
  const dispatch = useDispatch();
  const history = useHistory();
  const productColorList = product?.productOptions[chooseOption]?.productColors;
  // input
  const [body, setBody] = useState({
    productColorId: productColorList?.[0].id,
    quantity: 1,
  });
  // checked
  const availableQuantity = productColorList.find(
    (v) => v.id == body.productColorId
  ).quantity;

  // event handler
  const handleAddToCart = async () => {
    // Have not authenticated
    if (!status) {
      toast.info("Vui lòng đăng nhập để thực hiện thao tác", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      history.push("/login");
      return;
    }
    // Authenticated
    try {
      const res = await cartController.addCart({ ...body });
      const { status } = res;
      status &&
        toast.success("Thêm vào giỏ hàng thành công", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        }) &&
        dispatch(
          addToCart({
            id: body.productColorId,
            quantity: body.quantity,
            price: product?.productOptions[chooseOption]?.marketPrice,
          })
        ) &&
        history.push("/cart");

      if (!status) throw new Error();
    } catch (e) {
      toast.error("Lỗi hệ thống, thử lại sau", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };
  const handlerIncreaseQuantity = () => {
    body.quantity < availableQuantity &&
      setBody({
        ...body,
        quantity: body.quantity + 1,
      });
    !(body.quantity < availableQuantity) &&
      toast.error(`Không đủ số lượng trong kho không đủ. Liên hệ trực tiếp`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
  };
  const handlerDecreaseQuantity = () => {
    body.quantity > 1 &&
      setBody({
        ...body,
        quantity: body.quantity - 1,
      });
    !(body.quantity > 1) &&
      toast.error(`Không thể giảm nữa`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
  };

  return (
    <div className="add_cart_modal">
      <div className="add_cart_modal_content">
        <div className="add_cart_modal_content_detail_pd">
          {/* Intro */}
          <header className="">
            {product?.name} {product?.productOptions[chooseOption]?.optionName}
          </header>
          <header className="add_cart_modal_content_detail_pd_price">
            {toVND(product?.productOptions[chooseOption]?.marketPrice)} &nbsp;
            <span className="product_introduce_price_original">
              <s>{toVND(product?.productOptions[chooseOption]?.price)}</s> -
              {product?.productOptions[chooseOption]?.promotion}%
            </span>
          </header>
        </div>
        <div className="line"></div>
        {/* Color select */}
        <div className="add_cart_modal_content_color_pd">
          <header>Chọn màu</header>
          <div className="add_cart_modal_content_color_pd_list flex">
            {/* List */}
            {product?.productOptions[chooseOption]?.productColors?.map(
              (v, i) => {
                return (
                  <div className="add_cart_modal_content_color_pd_list_item">
                    <img
                      className="add_cart_modal_content_color_pd_list_item_img "
                      src={img}
                      alt=""
                    />
                    <input
                      type="radio"
                      className="mg-y-1"
                      onChange={() =>
                        setBody({
                          ...body,
                          productColorId: v.id,
                        })
                      }
                      name="option"
                      checked={v.id == body.productColorId ? "checked" : false}
                    />
                    <label htmlFor="">{v?.color?.name}</label>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {/* Quantity set */}
        <div className="add_cart_modal_content_qt_pd flex">
          <header>Chọn số lượng</header>
          <div className="add_cart_modal_content_qt_pd_border border">
            <button
              className="add_cart_modal_qt_btn"
              onClick={handlerDecreaseQuantity}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <div className="seperate"></div>
            <span>{body.quantity}</span>
            <div className="seperate"></div>
            <button
              className="add_cart_modal_qt_btn"
              onClick={handlerIncreaseQuantity}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        {/* Stock */}
        <div
          style={{
            lineHeight: "3rem",
          }}
          className="add_cart_modal_content_qt_pd flex"
        >
          <header style={{ whiteSpace: "nowrap" }}>Trong kho còn:</header>
          <div className="add_cart_modal_content_qt_pd_border border">
            {availableQuantity}
          </div>
        </div>
        {/* Add to cart */}
        <div className="line"></div>
        <div className="flex_100_width flex_center">
          <button className="add_cart_modal_btn btn" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
        <button className="close_modal" onClick={() => closeModal(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default AddCartModal;
