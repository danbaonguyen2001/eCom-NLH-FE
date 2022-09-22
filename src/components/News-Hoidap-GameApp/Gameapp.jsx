import React from "react";
import "../../assets/css/tabletlaptop/gameapp.css";
import {
  dataGameAppPosts,
  dataGameAppPostsApp,
} from "../ProductOld/subComponents/dataGameApp";

function ItemPosts({ item }) {
  return (
    <div className="item_posts">
      <img src={item.imagePost} alt="" />
      <div className="imgtitle">
        <img src={item.imgTitle} alt="" />
        <div className="imgtitle_right">
          <div className="title_item">{item.titlePost}</div>
          <div className="cucduoititle">
            <div className="cucxanh">Miễn phí</div>
            <div className="cucxam">Nhập vai</div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;Tổng hợp 10 điện
          thoại chơi Gunny Origin mượt mà, đáng mua nhất
        </li>
        <li>
          <i class="fa-regular fa-hand-point-right"></i>&nbsp;WOW và SUPER cái
          nào ngon hơn trong Gunny Orgin? Top SUPER
        </li>
      </ul>
    </div>
  );
}
function ItemApp({ item }) {
  return (
    <div className="imgtitle">
      <img src={item.imgTitle} alt="" />
      <div className="imgtitle_right">
        <div className="title_item">{item.titlePost}</div>
        <div className="cucduoititle">
          <div className="cucxanh">Miễn phí</div>
          <div className="cucxam">Nhập vai</div>
        </div>
      </div>
    </div>
  );
}
const Gameapp = () => {
  return (
    <div>
      <div className="menuGameApp">
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>&ensp;Game App &nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <i class="fa-brands fa-app-store-ios"></i>&ensp;Ios
            (Iphone-ipad)&ensp;<i class="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <i class="fa-brands fa-android"></i>&ensp;Android&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <i class="fa-brands fa-windows"></i>&ensp;Windowns&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <i class="fa-brands fa-apple"></i>&ensp;Macos&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </li>
          <li>
            <i class="fa-solid fa-tv"></i>&ensp;smart TV&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </li>
          <li>24h công nghệ</li>
          <li className="dkdnx">Đăng kí / Đăng nhập</li>
        </ul>
      </div>
      <div className="mainGameApp">
        <div className="mainGameApp_right">
          <div className="title_gameapp">Game nổi bật</div>
          <div className="viewgamenoibat">
            {dataGameAppPosts.map((item, index) => (
              <ItemPosts key={index} item={item} />
            ))}
          </div>

          <div className="gameapp_nentang">
            <div className="title_gameapp">Game trên các nền tảng</div>
            <div className="menu_nentang">
              <ul>
                <li>
                  <i class="fa-brands fa-app-store-ios"></i>&ensp;Ios
                  (Iphone-ipad)&ensp;<i class="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i class="fa-brands fa-android"></i>&ensp;Android&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i class="fa-brands fa-windows"></i>&ensp;Windowns&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i class="fa-brands fa-apple"></i>&ensp;Macos&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i class="fa-solid fa-tv"></i>&ensp;smart TV&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="title_gameapp">Ứng dụng nổi bật</div>
          <div className="viewgamenoibat">
            {dataGameAppPostsApp.map((item, index) => (
              <ItemPosts key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="mainGameApp_left">
          <div className="list_anh">
            <img
              src="https://cdn.tgdd.vn/2022/07/banner/he-reno7-720-220-720x220-1.png"
              alt=""
            />
            <img
              src="https://cdn.tgdd.vn/2022/08/banner/720-220-720x220-21.png"
              alt=""
            />
            <img
              src="https://cdn.tgdd.vn/2022/07/banner/he-aseri-720-220-720x220.png"
              alt=""
            />
          </div>
          <div className="title_gameapp">Game, Ứng dụng xem nhiều</div>
          <div className="item_app">
            {dataGameAppPosts.map((item, index) => (
              <ItemApp key={index} item={item} />
            ))}
          </div>
          <div className="title_gameappx">Xem nhiều tuần qua</div>
          <div className="list_xemnhieutuanqua">
            <div className="thethaoluannhieu">
              <div className="sox">1</div>
              <div className="noidungsox">
                Tuyển tập TOP 5 chiếc iPhone pin trâu nhất 2022 thỏa thích sử
                dụng cả ngày dài!
              </div>
            </div>
            <div className="thethaoluannhieu">
              <div className="sox">2</div>
              <div className="noidungsox">
                Gọi tên TOP 5 điện thoại Samsung pin trâu đáng mua nhất 2022 tại
                TGDĐ
              </div>
            </div>
            <div className="thethaoluannhieu">
              <div className="sox">3</div>
              <div className="noidungsox">
                Đừng bỏ qua loạt iPhone giảm giá ngon, đáng sắm nhất chương
                trình sale tại TGDĐ!
              </div>
            </div>
            <div className="thethaoluannhieu">
              <div className="sox">4</div>
              <div className="noidungsox">
                5 mẫu smartwatch đáng mua ở giá dưới 2 triệu, một số mẫu có thể
                nghe gọi trực tiếp
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thecach"></div>
    </div>
  );
};

export default Gameapp;
