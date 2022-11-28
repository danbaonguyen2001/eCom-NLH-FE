import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Wrap = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
  background-color: black;
  width: 2.8rem;
  height: 1.2rem;
  border-radius: 20%;
  color: white;
  text-align: center;
  font-size: 0.9rem;
`;
const CartQuantity = ({ cartInfo }) => {
  return <Wrap>{cartInfo.quantity}</Wrap>;
};

export default CartQuantity;
