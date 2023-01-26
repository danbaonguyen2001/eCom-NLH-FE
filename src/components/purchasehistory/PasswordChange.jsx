import React, { useState } from "react";
import { Paper, Divider, FormControl, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { toastObject } from "../../constants/toast";
import authHandler from "../../features/auth/functions";
import { useHistory } from "react-router-dom";
import PasswordBox from "../forgotPassword/PasswordBox";

const PasswordChange = () => {
  const history = useHistory();
  const [secure, setSecure] = useState(0);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const handleChangePassword = () => {
    authHandler
      .changePassword({ oldPassword, newPassword })
      .then((res) => {
        if (res?.data?.success) {
          history.push(`/purchasehistory/userinfo`);
          toast.success(`Đổi mật khẩu thành công`, {
            ...toastObject,
            toastId: 200,
          });
        }
      })
      .catch((e) =>
        toast.error(
          `Không thể thay đổi mật khẩu lúc này, thử lại: ${e?.message}`,
          {
            ...toastObject,
            toastId: 99,
          }
        )
      );
  };
  return (
    <Paper sx={{ minHeight: "20rem", width: "50%", margin: "3em auto" }}>
      <Divider textAlign="center" sx={{ fontSize: 16, fontWeight: "bold" }}>
        Đổi mật khẩu
      </Divider>
      <FormControl
        fullWidth
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {/* Old password */}
        <TextField
          autoFocus
          sx={{ margin: "20px 0 ", width: "100%" }}
          InputLabelProps={{ sx: { fontSize: 15 } }}
          required
          label="Mật khẩu cũ"
          type="password"
          value={oldPassword}
          variant="outlined"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        {/* New password */}
        <PasswordBox
          password={newPassword}
          setPassword={setNewPassword}
          rePassword={reNewPassword}
          setRePassword={setReNewPassword}
          secure={secure}
          setSecure={setSecure}
        />

        <Button
          sx={{ width: "30%", fontSize: 12, margin: "10px 0" }}
          variant="outlined"
          onClick={handleChangePassword}
          type="submit"
          disabled={!newPassword || newPassword !== reNewPassword}
        >
          Thay đổi mật khẩu
        </Button>
      </FormControl>
    </Paper>
  );
};

export default PasswordChange;
