import { apiSlice } from "../../apis/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // By Id
    getProductById: builder.query({
      // old
      //   query: ({ productId }) => `/product/${productId}`,
      //   transformResponse: (res) => ({
      //     status: res.status,
      //     data: res.data,
      //   }),

      //New
      query: ({ productId }) => ({
        url: `http://localhost:5000/api/products/${productId}`,
        method: "GET",
      }),
    }),

    // By keyword
    getProductsList: builder.query({
      // common key : keyword
      // {manufacturerId,categoryId,subCategoryId,page,size}
      //
      //   Old
      //   query: (inputData) => ({
      //     url: `/product`,
      //     params: { ...inputData },
      //   }),
      //   transformResponse: (res) => ({
      //     status: res.status,
      //     data: res.data,
      //   }),

      //New
      query: (inputData) => ({
        url: `http://localhost:5000/api/products`,
        params: { ...inputData },
      }),
    }),

    //By Category

    getProductsByCate: builder.query({
      query: (categoryID) => ({
        url: `http://localhost:5000/api/products/${categoryID}`,
        method: "GET",
      }),
    }),

    // Top Products
    getProductsTop: builder.query({
      query: () => ({
        url: `http://localhost:5000/api/products/topreviews`,
      }),
    }),

    // All products
    getAllProducts: builder.query({
      // common key : keyword
      // {manufacturerId,categoryId,subCategoryId,page,size}
      //
      query: () => ({
        url: `http://localhost:5000/api/products`,
      }),
    }),
  }),
});
