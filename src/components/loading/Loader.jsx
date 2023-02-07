// MASK Loading
import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  background-color: black;
  opacity: 0.6;
  overflow: hidden;
`;
const SpinnerElement = styled.div`
  z-index: 4;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Loader = ({ children, isLoading, ...rest }) => {
  return (
    <>
      <Layer {...rest} show={isLoading}>
        <SpinnerElement show={isLoading}>
          <CircularProgress sx={{ width: "70px", height: "70px" }} />
        </SpinnerElement>
      </Layer>
      {children}
    </>
  );
};
Loader.defaultProps = {
  show: false,
};
export default Loader;
