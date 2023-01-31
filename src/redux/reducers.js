import {
    combineReducers
} from "redux";
import authReducer from "../features/auth/authSlice";
import {
    apiSlice
} from "../apis/apiSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import orderReducer from "../features/order/orderSlice";
//Nguyên
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/product/productSlice";


// reset app state
import {
    RESET_STATE_ACTION_TYPE
} from "./actions/resetState"


// persistConfig
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};


const reducers = {
    // authentication
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    //cart
    cart: cartReducer,
    // order
    order: orderReducer,
    //compare products
    product: productReducer,
};
const combinedReducer = combineReducers(reducers)
    // Root reducer
export const rootReducer = (state, action) => {
    if (action.type === RESET_STATE_ACTION_TYPE) {
        console.log(state)
        state = {}
    }
    return combinedReducer(state, action)
}
export default persistReducer(persistConfig, rootReducer);