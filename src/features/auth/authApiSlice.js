import {
    apiSlice
} from "../../apis/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query({
            query: (inputData) => ({
                url: "/auth/login",
                method: "POST",
                body: {
                    ...inputData
                },
            }),
        }),
        register: builder.mutation({
            query: (inputData) => ({
                url: `/auth/register`,
                method: "POST",
                body: {
                    ...inputData
                },
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
            query: ({
                token
            }) => {
                return {
                    url: `/auth/verify-email/${token}`,
                    method: "POST",
                };
            },
        }),
        passwordChange: builder.mutation({
            query: ({
                oldPassword,
                newPassword
            }) => ({
                url: `/auth/password/change`,
                body: {
                    enteredPassword: oldPassword,
                    newPassword
                },
                method: 'PUT',
            })
        }),
        logOut: builder.mutation({
            query: () => `/auth/logout`
        }),
        forgotPassword: builder.mutation({
            query: ({
                email
            }) => ({
                url: `/auth/password/forgot`,
                method: "POST",
                body: {
                    email: email
                }

            })
        }),
        resetPassword: builder.mutation({
            query: ({
                token,
                password
            }) => ({
                url: `/auth/password/resetpassword/${token}`,
                method: "PUT",
                body: {
                    password: password
                }
            })
        })


    }),
});
// Hook useMutation
export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation
} =
authApiSlice;