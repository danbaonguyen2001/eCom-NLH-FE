import { apiSlice } from "../../apis/apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
            getUser: builder.query({
                query: () => ({
                    url: "/user",
                    method: "GET",
                })
            }),
            updateUser: builder.mutation({
                query: (inputData) => ({
                    url: "/user",
                    method: "PUT",
                    body: {...inputData }
                })
            }),
            updateAvatar: builder.mutation({
                query: ({ formData }) => ({
                    url: "/user/avatar",
                    method: "PUT",
                    body: formData,
                })
            }),
            deleteAddressById: builder.mutation({
                query: ({ addressId }) => ({
                    url: `/user/address/${addressId}`,
                    method: "DELETE",
                })
            }),


        })
    })
    // Hook
export const { useGetUser, useUpdateUser } = userApiSlice