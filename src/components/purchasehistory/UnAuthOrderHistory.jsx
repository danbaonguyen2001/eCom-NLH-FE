import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  background: center/ cover no-repeat
    url("https://cdn.tgdd.vn/mwgcart/orderhistory/images/bg.png");
`;
const Content = styled.div`
  max-width: 500px;
  border: 1px solid #ccc;
  padding: 25px 0;
  background-color: #fff;
  margin: 2% auto;
  text-align: center;
  img {
    width: 100%;
  }
  span {
    font-size: 26px;
    display: inline-block;
    margin: 3% auto;
    font-weight: 300;
    line-height: 1.5;
    color: #333;
  }
`;
const Form = styled.div`
  display: flex;
  width: 60%;
  margin: 1rem auto;
  flex-direction: column;
`;
const Input = styled.input`
  background-image: url("https://cdn.tgdd.vn/mwgcart/orderhistory/images/icon-phone-blue.png");
  background-size: 14px 22px;
  border-radius: 100px;
  height: 48px;
  padding: 0 50px;
  background-repeat: no-repeat;
  border: 1px solid #e0e0e0;
  background-position: 25px center;
  font-size: 15px;
  &:focus{
    outline:none;
  border: 2px solid #e0e0e0;

  }
`;
const Button = styled.button`
  margin-top: 1rem;
  text-transform: uppercase;
  background-image: linear-gradient(-106deg, #51beed 2%, #288ad6 100%);
  box-shadow: 0 2px 6px 0 #9ed4ec;
  border-radius: 100px;
  width: 302px;
  height: 50px;
  border: none;
  color: #fff;
  font-size: 17px;
  max-width: 100%;
  transition: all 0.2s linear;

  &:hover{
    transition: all 0.2s linear;
    opacity:0.9;
    cursor: pointer;
    background-image: linear-gradient(100deg, #51beed 2%, #288ad6 100%);
  }
`;
const UnAuthOrderHistory = () => {
  return (
    <Wrapper>
      <Content>
        {/* Image */}
        <LazyLoadImage src="https://www.thegioididong.com/lich-su-mua-hang/images/i1.png" />
        {/* Title */}
        <span>Tra cứu thông tin đơn hàng</span>
        {/* Form */}
        <Form>
          {/* Form - Input */}
          <Input placeholder="Nhập số điện thoại mua hàng" />

          {/* Form - Button */}
          <Button> tiếp tục</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default UnAuthOrderHistory;
