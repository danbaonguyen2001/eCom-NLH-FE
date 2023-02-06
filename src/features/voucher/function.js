import {
    store
} from "../../redux/stores"
import {
    voucherApiSlice
} from "./voucherApiSlice"
const {
    dispatch
} = store

export const getAvailableVouchers = (keyword = "") => dispatch(voucherApiSlice.endpoints.getAvailableVouchers.initiate(keyword))
export const getDetailVoucher = (voucherId) => dispatch(voucherApiSlice.endpoints.getDetailVoucher.initiate(voucherId))