import { apiSlice } from "../../apis/apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
            getUser: builder.query({
                query: () => ({
                    url: "http://localhost:5000/api/users/profile",
                    method: "GET",
                })
            }),
            updateUser: builder.mutation({
                query: (inputData) => ({
                    url: "http://localhost:5000/api/users/profile",
                    method: "PUT",
                    body: {...inputData }
                })
            }),
            updateAvatar: builder.mutation({
                query: (formData) => ({
                    url: "http://localhost:5000/api/users/avatar",
                    method: "PUT",
                    body: formData,
                })
            }),
            deleteAddressById: builder.mutation({
                query: ({ addressId }) => ({
                    url: `http://localhost:5000/api/users/address/${addressId}`,
                    method: "DELETE",
                })
            }),
            getAddressById: builder.mutation({
                query: ({ addressId }) => ({
                    url: `http://localhost:5000/api/users/address/${addressId}`,
                    method: "GET",
                })
            }),



        })
    })
    // Hook
export const { useGetUser, useUpdateUser } = userApiSlice