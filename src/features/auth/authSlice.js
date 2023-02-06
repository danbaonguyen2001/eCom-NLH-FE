import {
    createSlice
} from "@reduxjs/toolkit";
import {
    addToLocalStorage,
    clearFromLocalStorage,
} from "../../utils/tokenHandle";
// persist

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
        accessToken: "",
        user: {
            role: "",
            name: "",
            avatar: "",
            email: "",
            provider: "",
            userId: -1,
        },
    },
    reducers: {
        request: (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        success: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = action.payload.message || ""
        },
        reset: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        failure: (state, action) => {
            state.message = action.payload.message || ""
            state.isLoading = false
            state.isError = true
        },
        logIn: (state, action) => {
            state.isAuthenticated = true;

        },
        setUserInfos: (state, action) => {
            const {
                role,
                name,
                avatar,
                email,
                access_token,
                refresh_token,
                userId
            } =
            action.payload;
            const provider = action.payload.provider || "TGDD";
            // console.log ({ role, name, avatar, email, access_token, userId })
            addToLocalStorage("accessToken", access_token);
            addToLocalStorage("refreshToken", refresh_token);
            state.user.role = role || state.user.role;
            state.user.name = name || state.user.name;
            state.user.avatar = avatar.url || avatar || state.user.avatar;
            state.user.email = email || state.user.email;
            state.user.userId = userId || state.user.userId;
            state.user.provider = provider || state.user.provider;
            state.accessToken = access_token

        },
        logOut: (state) => {
            state.user.role = "";
            state.user.name = "";
            state.user.avatar = "";
            state.user.email = "";
            state.user.userId = "";
            state.isAuthenticated = false;
            state.accessToken = ""
            clearFromLocalStorage('accessToken');
            clearFromLocalStorage('refreshToken');
        },
    },
});
export const {
    logOut,
    setUserInfos,
    logIn,
    request,
    failure,
    success,
    reset
} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUserId = (state) => state.auth.user.userId;
export const selectLoginStatus = (state) => state.auth.isAuthenticated;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthState = (state) => ({
        isLoading: state.auth.isLoading,
        isSuccess: state.auth.isSuccess,
        isError: state.auth.isError,
        message: state.auth.message,
    })
    // export const selectCurrentToken = (state) => state.auth.token