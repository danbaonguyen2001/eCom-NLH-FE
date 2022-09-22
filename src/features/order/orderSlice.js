import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setState(state, action) {
            const { isLoading, isSuccess, isError } = action.payload
            if (isLoading) state.isLoading = isLoading;
            if (isSuccess) state.isLoading = isSuccess;
            if (isError) state.isLoading = isError;
        }
    }
})
export default orderSlice.reducer
export const { setState } = orderSlice.actions
export const selectCurrentState = state => state.order