import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Switch, Link, Route } from "react-router-dom";
import { sliderData, payOnlineData } from "../components/tienich/mockdata";
import "../sass/_tienich.scss";
const Slider = React.lazy(() =>
  import("../components/home/subComponent/Slider")
);
// Option component
const TraGop = React.lazy(() => import("../components/tienich/TraGop"));
const TienDien = React.lazy(() =>
  import("../components/tienich/subComponent/TienDien")
);
const TienNuoc = React.lazy(() =>
  import("../components/tienich/subComponent/TienNuoc")
);
const TienFpt = React.lazy(() =>
  import("../components/tienich/subComponent/TienFpt")
);
const TienInternet = React.lazy(() =>
  import("../components/tienich/subComponent/TienInternet")
);
const BaoHiem = React.lazy(() =>
  import("../components/tienich/subComponent/BaoHiem")
);
const VePhuongTien = React.lazy(() =>
  import("../components/tienich/subComponent/VePhuongTien")
);
const YDuoc = React.lazy(() =>
  import("../components/tienich/subComponent/YDuoc")
);
const TraSau = React.lazy(() =>
  import("../components/tienich/subComponent/TraSau")
);
const XeMayOTo = React.lazy(() =>
  import("../components/tienich/subComponent/XeMayOTo")
);
const CovenientService = () => {
  const [dataS, setDataS] = useState(sliderData);
  const [dataPO, setDataPO] = useState(payOnlineData);
  const [activeSer, setActiveSer] = useState(0);
  useEffect(() => {
    setDataS(sliderData);
    setDataPO(payOnlineData);
  }, [dataS]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    navArr: true,
    dots: true,
  };
  return (
    <div className="conSerPageWrap grid wide">
      {/* Slider */}
      <div className="csp__slider">
        <Slider data={dataS} settings={settings} />
      </div>
      {/* Pay online select */}
      <div className="csp__payol ">
        {/* Tittle */}
        <div className="payol__title row">
          <h1>chọn dịch vụ thanh toán online</h1>
        </div>
        {/* Content */}
        <ul className="payol__list row">
          {dataPO.map((v, i) => {
            return (
              <Link
                onClick={() => setActiveSer(i)}
                to={v.link}
                key={i}
                className="payol__item col l-24 m-3   -4"
              >
                <div
                  className={`payol__item--nonactive ${
                    activeSer === i ? "payol__item--active" : ""
                  }`}
                ></div>
                <div className="item__icon">
                  <LazyLoadImage src={v.path} />
                </div>
                <div className="item__title">{v.content}</div>
              </Link>
            );
          })}
        </ul>
      </div>
      {/* Main content */}
      <div className="csp__content row">
        <Switch>
          <Route path="/" exact>
            Helu
          </Route>
          <Route path="/tien-ich/tien-dien" component={TienDien} />
          <Route path="/tien-ich/tien-nuoc" component={TienNuoc} />
          <Route path="/tien-ich/thanh-toan-tra-gop" component={TraGop} />
          <Route path="/tien-ich/tien-fpt" component={TienFpt} />
          <Route path="/tien-ich/tien-internet" component={TienInternet} />
          <Route path="/tien-ich/bao-hiem" component={BaoHiem} />
          <Route path="/tien-ich/ve-tau-xe" component={VePhuongTien} />
          <Route path="/tien-ich/thanh-toan-y-duoc" component={YDuoc} />
          <Route path="/tien-ich/cuoc-tra-sau" component={TraSau} />
          <Route path="/tien-ich/bao-hiem-o-to" component={TraSau} />
        </Switch>
      </div>
    </div>
  );
};

export default CovenientService;
