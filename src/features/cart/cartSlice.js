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
      state.cartItems = [...action.payload];
    },

    //lấy cart hiện tại
    setCartTotal(state, action) {
      const { total, quantity } = action.payload;
      state.total = total;
      state.quantity = quantity;
    },

    // Thêm sản phẩm vào giỏ hàng
    addToCart(state, action) {
      const item = {
        product: action.payload.product,
        option: action.payload.option,
        color: action.payload.color,
      };
      const { quantity, price } = action.payload;

      const itemIndex = state.cartItems.findIndex(
        // product color id
        (i) =>
          i.product === action.payload.product &&
          i.option === action.payload.option &&
          i.color === action.payload.color
      );
      if (itemIndex >= 0) {
        // {payload : id , quantity, price}
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        const tempProduct = { ...{ item, quantity, price } };
        state.cartItems.push(tempProduct);
      }
    },

    //Xoá sản phẩm khỏi giỏ hàng
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) =>
          cartItem.product !== action.payload.product &&
          cartItem.option !== action.payload.option &&
          cartItem.color !== action.payload.color
      );
      state.cartItems = nextCartItems;
    },

    //Tăng số lượng sản phẩm dung trong addToCart
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => {
        return (
          cartItem.product !== action.payload.product &&
          cartItem.option !== action.payload.option &&
          cartItem.color !== action.payload.color
        );
      });
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    //Giảm số lượng sản phẩm
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.product !== action.payload.product &&
          cartItem.option !== action.payload.option &&
          cartItem.color !== action.payload.color
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },

    //Tính tổng tiền
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          //console.log(cartItem.quantity);
          cartTotal.total += cartItem.price * cartItem.quantity;
          cartTotal.quantity += cartItem.quantity;

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
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCurrentQuantityInCart = (state) => state.cart.quantity;
export const selectCurrentCartLength = (state) => state.cart.cartItems.length;
export const selectCurrentCartInfo = (state) => ({
  quantity: state.cart.quantity,
  total: state.cart.total,
});
