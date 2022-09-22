import React from "react";
import "./../../assets/css/tabletlaptop/csscomponents.css";
import TopSlider from "../phone/Banner";
import PriceShock from "./subComponents/PriceShock";
import Phoneold from "./subComponents/Phoneold";
import Tabletold from "./subComponents/Tabletold";
import Accessoryold from "./subComponents/Accessoryold";
import Clockold from "./subComponents/Clockold";
import Clockthanhliold from "./subComponents/Clockthanhliold";
import Laptopold from "./subComponents/Laptopold";
import LCDPCold from "./subComponents/LCDPCold";
import Comment from "./subComponents/Comment";

import { Switch, Route, Link } from "react-router-dom";

const MainProductOld = () => {
  return (
    <div className="nenxam">
      <div className="paddingtoppx"></div>
      <TopSlider />
      <div className="the1menu">
        <div className="thebaotrumngoai">
          <div className="themenubentrai">
            <ul>
              <li>
                <Link className="mauchu" to="/mainproductold/giasoc">
                  <i class="fa-brands fa-hotjar"></i>&ensp;Giá sốc
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/phoneold">
                  Điện thoại cũ
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/tabletold">
                  Tablet cũ
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/laptopold">
                  Laptop cũ
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/clockold">
                  Đồng hồ cũ
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/clockthanhliold">
                  Đồng hồ thanh lí
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/accessoryold">
                  Phụ kiện cũ
                </Link>
              </li>
              <li>
                <Link className="mauchu" to="/mainproductold/LDDPCold">
                  LCS, PC cũ
                </Link>
              </li>
            </ul>
          </div>
          <div className="themenubenphai">
            <div className="tinhthanh">
              &ensp;
              <i class="fa-solid fa-location-dot"></i>&ensp;Tỉnh thành:
            </div>
            <select className="listprovince">
              <option>Toàn quốc</option>
              <option>An Giang</option>
              <option>Bạc Liêu</option>
              <option>Bến Tre</option>
              <option>Cà Mau</option>
              <option>Cần Thơ</option>
              <option>Đồng Tháp</option>
              <option>Hậu Giang</option>
              <option>Kiên Giang</option>
              <option>Long An</option>
            </select>
            <div className="therong"></div>
            <div className="chinhsachdoitra">Chính sách đổi trả</div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/mainproductold/phoneold">
          <Phoneold />
        </Route>
        <Route path="/mainproductold/giasoc">
          <PriceShock />
        </Route>
        <Route path="/mainproductold/tabletold">
          <Tabletold />
        </Route>
        <Route path="/mainproductold/laptopold">
          <Laptopold />
        </Route>
        <Route path="/mainproductold/clockold">
          <Clockold />
        </Route>
        <Route path="/mainproductold/clockthanhliold">
          <Clockthanhliold />
        </Route>
        <Route path="/mainproductold/accessoryold">
          <Accessoryold />
        </Route>
        <Route path="/mainproductold/LDDPCold">
          <LCDPCold />
        </Route>
        <PriceShock />
      </Switch>
      <Comment />
    </div>
  );
};

export default MainProductOld;
