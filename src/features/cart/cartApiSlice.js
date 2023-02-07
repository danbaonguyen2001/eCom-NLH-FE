import { apiSlice } from "../../apis/apiSlice";
// Cart Api includes : cart api and orders api call
export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Cart Api
        // Get current Cart
        getCurrentCart: builder.query({

            query: () => ({
                url: `/carts`,
                method: "GET",
            }),
            // transformResponse: (res) => ({
            //   success: res.success,
            //   data: res.data,
            // }),
        }),

        // Cart add
        addToCart: builder.mutation({
            query: (inputData) => {
                let { item, quantity } = inputData;
                return {
                    url: `/carts`,
                    method: "POST",
                    body: { item, quantity },
                };
            },
        }),

        // Update quality and remove
        updateCart: builder.mutation({
            query: (inputData) => {
                let { itemId, quantity } = inputData;
                return {
                    url: `/carts`,
                    body: { itemId, quantity },

                    method: "PUT",
                };
            },
        }),
    }),
});
export const { useGetCurrentCartQuery, useUpdateCartMutation, useAddToCartMutation } = cartApiSlice