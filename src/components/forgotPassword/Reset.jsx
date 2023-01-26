import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import {
  FormControl,
  TextField,
  Button,
  LinearProgress,
  Stack,
} from "@mui/material";
import authController from "../../features/auth/functions";
import PasswordBox from "./PasswordBox";
//password check

const Reset = ({ history }) => {
  const [newToken, setNewToken] = useState(false);
  const [secure, setSecure] = useState(0);
  const [token, setToken] = useState(null);

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleChangePassword = () => {
    if (token && password) {
      authController.resetPassword({ token, password }).then((res) => {
        if (res?.data?.success) {
          toast.success(res?.data?.message, toastObject);
          history.push("/login");
        } else {
          setNewToken(true);
          toast.error(
            `Mã xác thực không chính xác hoặc hết hạn ${res?.data?.message}`,
            toastObject
          );
        }
      });
    } else {
      toast.error(`Chưa nhập đầy đủ thông tin`, toastObject);
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
      <PasswordBox
        setSecure={setSecure}
        password={password}
        setPassword={setPassword}
        secure={secure}
        rePassword={rePassword}
        setRePassword={setRePassword}
      />
      {/* <TextField
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
      /> */}
      {/* <TextField
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
      /> */}
      <LinearProgress
        sx={{ width: "80%", height: "14px", borderRadius: "4px" }}
        value={secure}
        variant="determinate"
      />
      <Stack
        flexDirection="row"
        sx={{ width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ fontSize: 12, margin: "10px" }}
          onClick={() => history.push(`/password_reset`)}
          disabled={!newToken}
        >
          Gửi lại
        </Button>
        <Button
          sx={{ width: "30%", fontSize: 12, margin: "10px 0" }}
          variant="outlined"
          onClick={handleChangePassword}
          type="submit"
          disabled={!token || !password || rePassword !== password }
        >
          Đổi mật khẩu
        </Button>
      </Stack>
    </FormControl>
  );
};

export default Reset;
