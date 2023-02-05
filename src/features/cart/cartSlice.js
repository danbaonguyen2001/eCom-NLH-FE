import {
    createSlice
} from "@reduxjs/toolkit";
import {
    toast
} from "react-toastify";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isSuccess: false,
    message: "",
    cartItems: [],
    quantity: 0,
    shipFee: 0,
    total: 0,
    count: 0,
    render: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        request(state, action) {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        success(state, action) {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message || ""
        },
        failure(state, action) {
            state.message = action.payload.message || ""
            state.isLoading = false
            state.isError = true
        },
        finish(state, action) {
            state.isLoading = false
        },
        setCurrentCart(state, action) {
            const cart = [...action.payload];
            console.log(action.payload)
            state.cartItems = cart;
            state.count = 0;
            let {
                total,
                quantity,
                count
            } = cart.reduce(
                (cartTotal, cartItem) => {
                    //console.log(cartItem.item);
                    cartTotal.total += cartItem.item.price * cartItem.item.quantity;
                    cartTotal.quantity += cartItem.item.quantity;
                    cartTotal.count += 1;
                    return {
                        ...cartTotal,
                    };
                }, {
                    total: 0,
                    quantity: 0,
                    count: 0,
                }
            );

            state.quantity = quantity;
            state.total = total;
            state.count = count;
        },

        resetCurrentCart(state, action) {
            state.cartItems = [];
            state.quantity = 0;
            state.total = 0;
        },

        //lấy cart hiện tại
        setCartTotal(state, action) {
            const {
                total,
                quantity
            } = action.payload;
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
            state.quantity = action.payload;
        },

        //Xoá sản phẩm khỏi giỏ hàng
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem._id !== action.payload._id
            );
            console.log(action.payload)
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
            let {
                total,
                quantity,
                count
            } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    //console.log(cartItem.quantity);
                    cartTotal.total += cartItem.item.price * cartItem.item.quantity;
                    cartTotal.quantity += cartItem.item.quantity;
                    cartTotal.count += 1;
                    return {
                        ...cartTotal,
                    };
                }, {
                    total: 0,
                    quantity: 0,
                    count: 0,
                }
            );

            state.quantity = quantity;
            state.total = total;
            state.count = count;
        },

        setQuantity(state, action) {
            state.quantity += action.payload;
        },

        setRender(state, action) {
            state.render = !state.render;
            //
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
    setRender,
    request,
    success,
    failure,
    finish
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
export const selectCartState = (state) => {
    const stateCartApi = {
        isLoading: state.cart.isLoading,
        isSuccess: state.cart.isSuccess,
        isError: state.cart.isError,
        message: state.cart.message
    }
    return stateCartApi
}