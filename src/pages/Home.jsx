import React, { useEffect, useState } from "react";
import "../assets/css/layout/grid.css";
import "../assets/css/home/index.css";
import "react-toastify/dist/ReactToastify.css";
import cartHandler from "../features/cart/function";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoginStatus,
  selectCurrentUser,
  reset,
  selectAuthState,
} from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useMemo } from "react";
import Loader from "../components/loading/Loader";
const BigBanner = React.lazy(() => import("../components/home/BigBanner"));
const OptionPromote = React.lazy(() =>
  import("../components/home/OptionPromote")
);
const EventList = React.lazy(() => import("../components/home/EventList"));
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
  const dispatch = useDispatch();
  // select
  const { name, avatar } = useSelector(selectCurrentUser);
  //
  //
  const status = useSelector(selectLoginStatus) || false;
  useMemo(() => {
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

  const home = (
    <div className="bigBanner">
      <BigBanner />
      <div className="mainContent">
        <OptionPromote />
        <EventList />
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
  return  home;
};
export default Home;
