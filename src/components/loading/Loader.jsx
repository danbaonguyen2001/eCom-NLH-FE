// MASK Loading
import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index:1;
  pointer-events:${(props) => (props.show ? "none" : "all")};
  &::after {
    content: "";
    opacity: 0.6;
    z-index:2;
    display: ${(props) => (props.show ? "block" : "none")};
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-bottom: 3.2rem;
  }
=
`;
const SpinnerElement = styled.div`
  z-index: 4;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: relative;
  top: 18rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const Loader = ({ children, isLoading }) => {
  return (
    <Layer show={isLoading}>
      <SpinnerElement show={isLoading}>
        <CircularProgress sx={{ width: "70px", height: "70px" }} />
      </SpinnerElement>
      {children}
    </Layer>
  );
};
Loader.defaultProps = {
  show: false,
};
export default Loader;
