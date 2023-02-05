// import { useLoginMutation } from "../../features/auth/authApiSlice";
import {
    failure,
    logIn,
    logOut,
    request,
    setUserInfos,
    success,
} from "./authSlice";
import {
    authApiSlice
} from "./authApiSlice";
import {
    store
} from "../../redux/stores";
import {
    resetCurrentCart,
    setRender
} from "../cart/cartSlice";
import {
    toast
} from "react-toastify";
import {
    toastObject
} from "../../constants/toast";
import {
    ErrorResponse
} from "../../utils/ErrorResponse";
import {
    FlashAuto
} from "@material-ui/icons";
import {
    resetStateAction
} from "../../redux/actions/resetState";
import {
    cartApiSlice
} from "../cart/cartApiSlice";
const {
    dispatch
} = store;
// content
const authHandler = {
    login: async({
        email: emailI,
        password
    }) => {
        dispatch(request());
        const flag = dispatch(
                authApiSlice.endpoints.login.initiate({
                    email: emailI,
                    password,
                })
            )
            .then((res) => {
                if (res.error) {
                    dispatch(failure({
                        message: res.error.data.message || res.data.message
                    }));
                    return false;
                }
                const {
                    access_token,
                    refresh_token
                } = res.data.data;
                const {
                    name,
                    avatar,
                    email,
                    _id,
                    isAdmin
                } = res.data.data.user;
                // Change auth state
                dispatch(success({
                    message: res.data.message
                }));

                dispatch(logIn());
                dispatch(
                    setUserInfos({
                        role: !isAdmin ? "ROLE_USER" : "ROLE_ADMIN",
                        name,
                        avatar: avatar.url,
                        email,
                        access_token,
                        refresh_token,
                        userId: _id,
                    })
                );
                return true;
            })
            .catch((e) => {
                return new ErrorResponse(e.message, 500);
            });
        return flag || false;
    },
    register: (inputData) => {
        dispatch(request());
        const flag = dispatch(
                authApiSlice.endpoints.register.initiate({
                    ...inputData,
                })
            )
            .then((res) => {
                if (res.error) {
                    dispatch(failure({
                        message: res.error.data.message
                    }));
                    return false;
                }
                dispatch(success({
                    message: res.data.message
                }));
                return true;
            })
            .catch((e) => {
                throw new ErrorResponse(e.message, 500);
            });
        return flag || false;
    },

    verify: async({
            email,
            token
        }) =>
        await dispatch(
            authApiSlice.endpoints.verify.initiate({
                email,
                token,
            })
        ),
    logOut: async() => {
        dispatch(request());

        const flag = dispatch(authApiSlice.endpoints.logOut.initiate())
            .then((res) => {
                if (res.error) {
                    dispatch(failure({
                        message: res.error.data.message
                    }));
                    return false
                }
                dispatch(success({
                    message: "Logout successfully"
                }));
                dispatch(resetCurrentCart());
                dispatch(resetStateAction())
                dispatch(logOut());
                dispatch(setRender());
                return true
            })
            .catch((e) => {
                throw new ErrorResponse(e.message, 500);
            });
        return flag;
    },
    forgotPassword: async({
        email
    }) => {
        return await dispatch(
            authApiSlice.endpoints.forgotPassword.initiate({
                email,
            })
        );
    },
    resetPassword: async({
            token,
            password
        }) =>
        await dispatch(
            authApiSlice.endpoints.resetPassword.initiate({
                token,
                password,
            })
        ),
    changePassword: async({
            oldPassword,
            newPassword
        }) =>
        await dispatch(
            authApiSlice.endpoints.passwordChange.initiate({
                oldPassword,
                newPassword,
            })
        ),
};
export default authHandler;