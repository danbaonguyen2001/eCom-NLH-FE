import {
    apiSlice
} from "../../apis/apiSlice";
export const voucherApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAvailableVouchers: builder.query({
            query: (keyword) => ({
                url: `/vouchers?key=${keyword}`,
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
export const { useGetAvailableVouchersQuery } = voucherApiSlice