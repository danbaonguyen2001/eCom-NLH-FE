import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FullScreenProgress from "../../components/loading/FullScreenProgress";
import { selectLoginStatus } from "../../features/auth/authSlice";
import { userApiSlice } from "../../features/user/userApiSlice";
import { useAuthUser } from "../../redux/hook/authUser";
import { getFromLocalStorage } from "../../utils/tokenHandle";

const Auth = ({ children }) => {
  const accessToken =
    useSelector((state) => state.auth.accessToken) ||
    getFromLocalStorage("accessToken");
  console.log(!accessToken);
  const isAuthenticated = useSelector(selectLoginStatus);

  userApiSlice.endpoints.getUser.useQuery(null, {
    skip: !accessToken || isAuthenticated,
  });
  const user = useAuthUser();

  if (!user && accessToken && !isAuthenticated) {
    return <>Loading</>;
  }
  return children;
};

export default Auth;
