import React, { useEffect, useState } from "react";
import { Input, Box, Button, TextField } from "@material-ui/core";
import { v4 } from "uuid";
//token Handlers
//
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";
// selector
// Controller
import authController from "../../features/auth/functions";
import { toast } from "react-toastify";

const Login = () => {
  // fake data
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // navigate
  const history = useHistory();
  const handleNavigate = () => {
    history.push("/");
  };
  // init
  useEffect(() => {}, []);
  useEffect(() => {}, [data.email, data.password]);

  // Show Fake acc

  const submitHandler = async (e) => {
    e.preventDefault();
    let { email, password } = data;
    let result = await authController.login({ email, password });

    if (result) {
      email = "";
      password = "";
      setData({
        ...data,
        email,
        password,
      });
      // success

      handleNavigate();
    } else {
      toast.error(`Tài khoản hoặc mật khẩu không chính xác`,{
        position: "top-right",
        autoClose:5000,
        closeOnClick:true
      })
    }
  };
  // create fake account
  const createFakeAcc = (e) => {
    e.preventDefault();
    setShow(!show);

    setData({
      ...data,
      email: v4(),
      password: v4(),
    });
  };
  return (
    <div>
      <Box
        component="form"
        style={{ width: "600px", margin: "0 auto" }}
        sx={{
          margin: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => submitHandler(e)}
      >
        <TextField
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </Box>
      {/* Fake register button */}
      <Box
        component="form"
        style={{ width: "600px", margin: "0 auto" }}
        sx={{
          margin: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => createFakeAcc(e)}
      >
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create account
        </Button>
        <TextField
          style={
            show
              ? {
                  display: "flex",
                }
              : {
                  display: "none",
                }
          }
          id="outlined-textarea"
          label="Multiline Placeholder"
          multiline
          value={`email:${data.email}  and  password:${data.password}`}
        />
      </Box>
    </div>
  );
};

export default Login;
