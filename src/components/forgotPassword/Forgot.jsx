import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import { useHistory } from "react-router-dom";
import authController from "../../features/auth/functions";
const Forgot = ({ history }) => {
  const [email, setEmail] = useState(null);
  const handlerSendEmail = async () => {
    toast.info(`Chờ trong giây lát`, toastObject);
    authController.forgotPassword({ email: email }).then((res) => {
      if (res?.data?.success) {
        toast.success(res?.data?.message, toastObject);
        history.push("/password_reset/change_password");
      } else {
        toast.error(res?.data?.message, toastObject);
      }
    });
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
        label="Email"
        type="email"
        value={email}
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        sx={{ width: "30%", fontSize: 12, margin: "10px 0" }}
        variant="outlined"
        onClick={handlerSendEmail}
        type="submit"
      >
        Gửi mã xác thực
      </Button>
    </FormControl>
  );
};

export default Forgot;
