import { productApiSlice } from "./productApiSlice";

import { store } from "../../redux/stores";
import { error } from "jquery";
const { dispatch } = store;

//

const productHandler = {
  // Get product by id
  getProductById: async (inputData) => {
    let productId = inputData;
    let result = {
      status: false,
      data: [],
    };
    const res = await dispatch(
      productApiSlice.endpoints.getProductById.initiate({
        productId: parseInt(productId, 10) || productId,
      })
    );

    try {
      let { status, data } = res.data;
      if (status) {
        result.status = true;
        result.data = data;
      } else {
        console.log("Cant get product by Id: " + productId);
        throw Error();
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Get Info Failed");
      }
    }

    return result;
  },
  // Get product by keyword
  getProductList: async (inputData) => {
    let result = {
      status: false,
      data: [],
    };
    // {manufacturerId,categoryId,subCategoryId,page,size}

    let response = await dispatch(
      productApiSlice.endpoints.getProductsList.initiate({ ...inputData })
    );
    try {
      let { status, data } = response.data;
      if (status) {
        result.status = true;
        result.data = data;
      } else {
        console.log("Cant get products list : " + inputData);
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Get Info Failed");
      }
    }
    return result;
  },
};
export default productHandler;
