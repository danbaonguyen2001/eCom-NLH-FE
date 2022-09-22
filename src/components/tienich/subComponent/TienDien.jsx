import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "../../../sass/tienich/_scCommon.scss";

// img
import strCode from "../../../assets/images/tienich/formImage/strCode.png"
import strInfo from "../../../assets/images/tienich/formImage/strInfo.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import elecF from "../../../assets/images/tienich/formImage/elec.png"
// component
const Form = React.lazy(()=>import("../subComponent/Form"))
const ProvinceSelect = React.lazy(()=>import("../subComponent/ProvinceSelect"))


const TienDien = () => {
  // Input
  const [province, setProvince] = useState("");

  const handleChange = (event) => {
    setProvince(event.target.value);
  };
  return (
    <div className="scSubWrap sc__TdWrap grid wide">
      <div className="scSub__row scTd__row row">
        {/* Col 1 */}
        <div className="leftCol col` l-7 m-6 c-12">
          {/* Row 1 - Main Title */}

          <div className="leftCol__row">
            <h1 className="sc__title">đóng tiền điện</h1>
          </div>
          {/* Row 2 - Main Content */}
          {/* Step 1 */}
          <div className="leftCol__row">
            <ul className="sc__services">
              <li className="sc__service">
                {/* Row 1 - Step Title */}
                <div className="sc__step row">
                  <div className="step__num">1</div>
                  <div className="step__title">Chọn tỉnh thành</div>
                </div>

                {/* Row 2 - Step Content */}
                {/* Select province */}
                <div className="row">
                  <ProvinceSelect province={province} handleChange={handleChange}/>
                </div>
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
                <Form action="/checkContractCode" submit="Xem hóa đơn và thanh toán" inputs={["Mã khách hàng","Số điện thoại liên hệ"]} />

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
            <LazyLoadImage src={elecF} />
            {/* Bot */}
            <h1 className="right__nextTitle row">thông tin hỗ trợ</h1>
            <ul className="right__list row">
              <li className="right__item">
                <LazyLoadImage
                  className="col"
                  src={strCode}
                />
                <div className="col">
                  <h1 className="stepR__title ">Số hợp đồng</h1>
                  <p>
                    Gồm chữ và số, được bắt đầu bằng PCxxxxxx{"(Đổ data mỗi vùng khác nhau"}. Khách hàng có thể
                    xem Mã khách hàng trên Giấy thông báo tiền điện hoặc Hóa đơn
                    tiền điện hoặc liên hệ tổng đài Điện lực 19001909
                  </p>
                </div>
              </li>
              <li className="right__item">
                <LazyLoadImage
                  className="col"
                  src={strInfo}
                />
                <div className="col">
                  <h1 className="stepR__title">Thông tin thanh toán</h1>
                  <span className="underLine">Số tiền thanh toán</span>
                  <p>
                    : Thanh toán đủ số tiền nợ.
                  </p>
                  <span className="Hóa đơn">Số tiền thanh toán</span>
                  <p>
                    : TGDĐ không hỗ trợ xuất hóa đơn cho dịch vụ này, Khách hàng có thể tự in hóa đơn điện tử {<Link to="/">tại đâyS</Link>}
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

export default TienDien;
