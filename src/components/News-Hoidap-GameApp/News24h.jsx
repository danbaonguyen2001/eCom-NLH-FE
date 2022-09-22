import React from "react";
import "../../assets/css//tabletlaptop/news24h.css";
import { dataNews24h } from "../ProductOld/subComponents/dataNews24h";

function Item24h({ item }) {
  return (
    <div className="item24h_item">
      <img src={item.image} alt="" />
      <div className="item24h_right">
        <div className="item24h_right_title">{item.title}</div>
        <div className="item24h_right_time">{item.time}</div>
      </div>
    </div>
  );
}
const News24h = () => {
  return (
    <div>
      <div className="menu24h">
        <ul>
          <li>Mới nhất </li>
          <li>Sản phẩm mới</li>
          <li>Đánh giá</li>
          <li>Mẹo hay</li>
          <li>Tư vấn</li>
          <li>Sự kiện</li>
          <li>Stories</li>
          <li>Khuyến mãi</li>
          <li>Laptop</li>
          <li>Game/App</li>
          <li className="dkdn">Đăng kí / Đăng nhập</li>
        </ul>
      </div>
      <div className="themain24h">
        <div className="main24htrai">
          <div className="main24htrai_1">
            <div className="left_trai">
              <img
                src="https://cdn.tgdd.vn/Files/2021/10/20/1392281/dienthoaivivototnhat20222_800x450-600x400.jpg"
                alt=""
              />
              <div className="title24h">
                Samsung tung ra trailer sự kiện Unpacked 10/8, hé lộ Galaxy Z
                Series mới
              </div>
              <div className="noidung24h">
                Samsung dự kiến sẽ cho ra mắt mẫu Galaxy Z Fold và Galaxy Z Flip
                mới tại sự kiện Unpacked vào ngày 10/8 tới. Công ty mới đây cũng
                đã tung ra trailer đầu tiên cho sự kiện lần này, hé lộ về những
                chiếc điện thoại màn hình gập sắp ra mắt.
              </div>
            </div>
            <div className="right_trai">
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/02/1452584/galaxyz_unpacked_1_1280x720-300x200.jpg"
                alt=""
              />
              <div className="title24hx">
                Cửa hàng Google Play có bộ nhận diện và logo thông báo mới sau
                10 năm
              </div>
              <div className="noidung24hx">
                Bảo vệ điện thoại Galaxy toàn diện với gói bảo hành Samsung
                Care+
              </div>
              <div className="noidung24hx">
                Xiaomi 12T, Xiaomi 12T Pro đang được thử nghiệm tại châu Á, dự
                kiến sắp ra mắt
              </div>
              <div className="noidung24hx">
                Tất cả những dòng điện thoại Samsung đang được bán chính hãng
                tại TGDĐ, bạn đã biết?
              </div>
            </div>
          </div>
          <div className="main24htrai_2">
            {dataNews24h.map((item, index) => (
              <Item24h key={index} item={item} />
            ))}
          </div>
          <div className="main24htrai_3">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/IX1Is0hhU4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="main24trai_4">
            {dataNews24h.map((item, index) => (
              <Item24h key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="main24hphai">
          <img
            src="https://cdn.tgdd.vn/2022/07/banner/380X215-380x215.gif"
            alt=""
          />
          <div className="chudehot">CHỦ ĐỀ HOT</div>
          <div className="taghot">
            <button>
              <i class="fa-regular fa-circle-dot"></i>&ensp;Mẹo không phải ai
              cũng biết
            </button>
            <button>
              <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới phụ kiện
            </button>
            <button>
              <i class="fa-regular fa-circle-dot"></i>&ensp;Tất tần tật về IOS
              16
            </button>
            <button>
              {" "}
              <i class="fa-regular fa-circle-dot"></i>&ensp;Thế giới đồng hồ
            </button>
            <button>
              {" "}
              <i class="fa-regular fa-circle-dot"></i>&ensp;Samsung Unpacked
              2022 có gì ?
            </button>
          </div>
          <div className="chudegachduoi">THẢO LUẬN NHIỀU</div>
          <div className="thethaoluannhieu">
            <div className="so">1</div>
            <div className="noidungso">
              Tuyển tập TOP 5 chiếc iPhone pin trâu nhất 2022 thỏa thích sử dụng
              cả ngày dài!
            </div>
          </div>
          <div className="thethaoluannhieu">
            <div className="so">2</div>
            <div className="noidungso">
              Gọi tên TOP 5 điện thoại Samsung pin trâu đáng mua nhất 2022 tại
              TGDĐ
            </div>
          </div>
          <div className="thethaoluannhieu">
            <div className="so">3</div>
            <div className="noidungso">
              Đừng bỏ qua loạt iPhone giảm giá ngon, đáng sắm nhất chương trình
              sale tại TGDĐ!
            </div>
          </div>
          <div className="thethaoluannhieu">
            <div className="so">4</div>
            <div className="noidungso">
              5 mẫu smartwatch đáng mua ở giá dưới 2 triệu, một số mẫu có thể
              nghe gọi trực tiếp
            </div>
          </div>
          <div className="chudegachduoi">BÀI VIẾT SẢN PHẨM MỚI</div>
          <div className="thesanphammoi">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/256197/Samsung-galaxy-m53-blue-600x600.jpg"
              alt=""
            />
            <div className="noidungsanphammoi">
              <div className="tensanphammoix">Samsung Galaxy M33 5G</div>
              <div className="giasanphammoix">7.690.000đ</div>
              <div className="sobaivietmoi">76 bài viết</div>
            </div>
          </div>
          <div className="thesanphammoi">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg"
              alt=""
            />
            <div className="noidungsanphammoi">
              <div className="tensanphammoix">Samsung Galaxy S22 Ultra</div>
              <div className="giasanphammoix">7.690.000đ</div>
              <div className="sobaivietmoi">25 bài viết</div>
            </div>
          </div>
          <div className="thesanphammoi">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg"
              alt=""
            />
            <div className="noidungsanphammoi">
              <div className="tensanphammoix"> Samsung Galaxy S22 Plus</div>
              <div className="giasanphammoix">7.690.000đ</div>
              <div className="sobaivietmoi">34 bài viết</div>
            </div>
          </div>
          <div className="thesanphammoi">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/231110/Galaxy-S22-Black-600x600.jpg"
              alt=""
            />
            <div className="noidungsanphammoi">
              <div className="tensanphammoix">Samsung Galaxy M33 5G</div>
              <div className="giasanphammoix">7.690.000đ</div>
              <div className="sobaivietmoi">115 bài viết</div>
            </div>
          </div>
          <div className="chudexanh">KHUYẾN MÃI</div>
          <div className="fixanh">
            <img
              src="https://cdn.tgdd.vn/Files/2022/08/02/1452676/minigame-tim-hieu-the-he-gap-dot-pha-3_1280x720-300x200.jpg"
              alt=""
            />
          </div>
          <div className="title24hx">
            Nhập mã SPPMWG giảm 10% tối đa 100K khi thanh toán qua ví ShopeePay
          </div>
          <div className="thegioithieu24h">
            <div className="item_thegioithieu">
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/02/1452699/dien-thoai-vivo-giam-gia-1_1280x720-300x200.jpg"
                alt=""
              />
              <div>
                Tất tần tật các mẫu smartphone Vivo tinh tế, sang trọng đang
                giảm giá cực ngon
              </div>
            </div>
            <div className="item_thegioithieu">
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/02/1452809/itelisw-41-501_1280x720-300x200.jpg"
                alt=""
              />
              <div>
                Bạn còn nhớ Itel ISW-41 - mẫu smartwatch giá rẻ giảm sốc 300K
                kèm quà ngon
              </div>
            </div>
            <div className="item_thegioithieu">
              <img
                src="https://cdn.tgdd.vn/Files/2022/08/01/1452422/dien-thoai-samsung-doc-quyen-1_1280x720-300x200.jpg"
                alt=""
              />
              <div>
                Smartphone độc quyền nhà Samsung giảm sốc tới nóc, SamFans tậu
                ngay đi
              </div>
            </div>
            <div className="item_thegioithieu">
              <img
                src="https://cdn.tgdd.vn/Files/2022/07/31/1452322/realme85g-281_1280x720-300x200.jpg"
                alt=""
              />
              <div>
                Điện thoại Realme 5G giá rẻ nhất đang có ưu đãi trả góp 0%, sắm
                cực dễ dàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News24h;
