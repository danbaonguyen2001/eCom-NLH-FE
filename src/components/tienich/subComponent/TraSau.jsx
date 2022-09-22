import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../sass/tienich/_scCommon.scss";
// img
import strInfo from "../../../assets/images/tienich/formImage/strInfo.png";

// data
import { tsCompany } from "../subMockData";
// component
const Form = React.lazy(() => import("../subComponent/Form"));
const Company = React.lazy(() => import("../subComponent/Company"));

const TraSau = () => {
  // Input

  return (
    <div className="scSubWrap sc__TdWrap grid wide">
      <div className="scSub__row scTd__row row">
        {/* Col 1 */}
        <div className="leftCol col l-7 m-6 c-12">
          {/* Row 1 - Main Title */}

          <div className="leftCol__row">
            <h1 className="sc__title">
              ĐÓNG HỘ TIỀN VÉ XE, VÉ TÀU, VÉ MÁY BAY
            </h1>
          </div>
          {/* Row 2 - Main Content */}
          <div className="leftCol__row">
            <ul className="sc__services">
              {/* Step 1 */}
              <li className="sc__service">
                {/* Row 1 - Step Title */}
                <div className="sc__step row">
                  <div className="step__num">1</div>
                  <div className="step__title">Chọn nhà mạng</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Provider */}
                <Company companies={tsCompany} />
              </li>
              {/* Step 2 */}
              <li className="sc__service">
                {/* Row 1 - Step Title */}
                <div className="sc__step row">
                  <div className="step__num">2</div>
                  <div className="step__title">Nhập số điện thoại</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Form */}
                <Form
                  action="/checkContractCode"
                  submit="Kiểm tra cước và thanh toán"
                  inputs={["Số điện thoại"]}
                />
              </li>
            </ul>
          </div>
          {/* */}
        </div>
        {/* Col 2 */}
        <div className="rightCol col l-5 m-6 c-12">
          <div className="rightCol__row">
            {/* Bot */}
            <h1 className="right__nextTitle row">thông tin hỗ trợ</h1>
            <ul className="right__list row">
              <li className="right__item">
                <LazyLoadImage className="col" src={strInfo} />
                <div className="col">
                  <h1 className="stepR__title">Thông tin thanh toán</h1>
                  <span className="underLine">Số tiền thanh toán</span>
                  <p>: Thanh toán đủ số tiền nợ.</p>
                  <span className="underLine">Hóa đơn</span>
                  <p style={{ fontWeight: "bold" }}>- Viettel</p> <br />
                  <p>
                    Khách hàng lấy hóa đơn trực tiếp tại các Cửa hàng Viettel
                    hoặc in hóa đơn điện tử tại đây. Tổng đài hỗ trợ:
                    0983.198.198, 0989.198.198
                    {
                      <Link to="/" style={{ color: "blue" }}>
                        tại đây.
                      </Link>
                    }
                  </p>
                  <p style={{ fontWeight: "bold" }}>- Mobifone</p> <br />
                  <p>
                    Để nhận hóa đơn, Khách hàng soạn NHAN gửi 9223, Mobifone sẽ
                    gửi hóa đơn đến địa chỉ mà Khách hàng đã đăng ký trên hệ
                    thống vào cuối tháng. Tổng đài hỗ trợ kiểm tra lịch sử/
                    thông tin/... thanh toán: 0908.144.144{" "}
                    {
                      <Link to="/" style={{ color: "blue" }}>
                        tại đây.
                      </Link>
                    }
                  </p>
                  <p style={{ fontWeight: "bold" }}>- Vinaphone</p> <br />
                  <p>
                    Thuê bao Vinaphone HCM in hóa đơn điện tử tại đây, thuê bao
                    Vinaphone tỉnh khác thì liên hệ Cửa hàng Vinaphone tỉnh để
                    lấy hóa đơn. Tổng đài hỗ trợ: 0918.68.1111, 0914.18.1111,
                    0912.48.1111
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

export default TraSau;
