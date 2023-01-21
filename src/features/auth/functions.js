// import { useLoginMutation } from "../../features/auth/authApiSlice";
import {
  failureLogin,
  logIn,
  logOut,
  requestLogin,
  setUserInfos,
} from "./authSlice";
import { authApiSlice } from "./authApiSlice";
import { store } from "../../redux/stores";
import { resetCurrentCart } from "../cart/cartSlice";
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import { ErrorResponse } from "../../utils/ErrorResponse";
const { dispatch } = store;
// content
const authHandler = {
  login: async ({ email: emailI, password }) => {
    dispatch(requestLogin());
    dispatch(
      authApiSlice.endpoints.login.initiate({
        email: emailI,
        password,
      })
    )
      .then((res) => {
        if (res.error) {
          dispatch(failureLogin({ message: res.error.data.message }));
          return false;
        }
        const { access_token, refresh_token } = res.data.data;
        const { name, avatar, email, _id, isAdmin } = res.data.data.user;
        // Change auth state
        dispatch(logIn({ message: res.data.message }));
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
        return new ErrorResponse(e.message, 400);
      });
    return false;
  },
  register: async (inputData) => {
    try {
      let response = await dispatch(
        authApiSlice.endpoints.register.initiate({
          ...inputData,
        })
      );
      if (response?.data?.success) return true;
      throw new Error(response?.data?.message);
    } catch (e) {
      console.log(`Cant register with message: ${e.message}`);
    }
    return false;
  },

  verify: async ({ email, token }) =>
    await dispatch(
      authApiSlice.endpoints.verify.initiate({
        email,
        token,
      })
    ),
  logOut: async () => {
    return dispatch(authApiSlice.endpoints.logOut.initiate())
      .then((res) => {
        if (res?.data?.success) {
          dispatch(resetCurrentCart());
          store.dispatch(logOut());
          toast.success(`Đăng xuất thành công`, toastObject);
        }
      })
      .catch((e) =>
        toast.error(`Lỗi hệ thống thử lại: ${e.message}`, toastObject)
      );
  },
  forgotPassword: async ({ email }) => {
    return await dispatch(
      authApiSlice.endpoints.forgotPassword.initiate({
        email,
      })
    );
  },
  resetPassword: async ({ token, password }) =>
    await dispatch(
      authApiSlice.endpoints.resetPassword.initiate({
        token,
        password,
      })
    ),
  changePassword: async ({ oldPassword, newPassword }) =>
    await dispatch(
      authApiSlice.endpoints.passwordChange.initiate({
        oldPassword,
        newPassword,
      })
    ),
};
export default authHandler;
