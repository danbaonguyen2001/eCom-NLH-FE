import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

const OrderInfo = () => {
  return (
    <Stack sx={{ width: "80%",margin:"12px auto" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack  >
          <Typography variant="h5">Phí vận chuyển</Typography>
          <Skeleton variant="text" width="100px" sx={{ fontSize: 18 }} /> 
        </Stack>
        <Stack  >
          <Typography variant="h5">Tổng tiền hàng</Typography>
          <Skeleton variant="text" width="100px" sx={{ fontSize: 18 }} /> 
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack  >
          <Typography variant="h5">Lưu ý</Typography>
          <Skeleton variant="text" width="100px" sx={{ fontSize: 18 }} /> 
        </Stack>
        <Stack  justifySelf="flex-end">
          <Typography variant="h5">Tổng tiền phải trả</Typography>
          <Skeleton variant="text"  sx={{ fontSize: 18 }} /> 
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderInfo;
