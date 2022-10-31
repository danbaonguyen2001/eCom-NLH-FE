import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //Thêm sản phẩm vào danh sách so sánh
    addProduct(state, action) {
      if (state.productList.length < 2) {
        state.productList.push(action.payload);
      } else {
        toast.warn("Danh sách sản phẩm so sánh đã đầy. Xóa bớt và thử lại !", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    },
    //Xóa 1 sản phẩm khỏi danh sách so sánh
    removeProduct(state, action) {
      const nextProductList = state.productList.filter(
        (product) => product !== action.payload
      );
      state.productList = nextProductList;
    },
    //Xóa tất cả sản phẩm khỏi danh sách so sánh
    removeAllProduct(state, action) {
      state.productList = [];
    },
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct, removeAllProduct } =
  productSlice.actions;

// export const selectCurentproductList = (state) => state.products.productList;
