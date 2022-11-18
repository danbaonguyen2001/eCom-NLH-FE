import { apiSlice } from "../../apis/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (inputData) => ({
                url: "http://localhost:5000/api/auth/login",
                method: "POST",
                body: {...inputData },
            }),
        }),
        register: builder.mutation({
            query: (inputData) => ({
                url: `http://localhost:5000/api/auth/register`,
                method: "POST",
                body: {...inputData },
            }),
        }),
        // verify: builder.mutation({
        //     query: (inputData) => ({
        //         url: "/verifyRegistration",
        //         method: 'GET',
        //         params: {...inputData },
        //     }),

        // }),
        verify: builder.mutation({
            query: ({ token }) => {
                return {
                    url: `https://tlcn-2022-be.onrender.com/api/auth/verify-email/${token}`,
                    method: "POST",
                };
            },
            transformResponse: (res, meta) => ({ res, meta }),
        })

    }),
});
// Hook useMutation
export const { useLoginMutation, useRegisterMutation, useVerifyMutation } =
authApiSlice;