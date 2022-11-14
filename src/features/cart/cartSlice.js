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
      const { id, quantity, price } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        // product color id
        (item) => item.id === id
      );
      if (itemIndex >= 0) {
        // {payload : id , quantity, price}
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        const tempProduct = { ...{ id, quantity, price } };
        state.cartItems.push(tempProduct);
      }
    },

    //Xoá sản phẩm khỏi giỏ hàng
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },

    //Tăng số lượng sản phẩm dung trong addToCart
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    //Giảm số lượng sản phẩm
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
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
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          console.log(price);
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

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
