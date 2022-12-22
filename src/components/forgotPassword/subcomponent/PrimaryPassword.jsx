import { TextField } from "@mui/material";
import React from "react";

const PrimaryPassword = ({password,setPassword,setSecure,secure}) => {
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
        if (passwordCheck?.length > 8) setSecure(count * 30 + 10);
      };
  return (
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
      error={password?.length < 8}
      type="password"
      value={password}
      variant="outlined"
      onChange={(e) => {
        passwordCheck(e);
        setPassword(e.target.value);
      }}
    />
  );
};

export default PrimaryPassword;
