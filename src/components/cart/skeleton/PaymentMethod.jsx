import {
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Chip,
  Skeleton,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const PaymentMethod = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <FormControl>
        <FormLabel
          sx={{ textAlign: "center", fontSize: 14 }}
          id="cart-payment-type-select"
        >
          <Chip sx={{ "& .MuiChip-label": { fontSize: 14 } }} label="COD" />
        </FormLabel>
        <Stack
          justifyContent="center"
          spacing={2}
          mt={2}
          mb={2}
          direction="column"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" height="20px" width="20px" />
            <Typography variant="h5">Thanh toán khi nhận hàng</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" height="20px" width="20px" />
            <Typography variant="h5">
              Nhân viên mang máy cà thẻ khi nhận hàng
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" height="20px" width="20px" />
            <Typography variant="h5">Qua thẻ ATM có smartbanking</Typography>
          </Stack>
        </Stack>

        <FormControl>
          <FormLabel sx={{ textAlign: "center", fontSize: 14 }}>
            <Chip
              sx={{ "& .MuiChip-label": { fontSize: 14 } }}
              label="Ví điện tử"
            />
          </FormLabel>
          <Stack mt={2} direction="row" justifyContent="space-between" spacing={2}>
            <Skeleton variant="rectangular" width="180px" height="90px" />
            <Skeleton variant="rectangular" width="180px" height="90px" />
          </Stack>
        </FormControl>
      </FormControl>
    </Stack>
  );
};

export default PaymentMethod;
