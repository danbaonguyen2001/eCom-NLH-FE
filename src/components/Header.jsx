import React from "react";
import "../assets/css/layout/header.css";
const Banner = React.lazy(() => import("../components/header/Banner.jsx"));
const HeaderContent = React.lazy(() =>
  import("../components/header/HeaderContent.jsx")
);
const Header = () => {
  return (
    <div className="headerWrapper grid  ">
      <Banner />
      {/* Header */}
      {/* Header - Top */}
      {/* Header - Main */}
      <HeaderContent />
    </div>
  );
};

export default Header;
