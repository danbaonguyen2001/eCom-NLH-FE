import { apiSlice } from "../../apis/apiSlice";
export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get History Order
        getHistoryOrder: builder.query({
            query: (inputData) => {
                let { page, size, userId } = inputData;
                return {
                    url: `/order/history/${userId}`,
                    params: { page, size },
                };
            },
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // get Order Info
        getOrderInfo: builder.query({
            query: ({ orderId }) => `/order/${orderId}`,
            transformResponse: (res) => ({
                status: res.status,
                message: res.message,
                data: res.data,
            }),
        }),
        // get Order Status (pending,processing,complete,cancel,delivery,paid,unpaid)
        filterOrderStatus: builder.query({
            query: (inputData) => {
                let { page, size, status } = inputData;
                return {
                    url: `/order/search-status`,
                    params: { page, size, status },
                };
            },
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // User
        // Make a order
        orderByCod: builder.query({
            query: (inputData) => ({
                url: `/order`,
                method: "POST",
                body: {...inputData },
            }),
            transformResponse: (res) => ({
                data: res.data,
                status: res.status,
            }),
        }),
        // Cancel cod order
        cancelCodOrder: builder.query({
            query: ({ orderId }) => ({
                url: `/cod/cancel/${orderId}`,
                method: "PUT",
            }),
        }),
    }),
});