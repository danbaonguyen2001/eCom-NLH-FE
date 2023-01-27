import { orderApiSlice } from "./orderApiSlice";
import { store } from "../../redux/stores";
import { request, success, failure, reset, finish } from "./orderSlice";
import { ErrorResponse } from "../../utils/ErrorResponse";
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
  getOrderInfo: async ({ orderId }) =>
    await dispatch(
      orderApiSlice.endpoints.getOrderInfo.initiate({
        orderId,
      })
    ),
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
  updateOrderInfo: (inputData) =>
    dispatch(orderApiSlice.endpoints.updateOrder.initiate(inputData)),
  handlerMakeOrder: async (inputData) => {
    dispatch(request());
    const query = dispatch(
      orderApiSlice.endpoints.placeOrder.initiate(inputData)
    );

    query
      .then((res) => {
        console.log(res);
        res.data && res.data.success
          ? dispatch(
              success({
                message: res.data.message,
              })
            )
          : dispatch(
              failure({
                message: res.data.message,
              })
            );
      })
      .catch((e) => {
        console.log([e]);
        throw new ErrorResponse(e.message || e[0].message, 500);
      })
      .finally(() => dispatch(finish()));
    return query;
  },
  handlerCancelCodOrder: async ({ orderId }) =>
    await dispatch(
      orderApiSlice.endpoints.cancelCodOrder.initiate({
        orderId,
        status: {
          statusNow: "cancel",
          description: "blank",
        },
      })
    ),
  handlerPayOrder: async (inputData) =>
    await dispatch(orderApiSlice.endpoints.payOrder.initiate(inputData)),
};
export default orderController;
