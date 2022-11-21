import React, { useEffect, useState } from "react";
import "../../sass/purchasehistory/_list_order.scss";
import Order from "./subcomponents/Order";
// selector
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import orderController from "../../features/order/function";
import { toast } from "react-toastify";
import { Typography, Stack } from "@mui/material";

const ListOrders = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    let page = 1;
    let size = 5;

    orderController
      .getHistoryOrder({ page, size })
      .then((res) => {
        setOrder([...res?.data]);
      })
      .catch((e) =>
        toast.error(`Tải lịch sử đơn hàng thất bại, thử lại: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
      );
  }, []);
  return (
    <div className="list_orders">
      <div className="list_orders_header">
        <h4 className="mg_b_10">ĐƠN HÀNG MUA GẦN ĐÂY</h4>
      </div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ flex: 3, fontWeight: "bold" }} variant="h6">
          Mã đơn hàng
        </Typography>
        <Typography sx={{ml:3, flex: 4, fontWeight: "bold" }} variant="h6">
          Sản phẩm
        </Typography>
        <Typography sx={{ flex: 2, fontWeight: "bold" }} variant="h6">
          Giá
        </Typography>
        <Typography sx={{ flex: 2, fontWeight: "bold" }} variant="h6">
          Ngày đặt mua
        </Typography>
        <Typography sx={{ flex: 1, fontWeight: "bold" }} variant="h6">
          Trạng thái
        </Typography>
      </Stack>
      <div className="line"></div>
      <div className="list_orders_list">
        {order.map((v, i) => {
          return (
            <div key={i}>
              <Order data={v} />
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOrders;
