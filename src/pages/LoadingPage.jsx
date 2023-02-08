import React from "react";
import "../sass/_loader.scss";
import logo from "../assets/images/icon.png";
const LoadingPage = () => {
  return (
    <div className="loading_wrap">
      <div class="lds-roller">
        <div>
          <img className="loader__logo" src={logo} />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingPage;
