import React, { useState } from "react";
import orderController from "../../../features/order/function";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { AddShoppingCart as Cart } from "@material-ui/icons";
import { ErrorResponse } from "../../../utils/ErrorResponse";
import { useDispatch } from "react-redux";
import { reset } from "../../../features/order/orderSlice";
const CartPrice = React.lazy(() => import("./CartInfo/CartPrice"));
const CartPayment = React.lazy(() => import("./CartInfo/CartPayment"));

// component

//
const OrderConfirm = ({ cartInfo, orderInfo, disableOrder }) => {
  const dispatch = useDispatch();
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
        .handlerMakeOrder({
          ...orderInput,
          voucher: "63787570e3a504513ef1a042",
        })
        .then((res) => {
          if (res.isSuccess) {
            const { order } = res?.data;

            if (paymentMethod === "cod" || paymentMethod === "cod1") {
              history.push(`/redirect/order?orderId=${order?._id}`);
            } else {
              history.push(`/order/pay/${order?._id}`);
            }
          } else {
            throw new ErrorResponse("Không thể tạo đơn hàng, thử lại", 500);
          }
        })
        .catch((e) => {
          toast.error(e.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
          dispatch(reset());
        });
    }
  };
  return (
    <div style={{ marginTop: "16px" }} className="">
      <Divider />
      {/* Payment method */}
      <Typography sx={{ marginTop: "16px", fontWeight: "bold" }} variant="h5">
        Chọn hình thức thanh toán
      </Typography>
      <CartPayment
        setPaymentMethod={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
      {/* Total */}
      <CartPrice cartInfo={cartInfo} />

      {/* Button */}
      <Stack justifyContent="center" alignItems="center">
        <Button
          startIcon={<Cart />}
          variant="outlined"
          className="has_cart_total_price_btn btn"
          onClick={handleOrderButtonClick}
          disabled={disableOrder}
        >
          Đặt hàng
        </Button>
      </Stack>
    </div>
  );
};

export default OrderConfirm;
