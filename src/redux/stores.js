import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

import { apiSlice } from "../apis/apiSlice";



export const store = configureStore({

    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware return array of middlewares that will be used for store
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
    devTools: true,
});