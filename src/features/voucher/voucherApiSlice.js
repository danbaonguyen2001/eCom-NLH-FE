import {
    apiSlice
} from "../../apis/apiSlice";
export const voucherApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableVouchers: builder.query({
            query: (keyword = "", privateV = false) => ({
                url: `/vouchers?key=${keyword}&private=${privateV}`,
                method: "GET"
            })
        }),
        getDetailVoucher: builder.query({
            query: (voucherId) => ({
                url: `/vouchers/${voucherId}`,
                method: "GET"
            })
        })
    })
})
export const {
    useGetAvailableVouchersQuery
} = voucherApiSlice