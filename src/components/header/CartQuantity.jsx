import React, { useEffect, useState } from "react";
import styled from "styled-components";
// selector
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../features/cart/cartSlice";

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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("Render get  cart");
    dispatch(getTotals());
  }, [cart.render]);
  return <Wrap>{cart?.quantity}</Wrap>;
};

export default CartQuantity;
