import { apiSlice } from "../../apis/apiSlice";
// Cart Api includes : cart api and orders api call
export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Cart Api
    // Get current Cart
    getCurrentCart: builder.query({
      query: () => ({
        url: `http://localhost:5000/api/carts`,
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
          url: `http://localhost:5000/api/carts`,
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
          url: `http://localhost:5000/api/carts`,
          body: { itemId, quantity },
          method: "PUT",
        };
      },
    }),

    // updateCart: builder.query({
    //   query: ({ productColorId, quantity }) => {
    //     return {
    //       url: `/cart/increase`,
    //       method: "PUT",
    //       body: { productColorId, quantity },
    //     };
    //   },
    // }),
    // increaseQuantity: builder.query({
    //   query: ({ productColorId }) => {
    //     return {
    //       url: `/cart/increase/`,
    //       method: "PUT",
    //       params: { productColorId },
    //     };
    //   },
    // }),
    // decreaseQuantity: builder.query({
    //   query: ({ productColorId }) => {
    //     return {
    //       url: `/cart/decrease/`,
    //       method: "PUT",
    //       params: { productColorId },
    //     };
    //   },
    // }),

    // // Cart remove (Remove product in cart)
    // removeCart: builder.mutation({
    //   query: ({ productColorId }) => ({
    //     url: "/cart/remove/",
    //     method: "DELETE",
    //     params: { productColorId },
    //   }),
    //   transformResponse: (res) => ({
    //     status: res.status,
    //     message: res.message,
    //     data: res.data,
    //   }),
    // }),
    // // Cart remove all (Remove all product in cart)
    // removeCartAll: builder.mutation({
    //   query: () => ({
    //     url: `/cart`,
    //     method: "DELETE",
    //   }),
    // }),
    // //
  }),
});
