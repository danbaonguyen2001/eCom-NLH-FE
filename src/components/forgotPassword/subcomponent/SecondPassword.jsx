import { TextField } from "@mui/material";
import React from "react";

const SecondPassword = ({ rePassword, setRePassword, password }) => {
  return (
    <TextField
      sx={{ margin: "20px 0 ", width: "100%" }}
      InputLabelProps={{ sx: { fontSize: 15 } }}
      required
      label="Nhập lại mật khẩu"
      type="password"
      value={rePassword}
      variant="outlined"
      onChange={(e) => setRePassword(e.target.value)}
      helperText={rePassword !== password ? `Mật khẩu không trùng khớp` : ``}
      error={rePassword !== password}
    />
  );
};

export default SecondPassword;
