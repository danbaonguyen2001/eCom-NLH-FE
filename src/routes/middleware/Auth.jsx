import React from "react";
import { useSelector } from "react-redux";
import FullScreenProgress from "../../components/loading/FullScreenProgress";
import { userApiSlice } from "../../features/user/userApiSlice";
import { useAuthUser } from "../../redux/hook/authUser";
import { getFromLocalStorage } from "../../utils/tokenHandle";

const Auth = ({ children }) => {
  const user = useAuthUser();
  const accessToken = useSelector((state) => state.auth.accessToken);
  userApiSlice.endpoints.getUser.useQuery(null, {
    skip: !accessToken,
  });
  console.log(accessToken);
  console.log(user);

  if (!user && accessToken) {
    return  <>Loading</>;
  }
  return children;
};

export default Auth;
