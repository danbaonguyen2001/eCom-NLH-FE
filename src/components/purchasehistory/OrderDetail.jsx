import React, { useEffect, useState } from "react";

import "../../sass/purchasehistory/_order_detail.scss";

import orderController from "../../features/order/function";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { toDate, toVND } from "../../utils/format";
import ProductItem from "./subcomponents/ProductItem";
import { Breadcrumbs, Stack, Typography, Link as LinkMui } from "@mui/material";

const OrderStateText = React.lazy(() =>
  import("./subcomponents/OrderStateText")
);
const OrderInfo = React.lazy(() =>
  import("../cart/subComponent/OrderInfo/OrderInfo")
);
const OrderState = React.lazy(() =>
  import("../cart/subComponent/OrderInfo/OrderState")
);

//

//

const OrderDetail = ({ orderId }) => {
  const history = useHistory();
  //
  const [orderData, setOrderData] = useState({});
  const [itemsData, setItemsData] = useState([]);
  const date = new Date(orderData?.createTime);
  const paymentMethod = orderData?.orderdetail?.payment?.name;
  // cancel state
  const [disableCancel, setDisableCancel] = useState(false);
  useEffect(() => {
    orderController
      .getOrderInfo({ orderId })
      .then((res) => {
        const { success, order } = res?.data;
        if (success) {
          setOrderData(order);
          setItemsData(order?.orderItems);
        }
      })
      .catch((e) => {
        toast.error(`Không thể tải dữ liệu đơn hàng thử lại`, {
          closeOnClick: true,
          autoClose: 5000,
          position: "top-right",
        });
      });
  }, [orderId]);
  return (
    <div className="order_detail">
      {/* Title */}
      <Stack direction="row" justifyContent="space-between">
        {/* BREAD */}
        <Breadcrumbs>
          <Link to="/purchasehistory/product">
            <LinkMui underline="hover">Danh sách đơn hàng</LinkMui>
          </Link>
          <Typography color="text.primary">
            Đơn hàng #{orderData?._id}
          </Typography>
        </Breadcrumbs>

        <Stack direction="row" spacing={1} sx={{ minWidth: "5em" }}>
          <Typography variant="h6" className="mg_r_10">
            Trạng thái:
          </Typography>
          <Typography textTransform="capitalize" variant="h6">
            <OrderStateText orderState={orderData?.status?.statusNow || "Đang xử lý"} />
          </Typography>
        </Stack>
      </Stack>
      {/* List content */}
      {orderData?.orderItems?.map((item, index) => (
        <ProductItem index={index} item={item} />
      ))}

      {/*Order Info */}
      <OrderInfo orderData={orderData} />
      <OrderState orderData={orderData} setOrderData={setOrderData}/>
    </div>
  );
};

export default OrderDetail;
