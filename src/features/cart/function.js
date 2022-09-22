// actions
// import { logOut, setUserInfos } from "./authSlice";
// api
import { cartApiSlice } from "./cartApiSlice";
import { store } from "../../redux/stores";
import { apiSlice } from "../../apis/apiSlice";
import { toast } from "react-toastify";
import { addToCart, decreaseQuantity, increaseQuantity } from "./cartSlice";

const { dispatch } = store;
//
const cartHandler = {
  // get Current Cart
  getCurrentCart: async () => {
    let result = {
      status: false,
      data: [],
    };
    let response = await dispatch(
      cartApiSlice.endpoints.getCurrentCart.initiate()
    );
    try {
      let { status, data } = response.data;
      if (status) {
        result.status = status;
        result.data = data;
      } else {
        console.log("Cant get current cart");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Filter Status failed");
      }
    }
    return result.data;
  },
  // Update quantity
  updateQuantity: async ({ quantity, productColorId }) => {
    let result = {
      status: false,
      message: "",
      data: [],
    };
    let response = await dispatch(
      cartApiSlice.endpoints.updateQuantity.initiate({
        quantity,
        productColorId,
      })
    );
    try {
      let { status, data, message } = response;
      if (status === true) {
        result.status = status;
        result.data = data;
        result.message = message;
      } else {
        console.log("Cant update quantity");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Update cart failed");
      }
      return result;
    }
  },
  // Remove item from cart
  removeCart: async ({ productColorId }) => {
    let result = {
      status: false,
      message: "",
      data: [],
    };
    let response = await dispatch(
      cartApiSlice.endpoints.removeCart.initiate({
        productColorId,
      })
    );
    try {
      let { status, data, message } = response.data;
      if (status) {
        result.status = status;
        result.data = data;
        result.message = message;
      } else {
        console.log("Cant remove item");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Remove item from cart failed");
      }
    }
    return result;
  },
  // Add item to cart
  addCart: async (inputData) => {
    let { productColorId, quantity } = inputData;
    let result = {
      status: false,
      message: "",
      data: [],
    };

    let response = await dispatch(
      cartApiSlice.endpoints.addCart.initiate({
        productColorId,
        quantity,
      })
    );
    try {
      let { status, data, message } = response.data;
      if (status) {
        result.status = status;
        result.data = data;
        result.message = message;
      } else {
        console.log("Cant add item");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Add to cart failed");
      }
    }
    return result;
  },
  increaseQuantity: async ({ productColorId }) => {
    let set = false;
    try {
      const res = await dispatch(
        cartApiSlice.endpoints.increaseQuantity.initiate({ productColorId })
      );
      const { status } = res.data;
      if (status) {
        set = true;
        dispatch(increaseQuantity({id:productColorId}))
      } else {
        throw new Error();
      }
    } catch (e) {
      toast.error(`Lỗi hệ thống không thể tăng số lượng sản phấm lên`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      console.log(e);
    }
    return set;
  },
  decreaseQuantity: async ({ productColorId }) => {
    let set = false;
    try {
      const res = await dispatch(
        cartApiSlice.endpoints.decreaseQuantity.initiate({ productColorId })
      );
      const { status } = res.data;
      if (status) { 
        set = true;
        dispatch(decreaseQuantity({id: productColorId}))
      } else {
        throw new Error();
      }
    } catch (e) {
      toast.error(`Lỗi hệ thống không thể giảm số lượng sản phấm xuống`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      console.log(e);
    }
    return set;
  },
  handlerRemoveCartAll: async () => {
    let set = false;
    try {
      const res = await dispatch(
        cartApiSlice.endpoints.removeCartAll.initiate()
      );
      console.log(res);
      const { status } = res;
      set = status;
    } catch (e) {
      console.log(e);
    }
    return set;
  },
};
export default cartHandler;
