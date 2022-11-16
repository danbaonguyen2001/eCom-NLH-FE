// import { useLoginMutation } from "../../features/auth/authApiSlice";
import { logIn, logOut, setUserInfos } from "./authSlice";
import { Redirect, useHistory } from "react-router-dom";
import { authApiSlice } from "./authApiSlice";
import cartController from "../cart/function";
import { store } from "../../redux/stores";
import { setCurrentCart } from "../cart/cartSlice";
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
      const { role, name, avatar, email, _id } = result.data.user;
      // Change auth state
      dispatch(logIn());
      dispatch(
        setUserInfos({
          role: role || "ROLE_USER",
          name,
          avatar:avatar.url,
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
  register: async ({ email, password, gender, phone, address, name }) => {
    try {
      let response = await dispatch(
        authApiSlice.endpoints.register.initiate({
          email,
          password,
          gender,
          phone,
          address,
          name,
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
    store.dispatch(logOut());
  },
};
export default authHandler;
