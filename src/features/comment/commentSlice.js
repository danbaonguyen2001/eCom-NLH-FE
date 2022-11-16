import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentApiSlice from "./commentApiSlice";

export const getCommentProduct = createAsyncThunk(
  "comment/getCommentProduct",
  async (params, { rejectWithValue }) => {
    try {
      const response = await commentApiSlice.getCommentProduct(
        params.id,
        params.size
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getReplyCommentParentId = createAsyncThunk(
  "comment/getReplyCommentParentId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await commentApiSlice.getReplyCommentParentId(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const replyComment = createAsyncThunk(
  "comments/replyComment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await commentApiSlice.replyComment(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addCommentProductId = createAsyncThunk(
  "comments/addCommentProductId",
  async (data, { rejectWithValue }) => {
    // try {
    //     const response = await rateApiSlice.addCommentRateProductId(data)
    //     return response
    // } catch (error) {
    //     console.log('data',data)
    //     console.log(error.response.data)
    //     return rejectWithValue(error.response.data)
    // }
    const response = await commentApiSlice.addCommentProductId(data);
    console.log(response);
    return response;
  }
);
const initialState = {
  loading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [getCommentProduct.pending]: (state) => {
      state.loading = true;
    },
    [getCommentProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getCommentProduct.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [getReplyCommentParentId.pending]: (state) => {
      state.loading = true;
    },
    [getReplyCommentParentId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getReplyCommentParentId.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [replyComment.pending]: (state) => {
      state.loading = true;
    },
    [replyComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [replyComment.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addCommentProductId.pending]: (state) => {
      state.loading = true;
    },
    [addCommentProductId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addCommentProductId.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});
