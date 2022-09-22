import React from "react";
import { Link } from "react-router-dom";
import "../../../sass/tienich/_scCommon.scss";
// img
import strCode from "../../../assets/images/tienich/formImage/strCode.png";
import strInfo from "../../../assets/images/tienich/formImage/strInfo.png";
import vnptF from "../../../assets/images/tienich/formImage/vnpt.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
// data
import { internetProvider } from "../subMockData";
// component
const Form = React.lazy(() => import("../subComponent/Form"));
const Provider = React.lazy(() => import("../subComponent/Provider"));

const TienInternet = () => {
  // Input

  return (
    <div className="scSubWrap sc__TdWrap grid wide">
      <div className="scSub__row scTd__row row">
        {/* Col 1 */}
        <div className="leftCol col l-7 m-6 c-12">
          {/* Row 1 - Main Title */}

          <div className="leftCol__row">
            <h1 className="sc__title">đóng tiền internet vnpt</h1>
          </div>
          {/* Row 2 - Main Content */}
          <div className="leftCol__row">
            <ul className="sc__services">
              {/* Step 1 */}
              <li className="sc__service">
                {/* Row 1 - Step Title */}
                <div className="sc__step row">
                  <div className="step__num">1</div>
                  <div className="step__title">Chọn dịch vụ</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Provider */}
                <Provider provider={internetProvider} />
              </li>
              {/* Step 3 */}
              <li className="sc__service">
                {/* Row 1 - Step Title */}
                <div className="sc__step row">
                  <div className="step__num">2</div>
                  <div className="step__title">Nhập thông tin thanh toán</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Form */}
                <Form
                  action="/checkContractCode"
                  submit="Xem hóa đơn và thanh toán"
                  inputs={["Mã khách hàng", "Số điện thoại liên hệ"]}
                />
              </li>
            </ul>
          </div>
          {/* */}
        </div>
        {/* Col 2 */}
        <div className="rightCol col l-5 m-6 c-12">
          <div className="rightCol__row">
            {/* Top */}
            <h1 className="right__title row">hướng dẫn xem mã khách hàng</h1>
            <LazyLoadImage src={vnptF} />
            {/* Bot */}
            <h1 className="right__nextTitle row">thông tin hỗ trợ</h1>
            <ul className="right__list row">
              <li className="right__item">
                <LazyLoadImage className="col" src={strCode} />
                <div className="col">
                  <h1 className="stepR__title ">Mã Khách hàng</h1>
                  <p>
                    Gồm 10 ký tự, bắt đầu bằng IS & 8 số sau. Khách hàng có thể
                    xem Mã khách hàng trên Giấy thông báo cước hoặc Hóa đơn đóng
                    cước hoặc liên hệ tổng đài (028)800.126
                  </p>
                </div>
              </li>
              <li className="right__item">
                <LazyLoadImage className="col" src={strInfo} />
                <div className="col">
                  <h1 className="stepR__title">Thông tin thanh toán</h1>
                  <span className="underLine">Số tiền thanh toán</span>
                  <p>: Thanh toán đủ số tiền nợ.</p>
                  <br />
                  <span className="underLine">Hóa đơn</span>
                  <p>
                    : TGDĐ không hỗ trợ xuất hóa đơn cho dịch vụ này, Khách hàng
                    có thể tự in hóa đơn điện tử{" "}
                    {
                      <Link to="/" style={{ color: "blue" }}>
                        tại đây.
                      </Link>
                    }
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TienInternet;
