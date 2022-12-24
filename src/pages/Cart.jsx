import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoProduct from "../components/cart/NoProduct";
import HasProduct from "../components/cart/HasProduct";
import cartHandler from "../features/cart/function";
import { selectCurrentState } from "../features/order/orderSlice";
import "../sass/cart/cart.scss";
import { toast } from "react-toastify";
import { setCurrentCart, setRender } from "../features/cart/cartSlice";
import { Paper, Skeleton, Stack } from "@mui/material";
import CartSkeleton from "../components/cart/CartSkeleton";

const Cart = () => {
  const [isFetch, setIsFetch] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [cart, setCart] = useState([]);
  const { isLoading, isSuccess, isError } = useSelector(selectCurrentState);
  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);
  //const cart = cartHandler.getCurrentCart().then((data) => console.log(data));
  const cartState = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    cartHandler
      .getCurrentCart()
      .then((res) => {
        if (res.isSuccess) setIsFetch(true);
        setCart(res.data.cart);
        //console.log(res.data.cart);
        // set
        dispatch(setCurrentCart(res.data.cart));
        dispatch(setRender());
      })
      .catch((e) =>
        toast.error("Không thể tải dữ liệu giỏ hàng. Thử lại sau", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
      );
  }, [cart]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Đặt hàng thành công", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      // setOrderSuccess(true);
      // setCart([]);
    }
    if (isLoading) {
      toast.info("Đang thực hiện yêu cầu", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      setOrderSuccess(false);
    }
    if (isError) {
      toast.error("Lỗi hệ thống thử lại sau", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      setOrderSuccess(false);
    }
  }, [isLoading, isSuccess, isError]);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {isFetch ? (
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
