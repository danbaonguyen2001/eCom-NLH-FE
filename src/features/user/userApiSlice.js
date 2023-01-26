import { apiSlice } from "../../apis/apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
            getUser: builder.query({
                query: () => ({
                    url: "/users/profile",
                    method: "GET",
                })
            }),
            updateUser: builder.mutation({
                query: (inputData) => ({
                    url: "/users/profile",
                    method: "PUT",
                    body: {...inputData }
                })
            }),
            updateAvatar: builder.mutation({
                query: (formData) => ({
                    url: "/users/avatar",
                    method: "PUT",
                    body: formData,
                })
            }),
            deleteAddressById: builder.mutation({
                query: ({ addressId }) => ({
                    url: `/users/address/${addressId}`,
                    method: "DELETE",
                })
            }),
            getAddressById: builder.mutation({
                query: ({ addressId }) => ({
                    url: `/users/address/${addressId}`,
                    method: "GET",
                })
            }),



        })
    })
    // Hook
export const { useGetUser, useUpdateUser } = userApiSlice