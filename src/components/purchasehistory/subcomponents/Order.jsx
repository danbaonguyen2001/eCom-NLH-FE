import React, { useState, useEffect } from "react";
// import img from "../../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
//
import { toVND, toDate } from "../../../utils/format";
import cartController from "../../../features/cart/function";
import productController from "../../../features/product/function";
import { Link } from "react-router-dom";
import orderController from "../../../features/order/function";
import { Stack, Typography, Link as LinkMui } from "@mui/material";
import OrderStateText from "./OrderStateText";
const Order = ({ data }) => {
  // get img
  return (
    <Stack
      sx={{
        opacity:
          data?.status?.statusNow?.toUpperCase() === "CANCEL" ||
          data?.status?.statusNow?.toUpperCase() === "REFUND"
            ? "0.3"
            : "1",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        sx={{ flex: 2, fontSize: "11px" }}
        variant="h6"
        className="width_15"
      >{`#${data?._id.slice(0, 18)}`}</Typography>
      <Stack
        sx={{ flex: 4 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <img
          className="order_pd_img "
          src={data?.orderItems[0]?.image}
          alt="Img"
        />
        <div className="order_pd_detail flex_60_width">
          <Typography
            sx={{ fontSize: "11px", whiteSpace: "nowrap" }}
            variant="h6"
          >
            {data?.orderItems[0]?.name || "Khong co du lieu"}
          </Typography>
          <br />
          <Link to={`order?orderId=${data?._id}`}>
            <LinkMui underline="hover" variant="h6">
              Xem chi tiết
            </LinkMui>
          </Link>
        </div>
      </Stack>

      <Typography
        sx={{ fontSize: "13px", textAlign: "center", flex: 2 }}
        variant="h6"
        color="blue"
      >
        {toVND(data?.totalPrice)}
      </Typography>
      <Typography
        sx={{ fontSize: "11px", textAlign: "center", flex: 3 }}
        variant="h6"
      >
        {toDate(data?.createdAt)}
      </Typography>
      <Typography
        sx={{ fontSize: "11px", flex: 1, textAlign: "center" }}
        variant="h6"
        style={{ textTransform: "capitalize" }}
      >
        <OrderStateText orderState={data?.status?.statusNow} />
      </Typography>
    </Stack>
  );
};

export default Order;
