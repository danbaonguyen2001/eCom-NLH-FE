import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const OrderStateText = (props) => {
  const [orderState, setOrderState] = useState("");
  const colors = {
    green: ["CONFIRM", "SHIPPED", "SHIPPING", "PAID", "PENDING"],
    red: ["CANCEL"],
    "#cccccc": ["Đang xử lý", "REFUND"],
  };
  useEffect(() => {
    for (let color in colors) {
      if (colors[color].includes(props?.orderState.toUpperCase())) {
        setOrderState(color);
        break;
      }
    }
  }, [props?.orderState]);

  // Pending, Confirm, Paid, Refund, Cancel,Shipping, Shipped
  return (
    <Typography color={orderState} textTransform="capitalize" variant="h6">
      {props?.orderState}
    </Typography>
  );
};

export default OrderStateText;
