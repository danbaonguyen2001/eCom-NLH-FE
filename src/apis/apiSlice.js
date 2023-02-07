import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logIn, logOut, setUserInfos } from "../features/auth/authSlice";
import {
  addToLocalStorage,
  clearFromLocalStorage,
  getFromLocalStorage,
} from "../utils/tokenHandle";

// fetch
const baseQuery = fetchBaseQuery({
  // local
  // baseUrl: "https://tgddgroup04.herokuapp.com/api",
    baseUrl: "https://tlcn-2022-be.onrender.com/api",
  // baseUrl: "http://localhost:5000/api",
  // baseUrl: "http://192.168.1.6:5000/api",

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getFromLocalStorage();
    if (token) {
      headers.set("authorization", "Bearer " + token);
    }
    return headers;
  },
});
//wrapper
const baseQueryWithCredentials = async (args, api, extraOption) => {
  let result = await baseQuery(args, api, extraOption);
  // refresh if 403 return result ( Assets Forbidden )
  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    //step 1 : retrieve new token from refresh token
    // refresh token
    const refreshToken = localStorage.getItem("refreshToken");
    // api
    const refreshResult = await baseQuery(
      {
        url: "/auth/refreshToken",
        method: "POST",
        body: {
          refreshToken,
        },
      },
      api,
      extraOption
    );
    if (refreshResult?.data) {
      const { access_token, refresh_token } = refreshResult?.data?.data;
      const { name, avatar, email, _id, isAdmin } =
        refreshResult?.data?.data?.user;
      // api.dispatch(setUserInfos({}));
      // apiSlice.dispatch(setCredentials({ email,role }));
      //step 2 : store in local storage
      // Change auth state
      api.dispatch(logIn());
      api.dispatch(
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
      // retry
      result = await baseQuery(args, api, extraOption);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

// create slice
export const apiSlice = createApi({
  baseQuery: baseQueryWithCredentials,
  endpoints: (builder) => ({}),
  refetchOnMountOrArgChange: true,
});
