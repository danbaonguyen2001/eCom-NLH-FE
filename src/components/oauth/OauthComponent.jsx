import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logIn,
  setUserInfos,
  selectCurrentUserId,
} from "../../features/auth/authSlice";
import userController from "../../features/user/function";
import { toast } from "react-toastify";
import { addToLocalStorage } from "../../utils/tokenHandle";
import { getParamsValue } from "../../utils/format";
import { toastObject } from "../../constants/toast";
const OauthGoogle = () => {
  //state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // redux
  const dispatch = useDispatch();
  // params
  const { search } = useLocation();
  // current info
  const currentUserId = useSelector(selectCurrentUserId);
  const history = useHistory();
  const loginState = history.location.search.replace(/\?/, "").split("=")[0];
  const responseToken = getParamsValue(search, "token");
  const error = getParamsValue(search, "error");
  useEffect(() => {
    addToLocalStorage(responseToken);
    const access_token = responseToken;
    // call Api
    if (!currentUserId.userId) {
      if (loginState === "token") {
        userController
          .getUser()
          .then((res) => {
            const { success, user } = res?.data;
            console.log(user)
            if (success) {
              let { name, avatar, email, _id, provider, addresses, isAdmin,phone } =
                user;
              if (addresses.length < 1 || phone) {
                toast.info(
                  `Có thể bạn sẽ trở thành một phần của chúng mình, cho mình biết thêm một vài thông tin nếu bạn đang rảnh`,
                  toastObject
                );
              }
              // add to local storage
              // finish login
              dispatch(logIn());
              dispatch(
                setUserInfos({
                  role: !isAdmin ? "ROLE_USER" : "ROLE_ADMIN",
                  name,
                  avatar: avatar.url||avatar,
                  email,
                  access_token,
                  userId: _id,
                  provider,
                })
              );
              setIsAuthenticated(true);
            } else {
              history.push("/login");
            }
          })
          .catch((e) => {
            toast.error(
              `Có trục trặc gì trong quá trình đăng ký. Thử lại sau: ${e.message}`,
              toastObject
            );
          })
          .finally(() => setIsLoading(false));
      } else if (loginState == "error") {
        toast.error(`Email này đã được dùng trước đó`, toastObject);
      }
    } else {
      toast.error(`Đăng xuất trước khi đăng nhập`, toastObject);
    }
  }, []);
  return (
    <div>
      {isAuthenticated && !isLoading && (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
      {!isAuthenticated &&
        !isLoading &&
        toast.error(
          `Có trục trặc gì trong quá trình đăng ký. Thử lại sau`,
          toastObject
        )}
    </div>
  );
};

export default OauthGoogle;
