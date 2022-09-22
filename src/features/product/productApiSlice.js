import { apiSlice } from "../../apis/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // By Id
        getProductById: builder.query({
            query: ({ productId }) => `/product/${productId}`,
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
        // By keyword
        getProductsList: builder.query({
            // common key : keyword
            // {manufacturerId,categoryId,subCategoryId,page,size}
            //
            query: (inputData) => ({
                url: `/product`,
                params: {...inputData },
            }),
            transformResponse: (res) => ({
                status: res.status,
                data: res.data,
            }),
        }),
    }),
});