import { apiSlice } from "../../apis/apiSlice";
// Cart Api includes : cart api and orders api call
export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Cart Api
        // Get current Cart
        getCurrentCart: builder.query({
            query: () => `/cart`,
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // Update quality on product color
        updateQuantity: builder.mutation({
            query: (inputData) => {
                let { productColorId, quantity } = inputData;
                return {
                    url: `/cart/update`,
                    body: { productColorId, quantity },
                    method: "PUT",
                };
            },
            transformResponse: (res) => ({
                status: res.status,
                message: res.message,
                data: res.data,
            }),
        }),
        // Cart add
        addCart: builder.mutation({
            query: (inputData) => {
                let { productColorId, quantity } = inputData;
                return {
                    url: `/cart/add`,
                    method: "POST",
                    params: { productColorId, quantity },
                };
            },
        }),
        updateCart: builder.query({
            query: ({ productColorId, quantity }) => {
                return {
                    url: `/cart/increase`,
                    method: "PUT",
                    body: { productColorId, quantity },
                };
            },
        }),
        increaseQuantity: builder.query({
            query: ({ productColorId }) => {
                return {
                    url: `/cart/increase/`,
                    method: "PUT",
                    params: { productColorId },
                };
            },
        }),
        decreaseQuantity: builder.query({
            query: ({ productColorId }) => {
                return {
                    url: `/cart/decrease/`,
                    method: "PUT",
                    params: { productColorId },
                };
            },
        }),

        // Cart remove (Remove product in cart)
        removeCart: builder.mutation({
            query: ({ productColorId }) => ({
                url: "/cart/remove/",
                method: "DELETE",
                params: { productColorId },
            }),
            transformResponse: (res) => ({
                status: res.status,
                message: res.message,
                data: res.data,
            }),
        }),
        // Cart remove all (Remove all product in cart)
        removeCartAll: builder.mutation({
            query: () => ({
                url: `/cart`,
                method: "DELETE",
            }),
        }),
        //
    }),
});