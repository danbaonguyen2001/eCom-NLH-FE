import { apiSlice } from "../../apis/apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => `/events`,
            method: 'GET',
        })
    })
})