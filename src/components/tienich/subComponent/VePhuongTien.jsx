import React from "react";

import "../../../sass/tienich/_scCommon.scss";
// img

// data
import { vCompany } from "../subMockData";
// component
const Form = React.lazy(() => import("../subComponent/Form"));
const Company = React.lazy(() => import("../subComponent/Company"));

const VePhuongTien = () => {
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
                  <div className="step__title">Chọn hãng</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Provider */}
                <Company companies={vCompany} />
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
                  inputs={[
                    "Mã hợp đồng, mã khách hàng",
                    "Số điện thoại liên hệ",
                  ]}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default VePhuongTien;
