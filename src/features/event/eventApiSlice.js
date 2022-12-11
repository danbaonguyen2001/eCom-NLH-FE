import { apiSlice } from "../../apis/apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => `http://localhost:5000/api/events`,
            method: 'GET',
        })
    })
})