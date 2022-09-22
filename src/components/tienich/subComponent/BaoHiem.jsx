import React from "react";
import { Link } from "react-router-dom";
import "../../../sass/tienich/_scCommon.scss";
// img
import strCode from "../../../assets/images/tienich/formImage/strCode.png";
import strInfo from "../../../assets/images/tienich/formImage/strInfo.png";
import vnptF from "../../../assets/images/tienich/formImage/vnpt.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
// data
import { bhCompany, internetProvider } from "../subMockData";
// component
const Form = React.lazy(() => import("../subComponent/Form"));
const Company = React.lazy(() => import("../subComponent/Company"));

const BaoHiem = () => {
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
                  <div className="step__title">Chọn công ty bảo hiểm</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Provider */}
                <Company companies={bhCompany} />
              </li>
              {/* Step 2 */}
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
                  inputs={["Số hợp đồng", "Số điện thoại liên hệ"]}
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
                <LazyLoadImage className="col" src={strCode} />
                <div className="col">
                  <h1 className="stepR__title">Thông tin thanh toán</h1>
                  <span className="underLine">Số hợp đồng</span>
                  <p>
                    : 10 ký tự, gồm 1 chữ cái đầu và 9 số tiếp theo. Khách hàng
                    có thể xem số hợp đồng trên hợp đồng bảo hiểm hoặc liên hệ
                    tổng đài AIA (028)38.122.777 (hỗ trợ từ 8h00 - 17h30, Thứ 2
                    - Thứ 6) để kiểm tra số hợp đồng
                  </p>
                  <br />
                  <span className="underLine">Số tiền thanh toán</span>
                  <p>
                    : Có thể thanh toán nhiều hơn hoặc ít hơn số tiền cần thanh
                    toán hàng tháng (tối thiểu 20.000đ, tối đa 30.000.000đ) và
                    được thanh toán tối đa 3 lần/ tháng{" "}
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

export default BaoHiem;
