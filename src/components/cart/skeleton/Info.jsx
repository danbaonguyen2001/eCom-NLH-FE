import { Divider } from "@material-ui/core";
import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

const AddressSkeleton = React.lazy(() =>
  import("../../register/skeleton/AddressSkeleton")
);

const Info = () => {
  return (
    <Stack padding={2}>
      <Stack  direction="row" justifyContent="space-between">
        <Typography variant="h5">Thông tin khách hàng</Typography>

        <Skeleton variant="rectangular" width="95px" height="30px" />
      </Stack>
      <Stack mt={2} alignItems="center" justifyContent="space-between" direction="row">
        <Typography variant="h6">Họ và tên</Typography>
        <Skeleton variant="rectangular" width="80%" height="30px" />
      </Stack>
      <Stack mt={2} alignItems="center" justifyContent="space-between" direction="row">
        <Typography variant="h6">Số điện thoại</Typography>
        <Skeleton variant="rectangular" width="80%" height="30px" />
      </Stack>
      <Typography mt={2} variant="h5">Chọn cách thức giao hàng</Typography>
      {/* Shipping method */}
      <Stack mt={2}  direction="row" justifyContent="space-evenly" spacing={4}>
        <Stack spacing={1} alignItems="center" direction="row">
          <Skeleton variant="circular" width="30px" height="30px" />
          <Typography variant="h6">Giao hàng tận nơi</Typography>
        </Stack>
        <Stack spacing={1} alignItems="center" direction="row">
          <Skeleton variant="circular" width="30px" height="30px" />
          <Typography variant="h6">Nhận tại cửa hàng</Typography>
        </Stack>
      </Stack>
      {/* Address select */}
      <AddressSkeleton />
      {/* Note */}
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Skeleton variant="rectangular" width="80%" height="30px" />
        <Skeleton variant="rectangular" width="80%" height="30px" />
      </Stack>
      {/* Select another receive method */}
      <Stack>
        <Stack alignItems="center" mt={1} mb={1} direction="row" spacing={1}>
          <Skeleton variant="rectangular" width="16px" height="16px" />
          <Typography variant="h6">Gọi người khác nhận hàng nếu có</Typography>
        </Stack>
        <Stack alignItems="center" mt={1} mb={1} direction="row" spacing={1}>
          <Skeleton variant="rectangular" width="16px" height="16px" />
          <Typography variant="h6">
            Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm
          </Typography>
        </Stack>
        <Stack alignItems="center" mt={1} mb={1} direction="row" spacing={1}>
          <Skeleton variant="rectangular" width="16px" height="16px" />
          <Typography variant="h6">Xuất hoá đơn công ty</Typography>
        </Stack>
      </Stack>
      {/* Voucher */}
      <Divider />
      <Stack mt={2} mb={2} direction="row" spacing={3} justifyContent="space-evenly">
        <Skeleton variant="rectangular" width="70%" height="30px" />
        <Skeleton variant="rectangular" width="10%" height="30px" />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default Info;
