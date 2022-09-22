// import { useLoginMutation } from "../../features/auth/authApiSlice";
import { logIn, logOut, setUserInfos } from "./authSlice";
import { Redirect, useHistory } from "react-router-dom";
import { authApiSlice } from "./authApiSlice";
import cartController from "../cart/function"
import { store } from "../../redux/stores";
import { setCurrentCart } from "../cart/cartSlice";
const { dispatch } = store;
// content
const authHandler = {
  login: async ({ email, password }) => {
    // return resolved promise
    // endpoint login : builder.mutations ({ query: credentials => ({body:{...credentials}})
    // dispatch(setCredentials({...userData,email}))'
    // {status,data}
    let set = false;
    try {
      //   let result = login({ email, password }).unwrap();
      let response = await dispatch(
        authApiSlice.endpoints.login.initiate({ email, password })
      );
      let { data: result } = response.data.data;
      if (response.data.data.status) {
        let { role, name, avatar, email, access_token, userId } = result;
        set = true;
        // add to local storage
        // finish login
        dispatch(logIn());
        dispatch(
          setUserInfos({ role, name, avatar, email, access_token, userId })
        );
        // 
        // const cart = cartController.getCurrentCart();
        // cart && dispatch(setCurrentCart({}))
      } else {
        console.log("Cant login");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }

    return set;
  },
  register: async ({ email, password, gender, phone, address, name }) => {
    let set = false;
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
      let { status } = response.data;
      if (status === true) {
        set = true;
      } else {
        console.log("Cant Register");
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
    return set;
  },
  verify: async ({ email, token }) => {
    let set = false;
    try {
      let response = await dispatch(
        authApiSlice.endpoints.verify.initiate({ email, token })
      );
      let status = response.data?.meta?.response?.status;
      if (status === 200 && status) {
        // success
        set = true;
      } else {
        console.log("Error Verification");
        throw Error();
      }
    } catch (e) {
      if (!e?.response) {
        console.log("No Server Response");
      } else if (e.response?.status === 400) {
        console.log("Missing Input");
      } else if (e.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
    return set;
  },
  logOut: () => {
    store.dispatch(logOut());
  
  },
};
export default authHandler;
