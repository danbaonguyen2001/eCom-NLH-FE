import { Divider, Paper } from "@mui/material";
import React, { useMemo, useState } from "react";

import { useLocation,useHistory } from "react-router-dom";
import Forgot from "../components/forgotPassword/Forgot";
import Reset from "../components/forgotPassword/Reset";
const ForgotPassword = () => {
  const [state, setState] = useState("forgot");
  const [token, setToken] = useState(null);
  const path = useLocation().pathname;
  const history = useHistory();
  useMemo(() => {
    const token = path.split("/")[2];
    if (token) {
      setState("reset");
      setToken(token);
    } else {
      setState("forgot");
      setToken(null);
    }
  }, [path]);
  return (
    <Paper sx={{ minHeight: "20rem", width: "50%", margin: "3em auto" }}>
      <Divider textAlign="center" sx={{ fontSize: 16,fontWeight:"bold" }}>
        Quên mật khẩu
      </Divider>
      {state === "forgot" ? <Forgot history={history}/> : <Reset history={history} />}
    </Paper>
  );
};

export default ForgotPassword;
