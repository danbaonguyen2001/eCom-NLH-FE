// import { useLoginMutation } from "../../features/auth/authApiSlice";
import { logIn, logOut, setUserInfos } from "./authSlice";
import { Redirect, useHistory } from "react-router-dom";
import { authApiSlice } from "./authApiSlice";
import cartController from "../cart/function";
import { store } from "../../redux/stores";
import { setCurrentCart } from "../cart/cartSlice";
import {resetCurrentCart} from "../cart/cartSlice"
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
const { dispatch } = store;
// content
const authHandler = {
  login: async ({ email: emailI, password }) => {
    try {
      //   let result = login({ email, password }).unwrap();
      const response = await dispatch(
        authApiSlice.endpoints.login.initiate({ email: emailI, password })
      );
      let result = { ...response.data };
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

  verify: async ({ email, token }) => {
    try {
      let response = await dispatch(
        authApiSlice.endpoints.verify.initiate({ email, token })
      );
      let status = response.data?.meta?.response?.status;
      if (status === 200 && status) {
        return true;
      }
      throw new Error("Invalid token");
    } catch (e) {
      console.log(e.message);
    }
    return false;
  },
  logOut: () => {
    let success = false
    dispatch(authApiSlice.endpoints.logOut.initiate()).then((res) => {
      if (res?.data?.success) {
        dispatch(resetCurrentCart())
        store.dispatch(logOut());
        toast.success(`Đăng xuất thành công`, toastObject)
        success =true
      }
    }).catch(e=>toast.error(`Lỗi hệ thống thử lại: ${e.message}`,toastObject))
    return success;
  },
};
export default authHandler;
