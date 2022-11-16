import { React, useEffect, useState } from "react";
// import "../assets/css/register/testmain.css";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../assets/images/register/login.png";
import FormInput from "../components/register/FormInput.jsx";
import "../sass/auth/_register.scss";
import { getDistrict, getWard, getProvince } from "../apis/apiShipment";
// Function
import authController from "../features/auth/functions";
const Register = () => {
  // ADDRESS STATE
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState({
    ID: 269,
    value: "",
  });
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState({
    ID: 2264,
    value: "",
  });
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState({
    ID: 80213,
    value: "",
  });
  // ADDRESS FETCH
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getProvince()
      .then((res) => {
        const { data } = res.data;
        setProvinces(data);
        setProvince({
          ID: data[0]?.ProvinceID,
          value: data[0]?.ProvinceName,
        });
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, []);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getDistrict(province.ID)
      .then((res) => {
        const { data } = res.data;
        setDistricts(data);
        setDistrict({
          ID: data[0]?.DistrictID,
          value: data[0]?.DistrictName,
        });
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [province]);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getWard(district.ID)
      .then((res) => {
        const { data } = res.data;
        setWard({
          ID: data[0]?.WardCode,
          value: data[0]?.WardName,
        });
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [district]);
  //
  const [values, setValues] = useState({
    email: "",
    password: "",
    gender: "man",
    confirmPassword: "",
    phone: "",
    addresses: [],
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
      placeholder: "Nhập số nhà",
      errorMessage: "Số nhà không hợp lệ",
      required: true,
    }
  ];

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = values.email;
    let password = values.password;
    let gender = values.gender;
    let phone = values.phone;
    let name = values.name;
    // Xu ly
    try {
      let result = await authController.register({
        email,
        password,
        gender,
        phone,
        name,
      });
      if (result) {
        let emailCode = values.email;
        toast.success(
          `Tài khoản của bạn đã được tạo, kiểm tra mail để xác thực tài khoản`,
          {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          }
        );
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
    } catch (e) {
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
            {/* ADDRESS */}

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
