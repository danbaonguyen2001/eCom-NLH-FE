import { apiSlice } from "../../apis/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (inputData) => ({
                url: "tlcn-2022-be.herokuapp.com/api/auth/login",
                method: "POST",
                body: {...inputData },
            }),
        }),
        register: builder.mutation({
            query: (inputData) => ({
                url: `tlcn-2022-be.herokuapp.com/api/auth/register`,
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
                    url: `tlcn-2022-be.herokuapp.com/api/auth/verify-email/${token}`,
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