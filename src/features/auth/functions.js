// import { useLoginMutation } from "../../features/auth/authApiSlice";
import { logIn, logOut, setUserInfos } from "./authSlice";
import { Redirect, useHistory } from "react-router-dom";
import { authApiSlice } from "./authApiSlice";
import cartController from "../cart/function";
import { store } from "../../redux/stores";
import { setCurrentCart } from "../cart/cartSlice";
import { resetCurrentCart } from "../cart/cartSlice";
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
const { dispatch } = store;
// content
const authHandler = {
  login: async ({ email: emailI, password }) => {
    try {
      //   let result = login({ email, password }).unwrap();
      const response = await dispatch(
        authApiSlice.endpoints.login.initiate({
          email: emailI,
          password,
        })
      );
      let result = {
        ...response.data,
      };
      const { access_token } = result.data;
      const { name, avatar, email, _id, isAdmin } = result.data.user;
      // Change auth state
      dispatch(logIn());
      dispatch(
        setUserInfos({
          role: !isAdmin ? "ROLE_USER" : "ROLE_ADMIN",
          name,
          avatar: avatar.url,
          email,
          access_token,
          userId: _id,
        })
      );
      if (result) return true;
      throw new Error(result.message);
    } catch (e) {
      console.log(`Cant login with message: ${e.message}`);
    }
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
