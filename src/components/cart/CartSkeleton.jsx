import { Divider, Paper, LinearProgress } from "@mui/material";
import React from "react";
const OrderInfo = React.lazy(() => import("./skeleton/OrderInfo"));
const Info = React.lazy(() => import("./skeleton/Info"));
const Item = React.lazy(() => import("./skeleton/Item"));
const PaymentMethod = React.lazy(() => import("./skeleton/PaymentMethod"));

const CartSkeleton = () => {
  return (
    <Paper sx={{ width: "50%", margin: "2rem auto" }}>
      <LinearProgress />

      {/* Items */}
      <Item />
      <Item />
      <Divider />
      {/* Info */}
      <Info />
      {/* Payment method */}
      <PaymentMethod />
      {/* OrderInfo */}
      <OrderInfo />
    </Paper>
  );
};

export default CartSkeleton;
