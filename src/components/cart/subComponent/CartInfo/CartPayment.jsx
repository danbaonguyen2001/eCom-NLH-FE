import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
const CartPayment = ({setPaymentMethod, paymentMethod}) => {
  return (
    <div className="order_success_payment_method">
      <header className="order_success_payment_method_heading">
        Chọn hình thức thanh toán
      </header>
      <div className="order_success_payment_method_item">
        <input
          onChange={() => setPaymentMethod("cod")}
          checked={paymentMethod == "cod" ? "checked" : false}
          type="radio"
          name="method_payment"
          className="mg_r_5"
        />
        <i class="fa-solid fa-file-invoice-dollar mg_r_5 color_primary"></i>
        <label>Thanh toán khi nhận hàng</label>
      </div>
      <div className="order_success_payment_method_item">
        <input
          onChange={() => setPaymentMethod("cod1")}
          checked={paymentMethod == "cod1" ? "checked" : false}
          type="radio"
          name="method_payment"
          className="mg_r_5"
        />
        <i class="fa-solid fa-cash-register mg_r_5 color_primary"></i>
        <label>Nhân viên mang máy cà thẻ khi nhận hàng</label>
      </div>
      <div className="order_success_payment_method_item">
        <input type="radio" name="method_payment" className="mg_r_5" disabled />
        <i class="fa-solid fa-credit-card mg_r_5 color_primary"></i>
        <label>Qua thẻ ATM có smartbanking</label>
      </div>
      <div
        className="order_success_payment_method_item"
        style={{ marginTop: "1.5rem" }}
      >
        <i class="fa-solid fa-wallet mg_r_5 color_primary"></i>
        <label>Ví điện tử</label>
      </div>
      <DigitalWalletBox className="digitalWalletBox">
        <div className="digitalWalletBox__paypad">
          <input
            onChange={() => setPaymentMethod("paypal")}
            checked={paymentMethod == "paypal" ? "checked" : false}
            type="radio"
            name="method_payment"
            className="mg_r_5"
          />
          <LazyLoadImage src="https://subiz.com.vn/blog/wp-content/uploads/2014/05/paypal.jpg" />
        </div>
        <div className="digitalWalletBox__vnpay">
          <input
            onChange={() => setPaymentMethod("vnpay")}
            checked={paymentMethod == "vnpay" ? "checked" : false}
            type="radio"
            name="method_payment"
            className="mg_r_5"
          />
          <LazyLoadImage src="data:image/png;base64,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" />
        </div>
      </DigitalWalletBox>
    </div>
  );
};

export default CartPayment;
