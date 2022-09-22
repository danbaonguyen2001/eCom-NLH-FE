import React, { useState } from "react";
import cartController from "../../features/cart/function";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
const style = {
  display: "flex",
  justifyContent: "space-around",
  height:"100px",
  alignItems: "center",
}
const Order = () => {
  const [orderList, setOrderList] = useState([]);
  const idUserSelector = useSelector(selectCurrentUserId);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(idUserSelector);
    let result = await cartController.getHistoryOrder({
      userId: idUserSelector,
    });
    console.log(result);
  };
  // Haven't done this yet
  const submitHandler1 = async (e) => {
    e.preventDefault();
    console.log(idUserSelector);
    let result = await cartController.getHistoryOrder({
      userId: idUserSelector,
    });
    console.log(result);
  };
  // Haven't done this yet
  const submitHandler2 = async (e) => {
    e.preventDefault();
    console.log(idUserSelector);
    let result = await cartController.getHistoryOrder({
      userId: idUserSelector,
    });
    console.log(result);
  };
  return (
    <div className="grid wide" style={style}>
      <div>
        {orderList ? (
          orderList.map((v, i) => <div key={i}>{v}</div>)
        ) : (
          <div>No response</div>
        )}
        <button onClick={(e) => submitHandler(e)}>Get History Order</button>
      </div>
      <div>
        {orderList ? (
          orderList.map((v, i) => <div key={i}>{v}</div>)
        ) : (
          <div>No response</div>
        )}
        <button onClick={(e) => submitHandler1(e)}>Get Order Info</button>
      </div>
      <div>
        {orderList ? (
          orderList.map((v, i) => <div key={i}>{v}</div>)
        ) : (
          <div>No response</div>
        )}
        <button onClick={(e) => submitHandler2(e)}>Filter Order Status</button>
      </div>
    </div>
  );
};

export default Order;
