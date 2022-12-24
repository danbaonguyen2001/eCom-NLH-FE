import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";
import { toVND } from "../../../../utils/format";
const CartPrice = ({ cartInfo }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
      <ListItem sx={{ flex: 1, mixWidth: "230px" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontSize: 15,
                fontWeight: 700,
              },
            }}
            secondaryTypographyProps={{ sx: { fontSize: 13 } }}
            primary="Phí vận chuyển"
            secondary={toVND(cartInfo?.serviceFee)}
          ></ListItemText>
        </ListItem>
        <ListItem sx={{ flex: 1, mixWidth: "230px" , textAlign: "right"}}>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontSize: 17,
                fontWeight: 700,
              },
            }}
            secondaryTypographyProps={{ sx: { fontSize: 15 } }}
            primary="Tổng tiền hàng"
            secondary={toVND(cartInfo?.total)}
          ></ListItemText>
        </ListItem>
       
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <ListItem sx={{ flex: 1, mixWidth: "230px" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontSize: 14,
                fontWeight: 700,
                color: "#1b5e20",
              },
            }}
            secondaryTypographyProps={{
              sx: {
                fontSize: 13,
              },
            }}
            primary="Lưu ý"
            secondary={
              !cartInfo?.serviceFee
                ? "Khu vực này hiện tại chưa hỗ trợ đặt hàng online, chọn một khu vực khác"
                : `Khu vực này có hỗ trợ ship`
            }
          />
        </ListItem>
        <ListItem sx={{ flex: 1, textAlign: "right", mixWidth: "230px" }}>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontSize: 17,
                fontWeight: 700,
              },
            }}
            secondaryTypographyProps={{
              sx: { fontSize: 19, fontWeight: 700, color: "blue" },
            }}
            primary="Tổng tiền phải trả"
            secondary={toVND(cartInfo?.total + cartInfo?.serviceFee)}
          ></ListItemText>
        </ListItem>
      </Stack>
    </Stack>
  );
};

export default CartPrice;
