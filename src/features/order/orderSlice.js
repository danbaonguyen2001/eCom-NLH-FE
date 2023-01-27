import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        request: function(state, action) {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
        success: function(state, action) {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message || "";
        },
        failure: function(state, action) {
            state.isError = true;
            state.isLoading = false;
            state.message = action.payload.message || "";
        },
        reset: function() {
            return initialState
        },
        finish(state, action) {
            state.isLoading = false
        },
    }
})
export default orderSlice.reducer
export const {
    request,
    failure,
    success,
    reset,
    finish

} = orderSlice.actions
export const selectCurrentState = state => state.order