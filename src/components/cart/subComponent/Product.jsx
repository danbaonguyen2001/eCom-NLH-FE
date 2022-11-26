import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toVND } from "../../../utils/format";
import cartController from "../../../features/cart/function";
//   assets
// import img1 from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
// import img2 from "../../assets/images/phone/realme-9-pro-1-1.jpg";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getTotals,
  resetCurrentCart,
} from "../../../features/cart/cartSlice";
const Product = ({ dataProduct, setCart }) => {
  const [quantity, setQuantity] = useState(dataProduct?.item?.quantity || "1");
  const [data, setData] = useState(dataProduct?.item);

  // config
  const dispatch = useDispatch();
  // content
  // const availableQuantity = data?.productColor.quantity;
  // const currentProductId = data?.productColor.id;
  const availableQuantity = data?.quantity;
  const currentProductId = data?.color;

  const handleIncrease = async () => {
    if (availableQuantity >= quantity) {
      setQuantity(quantity + 1);

      cartController
        .updateQuantity({
          itemId: dataProduct._id,
          quantity: quantity + 1,
        })
        .then((res) => {
          toast.success("Tăng số lượng thành công", {
            position: "top-right",
            toastId: 1,
            autoClose: 5000,
            closeOnClick: true,
          });

          dispatch(
            increaseQuantity({
              _id: dataProduct._id,
            })
          );
          dispatch(getTotals());
        })
        .catch((err) => {
          toast.error("Có trục trặc hệ thống rồi, thử lại sau", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
        });
    } else {
      toast.error("Tiếc quá sản phẩm này mình không đủ rồi", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };

  const handleDecrease = () => {
    if (quantity < 2) {
      toast.error("Số lượng không thể giảm nữa.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    } else {
      setQuantity(quantity - 1);
      cartController
        .updateQuantity({
          itemId: dataProduct._id,
          quantity: quantity - 1,
        })
        .then((res) => {
          toast.success("Giảm số lượng thành công", {
            position: "top-right",
            toastId: 1,
            autoClose: 5000,
            closeOnClick: true,
          });
          dispatch(
            decreaseQuantity({
              _id: dataProduct._id,
            })
          );

          dispatch(getTotals());
        })
        .catch((err) => {
          toast.error("Có trục trặc hệ thống rồi, thử lại sau", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
        });

      //   setQuantity(quantity);
    }
  };

  const handleRemoveFromCart = () => {
    const confirm = window.confirm("Bạn có thật sự muốn xóa sản phẩm này?");
    if (confirm) {
      cartController
        .updateQuantity({
          itemId: dataProduct._id,
          quantity: 0,
        })
        .then((res) => {
          toast.info("Xóa sản phẩm thành công", {
            position: "top-right",
            toastId: 1,
            autoClose: 5000,
            closeOnClick: true,
          });
          //Set state
          dispatch(
            removeFromCart({
              _id: dataProduct._id,
            })
          );
          setCart([]);
          dispatch(getTotals());
        })
        .catch((err) => {
          toast.error("Có trục trặc hệ thống rồi, thử lại sau", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
        });
    }
  };

  return (
    <>
      {!quantity ? (
        <></>
      ) : (
        <div className="has_cart_list_product_item flex margin_bottom_10">
          <div className="has_cart_product_item_img">
            <LazyLoadImage
              className="product_item_img"
              src={data?.image}
              alt="Product"
            />
          </div>
          <div className="has_cart_product_item_detail">
            <div className="has_cart_item_name">
              <header className="product_item_name">
                {data?.name || "Đang tải dữ liệu"}
              </header>
            </div>
            <div className="has_cart_item_price_color">
              <span className="product_item_price mg_r_10">
                {toVND(data?.price) || "Đang tải dữ liệu"}
              </span>
              <span className="product_item_color">{`Màu: ${data?.info?.colorName}`}</span>
            </div>
            <div className="has_cart_item_qt_delete flex">
              <div className="product_item_qt mg_r_10">
                <button
                  onClick={handleDecrease}
                  className="has_cart_item_qt_btn"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className="seperate"></div>
                <span className="pd_r_8 pd_l_8 ">{quantity}</span>
                <div className="seperate"></div>
                <button
                  onClick={handleIncrease}
                  className="has_cart_item_qt_btn"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <button
                className="product_item_delete_btn flex_center btn"
                onClick={handleRemoveFromCart}
              >
                <i className="fa-solid fa-delete-left mg_r_5"></i>
                Xoá
              </button>
            </div>
          </div>
          &nbsp;
        </div>
      )}
    </>
  );
};

export default Product;
