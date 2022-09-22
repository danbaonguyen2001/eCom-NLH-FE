import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
//
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useRegisterMutation,
  useVerifyMutation,
} from "../../features/auth/authApiSlice";

//
import authController from "../../features/auth/functions";


const Register = () => {
  // email verify
  const [waitingEmail, setWaitingEmail] = useState("");
  // Verify state
  const history = useHistory();

  //// Body
  // Register
  const RegisterForm = () => {
    // init
    const initialState = {
      name: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
    };
    const [data, setData] = useState(initialState);
    // Trigger

    // const [register, { isLoading }] = useRegisterMutation();

    const submitHandle = async (e) => {
      e.preventDefault();
      let { email, password, gender, phone, address, name } = data;
      const result = await authController.register({
        email,
        password,
        gender,
        phone,
        address,
        name,
      });
      console.log(result);
      if (result) {
        // success
        history.push("/registerVerify");
        //
        setWaitingEmail(email);
      } else {
        console.log("Cant register");
      }
      setData(initialState);
    };
    return (
      <Box
        style={{ width: "1200px", margin: "0 auto" }}
        component={"form"}
        sx={{
          margin: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => submitHandle(e)}
      >
        {/* email */}
        <TextField
          fullWidth
          type="text"
          placeholder="email"
          value={data.email}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
        {/* address */}
        <TextField
          fullWidth
          type="text"
          placeholder="address"
          value={data.address}
          onChange={(e) =>
            setData({
              ...data,
              address: e.target.value,
            })
          }
        />
        {/* gender */}
        <TextField
          fullWidth
          type="text"
          placeholder="gender"
          value={data.gender}
          onChange={(e) =>
            setData({
              ...data,
              gender: e.target.value,
            })
          }
        />
        {/* phone */}
        <TextField
          fullWidth
          type="text"
          placeholder="phone"
          value={data.phone}
          onChange={(e) =>
            setData({
              ...data,
              phone: e.target.value,
            })
          }
        />
        {/* password */}
        <TextField
          fullWidth
          type="text"
          placeholder="password"
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        {/* name */}
        <TextField
          fullWidth
          type="text"
          placeholder="name"
          value={data.name}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
        />
        {/* Submit */}
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </Box>
    );
  };
  /// Verify
  const VerifyForm = () => {
    let checkEmail = waitingEmail || "Dang ky de duoc nhan code";
    // init
    const [verifyData, setVerifyData] = useState({
      token: "",
      email: checkEmail,
    });
    // const [verify] = useVerifyMutation();
    // trigger
    // const [verify,{error,data,isError}] = useVerifyMutation();

    const submitHandle = async (e) => {
      e.preventDefault();
      let { token, email } = verifyData;
      const result = await authController.verify({ token, email });
      console.log(result);
      console.log(verifyData);
      if (result) {
        history.push("/login");
      } else {
        console.log("Cant verify");
      }
      // token,email
    };
    return (
      <Box
        style={{ width: "1200px", margin: "0 auto" }}
        component={"form"}
        sx={{
          margin: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => submitHandle(e)}
      >
        {/* Email */}
        <TextField
          fullWidth
          type="text"
          placeholder="email"
          value={verifyData.email}
          onChange={(e) =>
            setVerifyData({
              ...verifyData,
              email: e.target.value,
            })
          }
        />
        {/* Token */}
        <TextField
          fullWidth
          type="text"
          placeholder="Code"
          value={verifyData.token}
          onChange={(e) =>
            setVerifyData({
              ...verifyData,
              token: e.target.value,
            })
          }
        />

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Verify
        </Button>
      </Box>
    );
  };
  // main
  // const body = !navVerify ? <RegisterForm /> : <VerifyForm />;
  // Return
  return (
    <Switch>
      <Route path="/registerVerify" component={VerifyForm} />
      <Route path="/register" component={RegisterForm} />
    </Switch>
  );
};

export default Register;
