import { apiSlice } from "../../apis/apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => `https://tlcn-2022-be.onrender.com/api/events`,
            method: 'GET',
        })
    })
})