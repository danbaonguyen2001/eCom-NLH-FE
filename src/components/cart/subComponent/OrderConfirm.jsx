import React, { useState } from "react";
import orderController from "../../../features/order/function";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
const CartPrice = React.lazy(() => import("./CartInfo/CartPrice"));
const CartPayment = React.lazy(() => import("./CartInfo/CartPayment"));

// component

//
const OrderConfirm = ({ cartInfo, orderInfo }) => {
  const history = useHistory();
  //
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderInput, setOrderInput] = useState({
    shippingAddress: {},
    paymentMethod: false,
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: "",
    totalPrice: 0,
    voucher: "",
  });
  //
  useEffect(() => {
    setOrderInput({
      shippingAddress: {
        address: orderInfo?.deliveryAddress,
        country: "Việt Nam",
        city: orderInfo?.deliveryAddress?.split(",")[3]?.trim(),
      },
      paymentMethod: paymentMethod !== "cod",
      itemsPrice: cartInfo?.total,
      taxPrice: 0,
      shippingPrice: cartInfo?.serviceFee || 0,
      totalPrice: cartInfo?.total + (cartInfo?.serviceFee || 0),
      voucher: 0,
    });
  }, [cartInfo, orderInfo]);
  const handleOrderButtonClick = () => {
    if (orderInfo.deliveryAddress.trim().length === 0) {
      toast.warning(`Đừng bỏ trống địa chỉ giao hàng nhé`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    } else {
      //   const {
      // shippingAddress,
      // paymentMethod,
      // itemsPrice,
      // taxPrice,
      // shippingPrice,
      // totalPrice,
      // voucher,
      // } = req.body

      orderController
        .handlerMakeOrder(orderInput)
        .then((res) => {
          const { success, order } = res?.data;
          if (success) {
            toast.success(`Đặt hàng thành công. Nhớ kiểm tra mail nhé`, {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
            });
            if (paymentMethod === "cod") {
              history.push(`/redirect/order?orderId=${order?._id}`);
            } else {
              alert("Open paypal");
            }
          }
        })
        .catch((e) =>
          toast.error(`Có gì trục trặc rồi thử lại sau`, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          })
        );
    }
  };
  return (
    <div className="has_cart_total_price flex_center">
      {/* Payment method */}

      <CartPayment
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
      {/* Total */}
      <CartPrice cartInfo={cartInfo} />

      {/* Button */}
      <button
        className="has_cart_total_price_btn btn"
        onClick={handleOrderButtonClick}
      >
        Đặt hàng
      </button>
    </div>
  );
};

export default OrderConfirm;
