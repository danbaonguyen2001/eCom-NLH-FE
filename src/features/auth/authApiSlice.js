import { apiSlice } from "../../apis/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (inputData) => ({
                url: "/login",
                method: "POST",
                body: {...inputData },
            }),
            transformResponse: (res, meta) => {
                return {
                    status: meta.response.status === 200 ? true : false,
                    data: res,
                };
            },
        }),
        register: builder.mutation({
            query: (inputData) => ({
                url: "/register-email",
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
            query: (inputData) => {
                const { email, token } = inputData;
                return {
                    url: "/verifyRegistration",
                    method: "GET",
                    params: { email, token },
                };
            },
            transformResponse: (res, meta) => ({ res, meta }),
        })

    }),
});
// Hook useMutation
export const { useLoginMutation, useRegisterMutation, useVerifyMutation } =
authApiSlice;