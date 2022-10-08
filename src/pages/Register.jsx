import { React, useEffect, useState } from "react";
// import "../assets/css/register/testmain.css";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../assets/images/register/login.png";
import FormInput from "../components/register/FormInput.jsx";
import "../sass/auth/_register.scss";
// Function
import authController from "../features/auth/functions";
const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    gender: "man",
    confirmPassword: "",
    phone: "",
    address: "",
    name: "",
  });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Nhập email",
      errorMessage: "Email không chính xác",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Tên người đăng ký",
      errorMessage: "Tên người đăng ký không đúng!",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Nhập mật khẩu",
      errorMessage: "Mật khẩu phải từ 5-16 kí tự",
      pattern: "^[A-Za-z0-9]{5,16}$",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "phone",
      placeholder: "Số điện thoại",
      errorMessage: "Số điện thoại không chính xác!",
      // pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Nhập lại mật khẩu",
      errorMessage: "Mật khẩu đã nhập không chính xác",
      pattern: values.password,
      required: true,
    },

    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Địa chỉ",
      errorMessage: "Địa chỉ không chính xác!",
    },
  ];

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    let email = values.email;
    let password = values.password;
    let gender = values.gender;
    let phone = values.phone;
    let address = values.address;
    let name = values.name;
    // Xua ly
    let result = await authController.register({
      email,
      password,
      gender,
      phone,
      address,
      name,
    });
    if (result) {
      let emailCode = values.email;
      toast.info(`Thông tin hợp lệ, bạn kiểm tra mail nhé`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      history.push({
        pathname: "/registerCode",
        state: { passEmail: emailCode },
      });
    } else {
      toast.error(`Thử lại sau`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (values.email.includes("@admin")) {
    alert("Email không được chứa @admin!");
    values.email = "";
  }
  // console.log(values);
  // console.log(values.gender.toString());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row register">
      {/* Old */}
      <div className="register_container_background display_none">
        <div className="register_form">
          <div className="register_form_header">
            <img src={login} alt="" className="img_login"></img>
          </div>

          <div className="register_form_form">
            <form className="register_form_group" onSubmit={handleSubmit}>
              <div className="register_form_group_inputs">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>

              <div className="register_form_gender">
                {/* <p>Chọn giới tính:</p> */}

                <div className="register_form_radio_buttons_input_man">
                  <input
                    type="radio"
                    id="man"
                    name="gender"
                    value="man"
                    onChange={onChange}
                  ></input>
                  <label htmlFor="man">Nam</label>
                </div>
                <div className="register_form_radio_buttons_input_woman">
                  <input
                    type="radio"
                    id="woman"
                    name="gender"
                    value="woman"
                    onChange={onChange}
                  ></input>
                  <label htmlFor="woman">Nữ</label>
                </div>
              </div>

              <div className="register_form_btn_control">
                <button type="submit" className="btn_next">
                  Đăng ký
                </button>
              </div>
            </form>

            <div className="text_or">
              <div className="line"></div>
              <span className="or">Hoặc</span>
              <div className="line"></div>
            </div>

            <div className="register_form_btn_socials">
              <Link to="/#" className="btn btn_icon flex_center">
                <i className="fa-brands fa-google "></i>
                Google
              </Link>

              <Link to="/#" className="btn btn_icon flex_center">
                <i className="fa-brands fa-facebook "></i>
                Facebook
              </Link>
            </div>

            <div className="register_form_aside">
              <div className="register_form_policy_text">
                <span className="text_policy">
                  Bằng việc đăng ký, bạn đã đồng ý về
                </span>
                <div className="chinhsach">
                  <Link to="/#" className="register_form_policy_link">
                    Điều khoản dịch vụ
                  </Link>
                  <span className="and"> & </span>
                  <Link to="/#" className="register_form_policy_link">
                    Chính sách bảo mật
                  </Link>
                </div>
              </div>
            </div>

            <div className="register_login">
              <span className="text_login">Bạn đã có tài khoản?</span>
              <Link to="/login" className="register_login_link">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* New */}
      <div className="l-8 m-10 c-12 border">
        <div class="login__header">
          <h3 class="login__headidng"> Đăng ký</h3>
          <Link
            to="/login"
            id="click-register"
            class="login__switch-btn js-btn-switch-to-register"
          >
            Đăng nhập
          </Link>
        </div>
        <center>
          <img src={login} alt="" className="img_registercode"></img>
        </center>
        <div className="register_form_form">
          <form className="register_form_group" onSubmit={handleSubmit}>
            <div className="register_form_group_inputs">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>

            <div className="register_form_gender">
              {/* <p>Chọn giới tính:</p> */}

              <div className="register_form_radio_buttons_input_man">
                <input
                  type="radio"
                  id="man"
                  name="gender"
                  value="man"
                  onChange={onChange}
                  checked={values.gender === "man"}
                ></input>
                <label htmlFor="man">Nam</label>
              </div>
              <div className="register_form_radio_buttons_input_woman">
                <input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                  checked={values.gender === "woman"}
                  onChange={onChange}
                ></input>
                <label htmlFor="woman">Nữ</label>
              </div>
            </div>

            <center>
              <div className="l-8 m-10 c-12 register_form_btn_control">
                <button type="submit" className="btn_next">
                  Đăng ký
                </button>
              </div>
            </center>
          </form>

          <div className="text_or">
            <div className="line"></div>
            <span className="or">Hoặc</span>
            <div className="line"></div>
          </div>

          <div className="register_form_btn_socials">
            <a
              href="https://tgddgroup04.herokuapp.com/oauth2/authorize/google"
              className="btn btn_icon flex_center"
            >
              <i className="fa-brands fa-google "></i>
              Google
            </a>

            <a
              href="https://tgddgroup04.herokuapp.com/oauth2/authorize/facebook"
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

export default Register;
