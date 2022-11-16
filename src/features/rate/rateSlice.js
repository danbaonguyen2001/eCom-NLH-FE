import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { param } from "jquery";
import rateApiSlice from "./rateApiSlice";

export const getCommentRateProductId = createAsyncThunk(
  "comment/getCommentRateProductId",
  async (params, { rejectWithValue }) => {
    try {
      const response = await rateApiSlice.getCommentRateProductId(
        params.id,
        params.size
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addCommentRateProductId = createAsyncThunk(
  "comments/addCommentRateProductId",
  async (data, { rejectWithValue }) => {
    // try {
    //     const response = await rateApiSlice.addCommentRateProductId(data)
    //     return response
    // } catch (error) {
    //     console.log('data',data)
    //     console.log(error.response.data)
    //     return rejectWithValue(error.response.data)
    // }
    const response = await rateApiSlice.addCommentRateProductId(data);
    return response;
  }
);

const initialState = {
  loading: false,
  error: null,
};

export const rateSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: {
    [getCommentRateProductId.pending]: (state) => {
      state.loading = true;
    },
    [getCommentRateProductId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCommentRateProductId.fulfilled]: (state, action) => {
      state.loading = true;
    },
    [addCommentRateProductId.pending]: (state) => {
      state.loading = true;
    },
    [addCommentRateProductId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [addCommentRateProductId.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});
export default rateSlice.reducer;
