import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FullScreenProgress from "../../components/loading/FullScreenProgress";
import { selectLoginStatus } from "../../features/auth/authSlice";
import { userApiSlice } from "../../features/user/userApiSlice";
import { useAuthUser } from "../../redux/hook/authUser";
import { getFromLocalStorage } from "../../utils/tokenHandle";

const Auth = ({ children }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  userApiSlice.endpoints.getUser.useQuery(null, {
    skip: !accessToken,
  });
  const user = useAuthUser();
  const isAuthenticated = useSelector(selectLoginStatus)
  console.log(accessToken)
  console.log(user)

  if ((!user && accessToken) && !isAuthenticated) {
    return <>Loading</>;
  }
  return children;
};

export default Auth;
