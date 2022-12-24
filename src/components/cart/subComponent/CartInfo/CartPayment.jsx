import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
const DigitalWalletBox = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 6px 12px;
    img {
      width: 100px;
      height: auto;
    }
  }
  .digitalWalletBox__paypad {
  }
  .digitalWalletBox__vnpay {
    margin-left: 1rem;
  }
`;
const CartPayment = ({ setPaymentMethod, paymentMethod }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <FormControl>
        <FormLabel
          sx={{ textAlign: "center", fontSize: 14 }}
          id="cart-payment-type-select"
        >
          <Chip sx={{ "& .MuiChip-label": { fontSize: 14 } }} label="COD" />
        </FormLabel>
        <RadioGroup aria-labelledby="cart-payment-type-select">
          <FormControlLabel
            onChange={() => setPaymentMethod("cod")}
            checked={paymentMethod == "cod" ? "checked" : false}
            label={
              <Typography variant="h5">Thanh toán khi nhận hàng</Typography>
            }
            control={<Radio />}
          />
          <FormControlLabel
            onChange={() => setPaymentMethod("cod1")}
            checked={paymentMethod == "cod1" ? "checked" : false}
            label={
              <Typography variant="h5">
                Nhân viên mang máy cà thẻ khi nhận hàng
              </Typography>
            }
            control={<Radio />}
          />
          <FormControlLabel
            label={
              <Typography variant="h5">Qua thẻ ATM có smartbanking</Typography>
            }
            disabled
            control={<Radio checked={false}/>}
          />
          <FormControl>
            <FormLabel sx={{ textAlign: "center", fontSize: 14 }}>
              <Chip
                sx={{ "& .MuiChip-label": { fontSize: 14 } }}
                label="Ví điện tử"
              />
            </FormLabel>
            <RadioGroup sx={{ marginTop: "8px" }} row>
              <FormControlLabel
                control={
                  <Radio
                    sx={{ padding: 0 }}
                    checkedIcon={
                      <LazyLoadImage
                        style={{
                          width: "18rem",
                          height: "90px",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                        src="https://mona.media/wp-content/uploads/2021/07/paypal-payment.png"
                      />
                    }
                    icon={
                      <LazyLoadImage
                        style={{ width: "16rem", opacity: 0.4, height: "80px" }}
                        src="https://mona.media/wp-content/uploads/2021/07/paypal-payment.png"
                      />
                    }
                  />
                }
                onChange={() => setPaymentMethod("paypal")}
                checked={paymentMethod == "paypal" ? "checked" : false}
              />
              <FormControlLabel
                control={
                  <Radio
                    sx={{ padding: "0" }}
                    checkedIcon={
                      <LazyLoadImage
                        style={{
                          width: "18rem",
                          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        }}
                        src="https://kinsta.com/wp-content/uploads/2017/01/stripe-for-wordpress.png"
                      />
                    }
                    icon={
                      <LazyLoadImage
                        style={{ width: "16rem", opacity: 0.4 }}
                        src="https://kinsta.com/wp-content/uploads/2017/01/stripe-for-wordpress.png"
                      />
                    }
                    disabledI
                  />
                }
                onChange={() => setPaymentMethod("stripe")}
                checked={paymentMethod == "stripe" ? "checked" : false}
              />
            </RadioGroup>
          </FormControl>
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default CartPayment;
