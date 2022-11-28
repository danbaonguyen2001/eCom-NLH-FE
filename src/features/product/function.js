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

  // Get product by keyword - all product
  getProductList: async (inputData) =>
    await dispatch(
      productApiSlice.endpoints.getProductsList.initiate({ ...inputData })
    ),

  getProductsByCategory: async ({ categoryName }) =>
    await dispatch(
      productApiSlice.endpoints.getProductsByCategory.initiate({
        categoryName,
      })
    ),

  // Get top products

  getProductsTop: async () =>
    await dispatch(productApiSlice.endpoints.getProductsTop.initiate()),

  //Get All Products
  getAllProducts: async () =>
    await dispatch(productApiSlice.endpoints.getAllProducts.initiate()),
};
export default productHandler;
