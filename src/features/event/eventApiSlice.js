import { apiSlice } from "../../apis/apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCurrentEvent: builder.query({
            query: () => `/currentEvent`
        })
    })
})