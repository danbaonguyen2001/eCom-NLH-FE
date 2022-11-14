import { productApiSlice } from "./productApiSlice";

import { store } from "../../redux/stores";
import { error } from "jquery";
const { dispatch } = store;

//

const productHandler = {
  // Get product by id
  getProductById: async ({ productId }) =>
    await dispatch(
      productApiSlice.endpoints.getProductById.initiate({
        productId,
      })
    ),

  // Get product by keyword
  getProductList: async (inputData) =>
    await dispatch(
      productApiSlice.endpoints.getProductsList.initiate({ ...inputData })
    ),

  //Get All Products
  getAllProducts: async () =>
    await dispatch(productApiSlice.endpoints.getAllProducts.initiate()),
};
export default productHandler;
