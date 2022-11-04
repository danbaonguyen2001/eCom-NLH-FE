import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../sass/layout/footer.scss";
import { Link } from "react-router-dom";
import { arrI, brandArr } from "../components/footerData/iconData";
import moreI from "../assets/images/layout/footer/moreI.png";
const Footer = () => {
  const [hiddenFC, setHiddenFc] = useState(true);
  const [expandFC, setExpandFc] = useState(false);
  const moreClickHandler = () => {
    setHiddenFc(!hiddenFC);
    setExpandFc(!expandFC);
  };

  return (
    <div className={` ftWrap grid `}>
      {/* Top */}
      <div className={`ft__top wide row ${expandFC ? "expand__FC" : ""}`}>
        {/* Col 1 */}
        <div className="top__col col l l-3 m-6 c-12">
          <ul className="f-listmenu">
            <li>
              <Link
                target="_blank"
                to="/tin-tuc/chuong-trinh-tich-diem-danh-cho-khach-hang-than-thiet-1434806"
              >
                Tích điểm Quà tặng VIP
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/lich-su-mua-hang">
                Lịch sử mua hàng
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/daily">
                Cộng tác bán hàng cùng TGDĐ
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/tra-gop">
                Tìm hiểu về mua trả góp
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/bao-hanh">
                Chính sách bảo hành
              </Link>
            </li>
            {/* <li>
              <Link
                to="/"
                onClick={moreClickHandler}
                className="arrow showtaga"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-4px",
                }}
              >
                <p className="p">Xem thêm</p>
                <LazyLoadImage
                  style={{ width: "24px", height: "24px" }}
                  src={moreI}
                />
              </Link>
            </li> */}
            {/* <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/chinh-sach-bao-hanh-san-pham">
                Chính sách đổi trả
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/giao-hang">
                Giao hàng &amp; Thanh toán
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/huong-dan-mua-hang">
                Hướng dẫn mua online
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/b2b">
                Bán hàng doanh nghiệp
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/phieu-mua-hang">
                Phiếu mua hàng
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="https://hddt.thegioididong.com">
                In hóa đơn điện tử
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/tos">
                Quy chế hoạt động
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/noi-quy-cua-hang">
                Nội quy cửa hàng
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/chat-luong-phuc-vu">
                Chất lượng phục vụ
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link
                target="_blank"
                to="/tin-tuc/can-trong-voi-nhung-sieu-thi-thegioididong-khong-chinh-chu--683321"
              >
                Cảnh báo giả mạo
              </Link>
            </li>
            <li className={`${hiddenFC ? "hidden__FC" : "show__FC"}`}>
              <Link target="_blank" to="/chinh-sach-khui-hop-apple">
                Chính sách khui hộp sản phẩm Apple
              </Link>
            </li> */}
          </ul>
        </div>
        {/* Col 2 */}
        <div className="top__col col l-3 m-6 c-12">
          <ul className="f-listmenu">
            <li>
              <Link target="_blank" to="https://mwg.vn">
                Giới thiệu công ty (MWG.vn)
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://vieclam.thegioididong.com">
                Tuyển dụng
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/lien-he">
                Gửi góp ý, khiếu nại
              </Link>
            </li>
            <li>
              <Link target="_blank" to="/he-thong-sieu-thi-the-gioi-di-dong">
                Tìm siêu thị (3.219 shop)
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                className="linkversion"
                to="https://www.thegioididong.com/?sclient=mobile"
              >
                Xem bản mobile
              </Link>
            </li>
          </ul>
        </div>
        {/* Col 3 */}
        <div className="top__col col l-3 m-6 c-12">
          <div className="f-listtel">
            <p className="f-listtel__title">
              <strong>Tổng đài hỗ trợ</strong>
              (Miễn phí gọi){" "}
            </p>
            <p className="f-listtel__content">
              <span>Gọi mua:</span>{" "}
              <Link className="blue" to="tel:18001060">
                1800.1060
              </Link>{" "}
              (7:30 - 22:00)
            </p>
            <p className="f-listtel__content">
              <span>Kỹ thuật:</span>{" "}
              <Link className="blue" to="tel:18001763">
                1800.1763
              </Link>{" "}
              (7:30 - 22:00)
            </p>
            <p className="f-listtel__content">
              <span>Khiếu nại:</span>{" "}
              <Link className="blue" to="tel:18001062">
                1800.1062
              </Link>{" "}
              (8:00 - 21:30)
            </p>
            <p className="f-listtel__content">
              <span>Bảo hành:</span>{" "}
              <Link className="blue" to="tel:18001064">
                1800.1064
              </Link>{" "}
              (8:00 - 21:00)
            </p>
          </div>
        </div>
        {/* Col 4 */}
        <div className="top__col col l-3 m-6 c-12">
          <div className="f-social">
            <Link
              to="https://www.facebook.com/thegioididongcom"
              className="link-fb"
            >
              <LazyLoadImage src={arrI[0].path} />
              <p>{arrI[0].content}</p>
            </Link>
            <Link
              to="https://www.youtube.com/user/TGDDVideoReviews"
              className="link-ytb"
            >
              <LazyLoadImage src={arrI[1].path} />
              <p>{arrI[1].content}</p>
            </Link>
          </div>
          <div className="f-certify">
            {arrI.map((v, i) => {
              let certify = v.icon.split(" ");
              return certify[1] === "certificate" ? (
                <Link key={i} target="_blank" to={v.link}>
                  <LazyLoadImage src={v.path} />
                </Link>
              ) : null;
            })}
            <Link
              target="_blank"
              to="http://online.gov.vn/Home/WebDetails/20090"
            >
              <i className="icon-congthuong"></i>
            </Link>
          </div>
          <div className="f-website">
            <div className="footer__logo">
              <p className="footer__logo-hd">Website cùng tập đoàn</p>
              <ul className="footer__logo-list row">
                {brandArr.map((v, i) => {
                  return (
                    <li key={i} className="col l-3">
                      <Link target="_blank" to={v.link} title={v.content}>
                        <LazyLoadImage src={v.path} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Under */}
      <div className="ft__under row">
        <p>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH
          &amp; ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông
          Tin và Truyền Thông cấp ngày 04/06/2020.
          <br />
          Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện
          thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm
          nội dung: Huỳnh Văn Tốt.{" "}
          <Link target={"_blank"} to="/thoa-thuan-su-dung-trang-mxh">
            Xem chính sách sử dụng
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
