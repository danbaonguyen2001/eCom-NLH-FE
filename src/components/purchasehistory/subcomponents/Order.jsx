import React, { useState, useEffect } from "react";
// import img from "../../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
//
import { toVND, toDate } from "../../../utils/format";
import cartController from "../../../features/cart/function";
import productController from "../../../features/product/function";
import { Link } from "react-router-dom";
import orderController from "../../../features/order/function";
import { Stack, Typography,Link as LinkMui } from "@mui/material";
const Order = ({ data }) => {
  const [rootImg, setRootImg] = useState("");
  // get img
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography sx={{flex:3}} variant="h6" className="width_15">{`#${data?._id}`}</Typography>
      <Stack sx={{flex:4}} direction="row" alignItems="center" >
        <img
          className="order_pd_img "
          src={data?.orderItems[0]?.image}
          alt="Img"
        />
        <div  className="order_pd_detail flex_60_width">
          <Typography sx={{whiteSpace:"nowrap"}}  variant="h6">{data?.orderItems[0]?.name || "Khong co du lieu"}</Typography>
          <br />
          <Link to={`order?orderId=${data?.orderId}`}>
            <LinkMui underline="hover" variant="h6">Xem chi tiết</LinkMui>
          </Link>
        </div>
      </Stack>

      <Typography sx={{flex:2}} variant='h6'>{toVND(data?.totalPrice)}</Typography>
      <Typography sx={{flex:2}} variant='h6'>{toDate(data?.createdAt)}</Typography>
      <Typography sx={{flex:1,textAlign:"center"}} variant='h6' style={{ textTransform: "capitalize" }}>
        {data?.status?.statusNow}
      </Typography>
    </Stack>
  );
};

export default Order;
