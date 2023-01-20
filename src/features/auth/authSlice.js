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
        },
        logOut: (state) => {
            state.user.role = "";
            state.user.name = "";
            state.user.avatar = "";
            state.user.email = "";
            state.user.userId = "";
            state.isAuthenticated = false;
            clearFromLocalStorage();
        },
    },
});
export const {
    logOut,
    setUserInfos,
    logIn
} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUserId = (state) => state.auth.user.userId;
export const selectLoginStatus = (state) => state.auth.isAuthenticated;
export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token