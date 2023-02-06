import {
    configureStore
} from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import {
    apiSlice
} from "../apis/apiSlice";

// 


// GET redundancy piece
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import { unAuthMiddleware } from "./middlewares/unauth";



export const store = configureStore({

    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware return array of middlewares that will be used for store
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
            },
        }).concat([apiSlice.middleware, unAuthMiddleware]),
    devTools: true,
});