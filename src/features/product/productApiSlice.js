import { apiSlice } from "../../apis/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // By Id
    getProductById: builder.query({
      //New
      query: ({ productId }) => ({
        url: `http://localhost:5000/api/products/${productId}`,
        method: "GET",
      }),
    }),

    // By keyword
    getProductsList: builder.query({
      //New
      query: (inputData) => ({
        url: `http://localhost:5000/api/products`,
        params: { ...inputData },
      }),
    }),

    //By Category

    getProductsByCategory: builder.query({
      query: ({ categoryName }) => ({
        url: `http://localhost:5000/api/products/category/${categoryName}`,
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
