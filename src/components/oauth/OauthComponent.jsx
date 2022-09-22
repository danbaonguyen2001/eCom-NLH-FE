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
    // call Api
    const fetchUser = async (token) => {
      try {
        const res = await userController.getUser();
        const { status, data } = res.data;
        const access_token = token;
        if (status) {
          let { role, name, avatar, email, id, provider } = data;
          // add to local storage
          // finish login
          dispatch(logIn());
          dispatch(
            setUserInfos({
              role,
              name,
              avatar,
              email,
              access_token,
              userId: id,
              provider,
            })
          );
          // toast.success(`Đăng ký thành công, chúc bạn một ngày tốt lành `, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   closeOnClick: true,
          // });
          if(email || avatar || email){
            toast.info(
              `Có thể bạn sẽ trở thành một phần của chúng mình, cho mình biết thêm một vài thông tin nếu bạn đang rảnh`,
              {
                toastId:21,
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
              }
            );
          }

          setIsAuthenticated(true);
          //
          // const cart = cartController.getCurrentCart();
          // cart && dispatch(setCurrentCart({}))
        } else {
          history.push("/login")
          throw new Error();
        }
      } catch (e) {
        toast.error(`Có trục trặc gì trong quá trình đăng ký. Thử lại sau`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          toastId:404,
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (responseToken && loginState!="error") {
      
      fetchUser(responseToken);
    }else{
      history.push("/login")
      toast.error(`Email này đã được dùng trước đó`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        toastId:404,
      });
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
        toast.error(`Có trục trặc gì trong quá trình đăng ký. Thử lại sau`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })}
    </div>
  );
};

export default OauthGoogle;
