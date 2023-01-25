import React, { useEffect, useState } from "react";
// import "../assets/css/register/testmain.css";
import { useHistory, Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../assets/images/register/login.png";
import { inputs } from "../components/register/data/inputs.js";
import FormInput from "../components/register/FormInput.jsx";
import "../sass/auth/_register.scss";
import { useSelector, useDispatch } from "react-redux";
import { reset, selectAuthState } from "../features/auth/authSlice";
// Function
import authController from "../features/auth/functions";
import Loader from "../components/loading/Loader";
import { toastObject } from "../constants/toast";
import BombMessage from "../components/alert/BombMessage";
//
const AddressSelect = React.lazy(() =>
  import("../components/register/AddressSelect")
);
//
const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Get api state
  const { isSuccess, isLoading, isError, message } =
    useSelector(selectAuthState);
  //
  const [values, setValues] = useState({
    email: "",
    password: "",
    gender: "man",
    confirmPassword: "",
    phone: "",
    address: "",
    detailAddress: {},
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email.includes("@admin"))
      return alert("Email không được chứa @admin!");

    const { email, password, gender, phone, name } = values;
    // Xu ly
    const addressForm = {
      address: `${values.address}, ${values.detailAddress.ward.wardName}, ${values.detailAddress.district.districtName}, ${values.detailAddress.province.provinceName}`,
      detailAddress: values.detailAddress,
      idDefault: true,
    };
    authController
      .register({
        email,
        password,
        gender,
        addressForm,
        phone,
        name,
      })
      .then((res) => res && history.push("/login"))
      .catch((e) => toast.error(e?.message, { ...toastObject, toastId: 99 }));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  // console.log(values.gender.toString());
  const body = (
    <>
      {isError ? <BombMessage severity="error">{message}</BombMessage> : <></>}
      <div className="row register">
        {/* New */}
        <div className="l-8 m-10 c-12  register__container">
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
              {/* ADDRESS */}
              <AddressSelect setValues={setValues} />
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

              {/*  */}
              <center>
                <div className="l-4 m-6 c-4 register_form_btn_control">
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
    </>
  );
  return <Loader isLoading={isLoading}>{body}</Loader>;
};

export default Register;
