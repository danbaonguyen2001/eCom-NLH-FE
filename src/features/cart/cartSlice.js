import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  quantity: 0,
  shipFee: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCurrentCart(state, action) {
      const cart = [...action.payload];

      state.cartItems = cart;

      let { total, quantity } = cart.reduce(
        (cartTotal, cartItem) => {
          //console.log(cartItem.item);
          cartTotal.total += cartItem.item.price * cartItem.item.quantity;
          cartTotal.quantity += cartItem.item.quantity;
          return {
            ...cartTotal,
          };
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.quantity = quantity;
      state.total = total;
    },

    resetCurrentCart(state, action) {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },

    //lấy cart hiện tại
    setCartTotal(state, action) {
      const { total, quantity } = action.payload;
      state.total = total;
      state.quantity = quantity;
    },

    //Thêm sản phẩm vào giỏ hàng
    addToCart(state, action) {
      // const { product, option, color, quantity } = action.payload;
      // const itemIndex = state.cartItems.findIndex(
      //   (v) =>
      //     v.item.product === product &&
      //     v.item.option === option &&
      //     v.item.color === color
      // );
      // //Existing item
      // if (itemIndex >= 0) {
      //   // {payload : id , quantity, price}
      //   //console.log(state.cartItems[0]);
      //   state.cartItems[itemIndex].quantity += quantity;
      // } else {
      //   state.cartItems[0].item.push(action.payload);
      //   //state.quantity += quantity;
      // }
    },

    //Xoá sản phẩm khỏi giỏ hàng
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
      state.cartItems = nextCartItems;
    },

    //Tăng số lượng sản phẩm dung trong addToCart
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem._id !== action.payload;
      });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].item.quantity += 1;
      }
    },
    //Giảm số lượng sản phẩm
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id !== action.payload
      );

      console.log(action.payload);
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].item.quantity -= 1;
      }
    },

    //Tính tổng tiền
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          //console.log(cartItem.quantity);
          cartTotal.total += cartItem.item.price * cartItem.item.quantity;
          cartTotal.quantity += cartItem.item.quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.quantity = quantity;
      state.total = total;
    },

    setQuantity(state, action) {
      state.quantity += action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  setCartTotal,
  increaseQuantity,
  setCurrentCart,
  getTotals,
  resetCurrentCart,
  setQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCurrentQuantityInCart = (state) => state.cart.quantity;
export const selectCurrentCartLength = (state) => state.cart.cartItems.length;
export const selectCurrentCartInfo = (state) => ({
  quantity: state.cart.quantity,
  total: state.cart.total,
  length: state.cart.cartItems.length,
});
export const selectCurrentCartItems = (state) => state.cart.cartItems;
