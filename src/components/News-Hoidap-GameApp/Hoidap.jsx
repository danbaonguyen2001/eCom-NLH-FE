import React from "react";
import "../../assets/css//tabletlaptop/hoidap.css";
import {
  dataHoidap,
  dataHoidap2,
} from "../ProductOld/subComponents/dataHoidap";

function Itemhoidap({ item }) {
  return (
    <div className="item_hoidap">
      <img src={item.img} alt="" />
      <div className="noidung_item">
        <div className="title_noidung">{item.title}</div>
        <div className="title_noidung_nho">{item.chude}</div>
      </div>
    </div>
  );
}
const Hoidap = () => {
  return (
    <div className="font">
      <div className="thetopHoidap">
        <ul>
          <li className="hoiidapsp">HỎI ĐÁP VỀ SẢN PHẨM</li>
          <li className="dangnhap">
            <i class="fa-solid fa-user-tie"></i>&ensp;Đăng nhập
          </li>
        </ul>
      </div>
      <div className="mainHoidap">
        <div className="col_topic">
          <div className="menuhoidap">
            <nav>
              <ul className="listmenuxx">
                <li className="titlehoidap">CHỦ ĐỀ NỔI BẬT</li>
                <li className="csschoi">
                  <label htmlFor="btn1">
                    Android<span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn1" />
                  <ul>
                    <li>Khôi phục - Reset</li>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>ROOT Android</li>
                    <li>Lỗi thường gặp</li>
                    <li>Sản phẩm - Phiên bản mới</li>
                    <li>Tư vấn chọn mua</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn2">
                    iPhone - IOS<span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn2" />
                  <ul>
                    <li>Sản phẩm phiên bản mới</li>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>Apple ID - iCloud</li>
                    <li>Lỗi thường gặp</li>
                    <li>Jailbreak IOS</li>
                    <li>Tư vấn chọn mua</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn3">
                    Mạng xã hội<span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn3" />
                  <ul>
                    <li>Line</li>
                    <li>Ứng dụng khác</li>
                    <li>Zalo</li>
                    <li>Youtube</li>
                    <li>Messenger Facebook</li>
                    <li>Instagram</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn4">
                    Thiết bị thông minh<span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn4" />
                  <ul>
                    <li>Smartcar - Smart Motor</li>
                    <li>Smart Home</li>
                    <li>Phụ kiện thông minh</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn5">
                    Thủ thuật văn phòng<span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn5" />
                  <ul>
                    <li>Google Sheet</li>
                    <li>Word</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn6">
                    Máy tính - Laptop - Tablet
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn6" />
                  <ul>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>PC - Laptop Windowns</li>
                    <li>Máy Mac, Macbook (MacOS)</li>
                    <li>Tư vấn mua sản phẩm</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn7">
                    Máy tính - Laptop - Tablet
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn7" />
                  <ul>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>PC - Laptop Windowns</li>
                    <li>Máy Mac, Macbook (MacOS)</li>
                    <li>Tư vấn mua sản phẩm</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn8">
                    Đồng hồ - Mắt kính
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn8" />
                  <ul>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>PC - Laptop Windowns</li>
                    <li>Máy Mac, Macbook (MacOS)</li>
                    <li>Tư vấn mua sản phẩm</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn9">
                    Điện Máy
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn9" />
                  <ul>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>PC - Laptop Windowns</li>
                    <li>Máy Mac, Macbook (MacOS)</li>
                    <li>Tư vấn mua sản phẩm</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn10">
                    Phụ kiện và sản phẩm khác
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn10" />
                  <ul>
                    <li>Thủ thuật - Hướng dẫn sử dụng</li>
                    <li>PC - Laptop Windowns</li>
                    <li>Máy Mac, Macbook (MacOS)</li>
                    <li>Tư vấn mua sản phẩm</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn11">Wiki - Thuật ngữ</label>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn12">
                    Máy in
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn12" />
                  <ul>
                    <li>Mực máy in</li>
                  </ul>
                </li>
                <li className="csschoi">
                  <label htmlFor="btn13">
                    Mắt kính thời trang
                    <span class="fas fa-caret-down"></span>
                  </label>
                  <input type="checkbox" id="btn13" />
                  <ul>
                    <li>Tư vấn chọn mua</li>
                    <li>Mẹo sử dụng</li>
                    <li>Thương hiệu - Sản phẩm nổi bật</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col_content">
          <div className="searchform">
            <input
              type="text"
              placeholder="Tìm hướng dẫn, mẹo hay, câu hỏi, sản phẩm"
            />
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <button>Tìm</button>
            <div>hoặc</div>
            <button>
              <i class="fa-regular fa-circle-question"></i> &nbsp;Đặt câu hỏi
            </button>
          </div>
          <div className="titletbaivietmoinhat">Bài viết mới nhất</div>
          <div className="list_itemhoidap">
            {dataHoidap.map((item, index) => (
              <Itemhoidap key={index} item={item} />
            ))}

            {dataHoidap2.map((item, index) => (
              <Itemhoidap key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoidap;
