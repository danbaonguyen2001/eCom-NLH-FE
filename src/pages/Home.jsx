import React, { useEffect, useState } from "react";
import "../assets/css/layout/grid.css";
import "../assets/css/home/index.css";
import "react-toastify/dist/ReactToastify.css";
import cartHandler from "../features/cart/function";
import { useSelector } from "react-redux";
import {
  selectLoginStatus,
  selectCurrentUser,
} from "../features/auth/authSlice";
import { toast } from "react-toastify";
const BigBanner = React.lazy(() => import("../components/home/BigBanner"));
const OptionPromote = React.lazy(() =>
  import("../components/home/OptionPromote")
);
const LuckyCircle = React.lazy(() => import("../components/home/LuckyCircle"));
const GoldenWeek = React.lazy(() => import("../components/home/GoldenWeek"));
const TrendingShop = React.lazy(() =>
  import("../components/home/TrendingShop")
);
const CategoryShop = React.lazy(() =>
  import("../components/home/CategoryShop")
);
const DiscountPayOl = React.lazy(() =>
  import("../components/home/DiscountPayOl")
);
const ServiceConvenient = React.lazy(() =>
  import("../components/home/ServiceConvenient")
);
const RecommendShop = React.lazy(() =>
  import("../components/home/RecommendShop")
);
const TechNews = React.lazy(() => import("../components/home/TechNews"));
const TradeMark = React.lazy(() => import("../components/home/TradeMark"));
const NewChain = React.lazy(() => import("../components/home/NewChain"));
const BHX = React.lazy(() => import("../components/home/BHX"));

const Home = () => {
  // select
  const { name, avatar } = useSelector(selectCurrentUser);
  //
  //
  const status = useSelector(selectLoginStatus) || false;
  useEffect(() => {
    // check auth
    if (status) {
      toast.success(
        `Chào ${name
          .split(" ")
          .slice(0, 2)
          .join(" ")}, chúc bạn ngày mới vui vẻ`,
        {
          position: "top-right",
          toastId: 2,

          autoClose: 5000,
          closeOnClick: true,
        }
      );
    } else {
      toast.info(`Chào bạn, xác thực tài khoản ngay thôi`, {
        position: "top-right",
        toastId: 1,
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  }, [status]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bigBanner">
      <BigBanner />
      <div className="mainContent">
        <OptionPromote />
        <LuckyCircle />
        <GoldenWeek />
        <TrendingShop />
        <CategoryShop />
        <DiscountPayOl />
        <ServiceConvenient />
        <RecommendShop />
        <TechNews />
        <TradeMark />
        <NewChain />
        <BHX />
      </div>
    </div>
  );
};
export default Home;
