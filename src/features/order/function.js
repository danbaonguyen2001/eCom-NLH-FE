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
    const query = dispatch(
      orderApiSlice.endpoints.placeOrder.initiate(inputData)
    );
    dispatch(
      setState({
        isLoading: true,
      })
    );
    query
      .then((res) => {
        const { success } = res.data;
        console.log(res);
        if (success)
          dispatch(
            setState({
              isSuccess: true,
              isLoading: false,
            })
          );
        else
          dispatch(
            setState({
              isLoading: false,
              isError: true,
            })
          );
      })
      .catch((e) => {
        console.log(e);
        dispatch(
          setState({
            isLoading: false,
            isError: true,
          })
        );
      })
      .finally(() =>
        dispatch(
          setState({
            isLoading: false,
          })
        )
      );

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
