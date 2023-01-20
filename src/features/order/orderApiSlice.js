import {
    apiSlice
} from "../../apis/apiSlice";
export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get History Order
        getHistoryOrder: builder.query({
            query: (inputData) => {
                let {
                    page,
                    size
                } = inputData;
                return {
                    url: `/orders/myorders`,
                    params: {
                        page,
                        size
                    },
                };
            }
        }),
        // get Order Info
        getOrderInfo: builder.query({
            query: ({
                orderId
            }) => `/orders/${orderId}`,
        }),
        // get Order Status (pending,processing,complete,cancel,delivery,paid,unpaid)
        filterOrderStatus: builder.query({
            query: (inputData) => {
                let {
                    page,
                    size,
                    status
                } = inputData;
                return {
                    url: `/order/search-status`,
                    params: {
                        page,
                        size,
                        status
                    },
                };
            },
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // User
        // Make a order
        placeOrder: builder.query({
            query: (inputData) => ({
                url: `/orders`,
                method: "POST",
                body: {
                    ...inputData
                },
            })
        }),
        // Update order
        updateOrder: builder.query({
            query: (inputData) => ({
                url: `/orders/${inputData.orderId}/update`,
                method: "PUT",
                body: inputData
            })
        }),
        // Cancel cod order
        cancelCodOrder: builder.query({
            query: (inputData) => ({
                url: `/orders/${inputData?.orderId}`,
                method: "PUT",
                body: inputData
            }),
        }),
        // Digital wallet pay
        payOrder: builder.query({
            query: (inputData) => ({
                url: `/orders/${inputData?.orderId}/pay`,
                method: "PUT",
                body: inputData,
            })
        })

    }),
});