import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoProduct from "../components/cart/NoProduct";
import HasProduct from "../components/cart/HasProduct";
import cartHandler from "../features/cart/function";
import { selectCurrentState } from "../features/order/orderSlice";
import "../sass/cart/cart.scss";
import { toast } from "react-toastify";
import {
  selectCartState,
  setCurrentCart,
  setRender,
} from "../features/cart/cartSlice";
import { Paper, Skeleton, Stack } from "@mui/material";
import CartSkeleton from "../components/cart/CartSkeleton";
import { selectLoginStatus } from "../features/auth/authSlice";
import { ErrorResponse } from "../utils/ErrorResponse";
import ErrorBoundary from "../utils/ErrorBoundary";

const Cart = () => {
  // test error boundary
  const [count, setCount] = useState(0);
  //
  const [isFetch, setIsFetch] = useState(false);

  const [cart, setCart] = useState([]);
  const isAuthenticated = useSelector(selectLoginStatus);
  const { isError, isLoading, isSuccess } = useSelector(selectCurrentState);
  const dispatch = useDispatch();
  // get current cart state
  const cartItems = useSelector((state) => state.cart.cartItems);
  // cart api state
  const {
    isLoading: isLoadingCart,
    isSuccess: isSuccessCart,
    isError: isErrorCart,
    message: messageCart,
  } = useSelector(selectCartState);
  useEffect(() => {
    if (isAuthenticated) {
      cartHandler.getCurrentCart();
      isErrorCart &&
        toast.error("Không thể tải dữ liệu giỏ hàng. Thử lại sau", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
    }
  }, [isAuthenticated, dispatch]);
  // catch order state api
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems, isLoadingCart, isSuccessCart, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Đặt hàng thành công. Nhớ kiểm tra mail nhé`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });

      setCart([]);
    }
    if (isLoading) {
      toast.info("Đang thực hiện yêu cầu", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });

    }
    if (isError) {
      toast.error("Lỗi hệ thống thử lại sau", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  }, [isLoading, isSuccess, isError, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // throw new ErrorResponse("Cart");
  return (
    <div>
      {/* Add bomb message */}
      {console.log(isLoadingCart)}
      {console.log(isLoading)}

      {!isLoadingCart && !isLoading ? (
        <div className="cart flex_center">
          {cart?.length === 0 ? (
            <NoProduct />
          ) : (
            <HasProduct cart={cart} setCart={setCart} />
          )}
          {/* Không có sản phẩm*/}
          {/* <NoProduct /> */}
          {/* {noProduct && <NoProduct />} */}

          {/* có sản phẩm */}
          {/* {hasProduct && <HasProduct />} */}
        </div>
      ) : (
        <CartSkeleton />
      )}
    </div>
  );
};

export default Cart;
