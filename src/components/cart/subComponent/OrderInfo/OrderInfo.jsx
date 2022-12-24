import React from "react";
import {
  Divider,
  List,
  Stack,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import {toVND} from "../../../../utils/format"
const ListOrderInfo = React.lazy(() => import("./ListOrderInfo"));
const UserInfo = ({ orderData }) => {
  return (
    <List>
      {/* ID */}

      <Divider
        sx={{ fontSize: "12px", marginTop: "12px", fontStyle: "italic" }}
      >
        Thông tin khách hàng
      </Divider>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* NAME */}
        <ListOrderInfo
          divider
          primary="Người nhận:"
          secondary={`${orderData?.user?.name}`}
        />

        {/* PHONE */}
        <ListOrderInfo
          divider
          primary="Số điện thoại:"
          secondary={
            orderData?.user?.phone || "Chưa có số điện thoại, kiểm tra mail"
          }
        />

        <ListItemAvatar>
          <Avatar
            alt="Ảnh đại diện"
            src={`${orderData?.user?.avatar?.url}`}
          />
        </ListItemAvatar>
      </Stack>

      <ListOrderInfo
        primary="Email:"
        secondary={orderData?.user?.email || "Chưa có số mail, kiểm tra mail"}
      />
      <ListOrderInfo
        primary="Giao đến:"
        secondary={orderData?.shippingAddress?.address}
      />
      <Divider
        sx={{ fontSize: "12px", marginTop: "12px", fontStyle: "italic" }}
      >
        Thông tin đơn hàng
      </Divider>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ListOrderInfo primary="Đơn hàng:" secondary={`#${orderData?._id}`} />
        <ListOrderInfo
          primary="Tổng tiền:"
          secondary={toVND(orderData?.totalPrice)}
        />
      </Stack>
    </List>
  );
};

export default UserInfo;
