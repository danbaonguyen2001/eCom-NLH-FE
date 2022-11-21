import { orderApiSlice } from "./orderApiSlice";
import { store } from "../../redux/stores";
import { setState } from "./orderSlice";
const { dispatch } = store;
const orderController = {
  // get History Order function
  getHistoryOrder: async ({ userId, page, size }) =>
    await dispatch(
      orderApiSlice.endpoints.getHistoryOrder.initiate({
        userId,
        page: page || 1,
        size: size || 10,
      })
    ),
  //get Order Info function
  getOrderInfo: async ({ orderId }) => {
    let result = {
      status: false,
      message: "",
      data: [],
    };
    let response = await dispatch(
      orderApiSlice.endpoints.getOrderInfo.initiate({
        orderId,
      })
    );
    // console.log(response);
    try {
      let { status, message, data } = response.data;
      if (status === true) {
        result.status = status;
        result.data = data;
        result.message = message;
      } else {
        console.log("Cant get order info");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
      } else {
        console.log("Get Info Failed");
      }
    }
    return result;
  },
  // filter Order Status page, size, status
  filterOrder: async ({ page, size, status }) => {
    let result = {
      status: false,
      data: [],
    };
    let response = await dispatch(
      orderApiSlice.endpoints.filterOrderStatus.initiate({
        page,
        size,
        status,
      })
    );

    try {
      let { status, data } = response;
      if (status === true) {
        result.status = status;
        result.data = data;
      } else {
        console.log("Cant filter status");
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
    return result;
  },
  handlerMakeOrder: async (inputData) => {
    let result = {
      status: false,
      data: [],
    };
    const res = await dispatch(
      orderApiSlice.endpoints.orderByCod.initiate({
        ...inputData,
      })
    );
    dispatch(
      setState({
        isLoading: true,
      })
    );

    try {
      const { status, data } = res.data;
      if (status) {
        dispatch(
          setState({
            isSuccess: true,
            isLoading: false,
          })
        );

        result.data = data;
        result.status = status;
      } else {
        dispatch(
          setState({
            isLoading: false,
            isError: true,
          })
        );

        console.log("Cant make a cod order");
      }
    } catch (e) {
      console.log(e);
      dispatch(
        setState({
          isLoading: false,
          isError: true,
        })
      );
    } finally {
      dispatch(
        setState({
          isLoading: false,
        })
      );
    }
    return result;
  },
  handlerCancelCodOrder: async (inputData) => {
    const { orderId } = inputData;
    let set = false;
    try {
      const res = await dispatch(
        orderApiSlice.endpoints.cancelCodOrder.initiate({
          orderId,
        })
      );
      console.log(res);
      set = res?.error?.originalStatus == 200 ? true : false;
    } catch (e) {
      console.log(e);
    }
    return set;
  },
};
export default orderController;
