import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import orderController from "../../features/order/function";
import { useDispatch } from "react-redux";
import "../../sass/cart/cart.scss";
import { getParamsValue, toDate } from "../../utils/format";
import { setCurrentCart } from "../../features/cart/cartSlice";
import {
  BrokenImage as BadIcon,
  FavoriteBorder as LoveIcon,
} from "@material-ui/icons";
import { Stack, Typography, Divider, Button } from "@mui/material";
import OrderState from "./subComponent/OrderInfo/OrderState";
import { reset } from "../../features/order/orderSlice";
const OrderInfo = React.lazy(() =>
  import("./subComponent/OrderInfo/OrderInfo")
);
//LIST COMPONENT
const ListOrderInfo = React.lazy(() =>
  import("./subComponent/OrderInfo/ListOrderInfo")
);

//
const OrderSuccess = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //
  const [orderData, setOrderData] = useState({});
  //
  const orderState = history.location.search.replace(/\?/, "").split("=")[0];
  //
  const orderId =
    getParamsValue(history.location.search, "orderId") ||
    getParamsValue(history.location.search, "error");
  // reset state
  useEffect(() => {
    dispatch(reset());
  }, []);
  useEffect(() => {
    // function
    if (orderState === "orderId") {
      dispatch(setCurrentCart([]));
      orderController
        .getOrderInfo({ orderId })
        .then((res) => {
          const { order, success } = res.data;
          console.log(order);
          if (success) {
            setOrderData(order);
          }
        })
        .catch((e) =>
          toast.error(
            `Đơn hàng này không tồn tại, có thể hệ thống bị trục trặc thử lại sau: ${e.message}`,
            {
              toastId: 3,
              autoClose: 5000,
              closeOnClick: true,
              position: "top-right",
            }
          )
        );
    } else {
      toast.warning(`Đơn hàng gặp trục trặc khi thanh toán, thử lại`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      history.push("/cart");
    }
  }, []);

  // render

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="cart_order_success border"
    >
      {/* TITLE */}
      <div className="order_success_header flex  flex_center flex_100_width">
        <i class="fa-solid fa-clipboard-check mg_r_5"></i>
        <header className="order_success_heading">Đặt hàng thành công</header>
      </div>
      <div className="line"></div>
      <div className="order_success_content">
        <div className="order_success_detail">
          {/* THANKS */}
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold" }}
            variant="h5"
          >
            Cảm ơn khách hàng đã cho NLH ecom cơ hội được phục vụ
          </Typography>
          {/* USER INFO */}
          <OrderInfo orderData={orderData} />
          {/* PAYMENT */}
          {!orderData?.isPaid ? (
            // PAYMENT - IS NOT
            <div className="detail_box_payment">
              Đơn hàng chưa được thanh toán
            </div>
          ) : (
            // PAYMENT - DONE
            <>
              <div className="detail_box_payment">
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Đơn hàng đã được thanh toán bằng: {orderData?.paymentMethod}
                </Typography>
              </div>
              <div
                style={{ marginBottom: "1.5rem" }}
                className="detail_box_total_price"
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  display="flex"
                  className="fw_header"
                >
                  Mã thanh toán: {orderData?.paymentResult?.id}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  display="flex"
                  className="fw_header"
                >
                  Tài khoản thanh toán:{" "}
                  {orderData?.paymentResult?.email_address}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  display="flex"
                  className="fw_header"
                >
                  Thanh toán lúc:{" "}
                  {toDate(orderData?.paymentResult?.update_time)}
                </Typography>
              </div>
            </>
          )}
        </div>

        {/* ORDER STATUS */}
        <OrderState orderData={orderData} setOrderData={setOrderData} />

        {/* RATE FOR SERVICE */}
        <Divider
          sx={{ fontSize: "12px", marginTop: "16px", fontStyle: "italic" }}
        >
          Đánh giá dịch vụ
        </Divider>
        <Stack
          marginTop={1}
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">
            Bạn có hài lòng về trải nghiệm mua hàng không
          </Typography>
          <Button
            sx={{ textAlign: "center", fontSize: "12px", minWidth: "10em" }}
            startIcon={<LoveIcon />}
            variant="contained"
            color="success"
          >
            Hài lòng
          </Button>
          <Button
            sx={{ textAlign: "center", fontSize: "12px", minWidth: "14em" }}
            startIcon={<BadIcon />}
            variant="outlined"
            color="error"
          >
            Không hài lòng
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default OrderSuccess;
