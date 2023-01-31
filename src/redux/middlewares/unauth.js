import {
    isRejectedWithValue,
    Middleware
} from "@reduxjs/toolkit";
import {
    resetStateAction
} from "../actions/resetState";


export const unAuthMiddleware = (api) => (next) => (action) => {

    console.log([action])
        // catch reject unAuth value
    if (isRejectedWithValue(action) && action.payload.status === 401) {
        console.log("reset app")
        api.dispatch(resetStateAction())
    }
    // next
    return next(action)
}