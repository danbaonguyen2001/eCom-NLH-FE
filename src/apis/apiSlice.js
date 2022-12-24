import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../features/auth/authSlice";
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
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    //step 1 : retrieve new token from refresh token
    // refresh token
    const refreshResult = await baseQuery("/refresh", api, extraOption);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const { email, role } = api.getState().auth;
      // api.dispatch(setUserInfos({}));
      // apiSlice.dispatch(setCredentials({ email,role }));
      //step 2 : store in local storage
      const { accessToken } = refreshResult.data;
      addToLocalStorage(accessToken);
      // retry
      result = await baseQuery(args, api, extraOption);
    } else {
      clearFromLocalStorage();
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
