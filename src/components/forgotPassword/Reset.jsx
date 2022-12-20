import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import { FormControl, TextField, Button, LinearProgress } from "@mui/material";
import authController from "../../features/auth/functions";
//password check

const Reset = ({history}) => {
  const [secure, setSecure] = useState(0);
  const [token, setToken] = useState(null);
  const passwordCheck = (e) => {
    //pattern
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    const passwordCheck = e.target.value;

    const keyL = passwordCheck.match(lowerCaseLetters) ? true : false;
    const keyN = passwordCheck.match(upperCaseLetters) ? true : false;
    const keyU = passwordCheck.match(numbers) ? true : false;

    //check count
    let count = 0;
    if (keyL) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    if (keyU) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    if (keyN) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    setSecure(count * 30);
    if (passwordCheck.length > 8) setSecure(count * 30 + 10);
  };
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleChangePassword = () => {
    if (token && password) {
      authController.resetPassword({ token, password }).then((res) => {
        if (res?.data?.success) {
          toast.success(res?.data?.message, toastObject);
          history.push("/login")
        } else {
          toast.error(res?.data?.message, toastObject);
        }
      });
    }
  };

  return (
    <FormControl
      fullWidth
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <TextField
        autoFocus
        sx={{ margin: "20px 0 ", width: "100%" }}
        InputLabelProps={{ sx: { fontSize: 15 } }}
        required
        label="Mã xác thực"
        error={!token}
        type="text"
        value={token}
        variant="outlined"
        onChange={(e) => setToken(e.target.value)}
        autoComplete={false}
      />
      <TextField
        sx={{ margin: "20px 0 ", width: "100%" }}
        InputLabelProps={{ sx: { fontSize: 15 } }}
        required
        label="Mật khẩu mới"
        helperText={
          secure !== 100
            ? `Mật khẩu bắt buộc có độ dài hơn 8 kí tự và nên đầy đủ [A-Z],[a-z],[0-9]`
            : `Mật khẩu an toàn`
        }
        error={password.length < 8}
        type="password"
        value={password}
        variant="outlined"
        onChange={(e) => {
          passwordCheck(e);
          setPassword(e.target.value);
        }}
      />
      <TextField
        sx={{ margin: "20px 0 ", width: "100%" }}
        InputLabelProps={{ sx: { fontSize: 15 } }}
        required
        label="Nhập lại mật khẩu"
        type="password"
        value={rePassword}
        variant="outlined"
        onChange={(e) => setRePassword(e.target.value)}
        helperText={
          rePassword !== password ? `Mật khẩu không trùng khớp` : `Nhập lại`
        }
        error={rePassword !== password}
      />
      <LinearProgress
        sx={{ width: "80%", height: "14px", borderRadius: "4px" }}
        value={secure}
        variant="determinate"
      />
      <Button
        sx={{ width: "30%", fontSize: 12, margin: "10px 0" }}
        variant="outlined"
        onClick={handleChangePassword}
        type="submit"
        disabled={!token || !password || rePassword !== password}
      >
        Đổi mật khẩu
      </Button>
    </FormControl>
  );
};

export default Reset;
