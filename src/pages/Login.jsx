import { React, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toastObject } from "../constants/toast";
import {
  selectLoginStatus,
  selectAuthState,
  reset,
} from "../features/auth/authSlice";
import login from "../assets/images/register/login.png";
import FormInput from "../components/login/FormInput";
import background from "../assets/images/register/login.png";
import "../sass/auth/_login.scss";
import { toast } from "react-toastify";
//

// Function
import authController from "../features/auth/functions";
import { setRender } from "../features/cart/cartSlice";
import Loader from "../components/loading/Loader";
import { useEffect } from "react";

const Login = () => {
  const history = useHistory();
  // check login
  const isLogin = useSelector(selectLoginStatus);
  const { isSuccess, isError, isLoading, message } =
    useSelector(selectAuthState);
  const dispatch = useDispatch();
  //Alert
  useEffect(() => {
    !isLogin &&
      isError &&
      toast.error(message || "Invalid info", { ...toastObject, toastId: 99 });
    isSuccess &&
      toast.success(message, {
        ...toastObject,
        toastId: 200,
      }) &&
      history.push({ pathname: "/" });
    dispatch(reset());
  }, [isError, isLogin, isSuccess, message, dispatch]);
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Nhập địa chỉ email",
      errorMessage: "Email không chính xác",
      // errorMessage: "",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Nhập mật khẩu",
      errorMessage: "Mật khẩu phải từ 5-16 kí tự",
      // errorMessage: "",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
  ];

  // Login
  const LoginForm = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const submitHandle = (e) => {
      e.preventDefault();
      if (values.email.includes("@admin"))
        return alert("Email không được chứa @admin!");
      const { email, password } = values;
      // Xử lý result
      authController.login({ email, password });
    };

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(isLoading);
    return (
      <Loader isLoading={isLoading}>
        <div className="row login ">
          {/* Old form */}
          <div className="login_container display_none">
            <div className="login_container_background">
              <div className="login_form">
                <div className="login_form_header">
                  <img src={login} alt="" className="img_login"></img>
                </div>

                <div className="login_form_form">
                  <form
                    id="login_form_id"
                    className="login_form_group"
                    onSubmit={submitHandle}
                  >
                    {inputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}

                    <div className="login_form_btn_control">
                      <button type="submit" className="btn_next">
                        Đăng Nhập
                      </button>
                    </div>
                  </form>
                </div>

                <div className="forget_password">
                  <Link to="/password_reset" className="forget_password_link">
                    Quên mật khẩu?
                  </Link>
                </div>

                <div className="text_or">
                  <div className="line"></div>
                  <span className="or">Hoặc</span>
                  <div className="line"></div>
                </div>

                <div className="login_form_btn_socials">
                  <a
                    href="https://tlcn-2022-be.onrender.com/api/oauth2/google"
                    className="btn btn_icon flex_center"
                  >
                    <i className="fa-brands fa-google "></i>
                    Google
                  </a>

                  <a
                    href="https://tlcn-2022-be.onrender.com/api/oauth2/facebook"
                    className="btn btn_icon flex_center"
                  >
                    <i className="fa-brands fa-facebook "></i>
                    Facebook
                  </a>
                </div>

                <div className="login_register">
                  <span className="text_register">Bạn chưa có tài khoản?</span>
                  <Link to="/register" className="login_register_link">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* New form */}
          <div className="l-5 m-8 c-12 border">
            <div class="login__header">
              <h3 class="login__headidng"> Đăng nhập</h3>
              <Link
                to="/register"
                id="click-register"
                class="login__switch-btn js-btn-switch-to-register"
              >
                Đăng ký
              </Link>
            </div>
            <center>
              <img src={background} alt="" className="img_registercode"></img>
            </center>
            <div className="login__form">
              <form
                id="login_form_id"
                className="login_form_group"
                onSubmit={submitHandle}
              >
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}

                <div className="flex_80_width">
                  <button className="btn login-btn" type="submit">
                    Đăng Nhập
                  </button>
                </div>
              </form>
            </div>

            <div className="forget_password">
              <Link to="/password_reset" className="forget_password_link">
                Quên mật khẩu?
              </Link>
            </div>

            <div className="text_or">
              <div className="line"></div>
              <span className="or">Hoặc</span>
              <div className="line"></div>
            </div>
            <div className="login_form_btn_socials">
              <a
                href="https://tlcn-2022-be.onrender.com/api/oauth2/google"
                className="btn btn_icon flex_center"
              >
                <i className="fa-brands fa-google "></i>
                Google
              </a>

              <a
                href="https://tlcn-2022-be.onrender.com/api/oauth2/facebook"
                className="btn btn_icon flex_center"
              >
                <i className="fa-brands fa-facebook "></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Loader>
    );
  };

  const body = isLogin ? <Redirect to="/" /> : <LoginForm />;
  //
  return body;
};

export default Login;
