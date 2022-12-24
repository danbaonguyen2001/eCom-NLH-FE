import { React, useState, useEffect } from "react";
import background from "../assets/images/register/login.png";
import "../sass/auth/_register_code.scss";

// Function
import authController from "../features/auth/functions";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toastObject } from "../constants/toast";

const RegisterCode = (props) => {
  const [values, setValues] = useState({
    code: "",
  });
  const history = useHistory();
  const { token } = useParams();
  useEffect(() => {
    authController
      .verify({ token })
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.status) {
          toast.success(`Xác thực tài khoản thành công`, {
            ...toastObject,
            toastId: 200,
          });
          history.push("/login");
        } else {
          toast.error(
            `Link không hợp lệ hoặc đã hết hạn, hoặc thử bằng cách nhập link vào ô bên dưới`,
            {
              ...toastObject,
              toastId: 99,
            }
          );
        }
      })
      .catch((e) =>
        toast.error(`Thử lại sau: ${e?.message}`, {
          ...toastObject,
          toastId: 99,
        })
      );
  }, []);

  const onChange = (e) => {
    setValues({ ...values, code: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Xua ly
    try {
      let result = await authController.verify({ token });
      console.log(result);
      if (result === true) {
        toast.success(`Xác thực tài khoản thành công`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
        history.push("/login");
      } else {
        toast.error(`Link không hợp lệ hoặc đã hết hạn`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          toastId: 99,
        });
      }
    } catch (e) {
      toast.error(`Thử lại sau`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        toastId: 99,
      });
    }
  };

  return (
    <div>
      <div className="row l-12 registercode">
        {/* Old */}
        <div className="registercode_container_background display_none">
          <div className="registercode_form">
            <div className="registercode_form_header">
              <img src={background} alt="" className="img_registercode"></img>
            </div>

            <div className="registercode_form_form">
              <form className="registercode_form_group" onSubmit={handleSubmit}>
                <div className="registercode_form_input">
                  <input
                    type="text"
                    className="registercode_form_input username"
                    placeholder="Nhấn vào đường link dẫn đến mail của bạn"
                    value={values.code}
                    onChange={onChange}
                    disabled={true}
                  ></input>
                  {/* <i className="fa-solid fa-circle-check"></i>
                  <i className="fa-solid fa-circle-exclamation"></i> */}
                  <span className="registercode_form_input_mess">Mess</span>
                </div>

                <div className="registercode_form_btn_control">
                  <button type="submit" disabled={true} className="btn_next">
                    Chờ xác thực
                  </button>
                </div>
              </form>
            </div>

            <div className="forget_password">
              <a href="/#" className="forget_password_link">
                Nhận lại mã?
              </a>
            </div>

            <div className="text_or">
              <div className="line"></div>
              <span className="or">Hoặc</span>
              <div className="line"></div>
            </div>

            <div className="registercode_form_btn_socials">
              <a href="/#" className="btn btn_icon flex_center">
                <i className="fa-brands fa-google "></i>
                Google
              </a>

              <a href="/#" className="btn btn_icon flex_center">
                <i className="fa-brands fa-facebook "></i>
                Facebook
              </a>
            </div>

            <div className="registercode_register">
              <span className="text_register">Bạn chưa có tài khoản?</span>
              <a href="/register" className="registercode_register_link">
                Đăng ký
              </a>
            </div>
          </div>
        </div>

        {/* New */}
        <div className="row l-4 registercode_form border">
          <center>
            <img src={background} alt="" className="img_registercode"></img>
          </center>
          <center>
            <h3>Xác thực đăng ký tài khoản</h3>
          </center>
          <div className="registercode_form_form">
            <form className="registercode_form_group" onSubmit={handleSubmit}>
              <div className="registercode_form_input">
                <input
                  type="text"
                  className="registercode_form_input username"
                  placeholder="Nhập mã code"
                  value={values.code}
                  onChange={onChange}
                ></input>
                {/* <i className="fa-solid fa-circle-check"></i>
                  <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="registercode_form_input_mess">Mess</span>
              </div>

              <div className="registercode_form_btn_control">
                <button type="submit" className="btn_next">
                  Tiếp tục
                </button>
              </div>
            </form>
          </div>

          <div className="forget_password">
            <a href="/#" className="forget_password_link">
              Nhận lại mã?
            </a>
          </div>

          <div className="text_or">
            <div className="line"></div>
            <span className="or">Hoặc</span>
            <div className="line"></div>
          </div>

          <div className="register_form_btn_socials">
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
    </div>
  );
};

export default RegisterCode;
