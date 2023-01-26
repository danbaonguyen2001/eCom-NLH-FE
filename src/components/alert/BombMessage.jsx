import React, { useMemo, useState } from "react";
import { Alert, AlertTitle, Grid } from "@mui/material";
import { reset } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const CountDownMessage = ({ severity, children, setIsOpen, isOpen }) => {
  const dispatch = useDispatch();
  const [remained, setRemained] = useState(10);
  useMemo(() => {
    const countdown = setInterval(() => {
      setRemained((prev) => {
        return (prev -= 1);
      });
    }, 1000);
    setTimeout(() => {
      isOpen && setIsOpen(false) && dispatch(reset());
      clearInterval(countdown);
    }, 10000);
  }, []);
  return (
    <Grid container alignItems="center">
      <Grid item xs={11}>
        <Alert severity={severity}>
          <AlertTitle>
            <p style={{ fontSize: "1.3rem", textTransform: "capitalize" }}>
              {severity.toString()}
            </p>
          </AlertTitle>
          <p style={{ fontSize: "1.2rem", textTransform: "capitalize" }}>
            <strong>{children}</strong>
            {`. Hide message after ${remained}s`}
          </p>
        </Alert>
      </Grid>
      <Grid
        item
        sx={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          fontSize: "20px",
          textAlign: "center",
        }}
        xs={1}
      >
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpen(false);
            dispatch(reset());
          }}
        >
          X
        </p>
      </Grid>
    </Grid>
  );
};
const BombMessage = ({ severity, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <CountDownMessage
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        severity={severity}
      >
        {children}
      </CountDownMessage>
    )
  );
};
BombMessage.defaultProps = {
  severity: "info",
};
export default BombMessage;
