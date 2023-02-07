import React, { useState } from "react";

const PhoneFilter = ({ filter, setShowSub, listProduct, setListProduct }) => {
  // state
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState();
  const [move, setMove] = useState(false);
  //
  const filterPrice = (priceMin, priceMax) => {
    const result = filter.filter((curData) => {
      // return curData?.price > priceMax;
      switch (priceMax) {
        case 40000000:
          return curData?.price > priceMax;
        case 39999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        case 29999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        case 19999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        case 9999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        default:
          return curData?.price < priceMax;
      }
    });
    setListProduct(result);
  };

  // sắp xếp tăng giảm
  const handleSort = (option) => {
    if (option === "noibat") {
      setListProduct(filter);
    } else if (option === "tang") {
      setListProduct(listProduct?.slice().sort((a, b) => a.price - b.price));
    } else {
      setListProduct(listProduct?.slice().sort((a, b) => b.price - a.price));
    }
  };
  return (
    <div className="phone_box_filter">
      <div className="phone_scroll">
        <div className="phone_scroll_main_item">
          <div className="phone_bolocx">
            <button className="phone_item_btn">
              <i className="fa-solid fa-filter"></i>
              &nbsp;Bộ lọc
            </button>
          </div>

          <div className="phone_hangx">
            <button
              className="phone_item_btn"
              onClick={() => {
                setActive(!active);
                setSelected("hang");
                setMove(true);
              }}
            >
              Hãng&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div
                className={
                  (selected === "hang") & active && move
                    ? `phone_theconcuahang active`
                    : `phone_theconcuahang`
                }
              >
                <div
                  className="phone_box_quicklinkhang"
                  // className="phone_theconcuahang"
                >
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 1,
                        categoryId: 1,
                        subCategoryId: 9,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    iPhone
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 2,
                        categoryId: 1,
                        subCategoryId: 8,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Samsung
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 3,
                        categoryId: 1,
                        subCategoryId: 8,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Xiaomi
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 0,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Lenovo
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 0,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Masstel
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 0,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Nokia
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 0,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Huawei
                  </button>
                  <button
                    className="phone_quicklink"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 0,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Alcate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="phone_giax">
            <button
              onClick={() => {
                setActive(!active);
                setSelected("gia");
                setMove(true);
              }}
              className="phone_item_btn"
            >
              Giá&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>

            <div className="phone_thechuakhoangtrong">
              <div
                className={
                  (selected === "gia") & active && move
                    ? `phone_thecongia active`
                    : `phone_thecongia`
                }
                // ref={btnRef}
                // className="phone_thecongia"
              >
                <div className="phone_box_quicklinkgia">
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(0, 4900000)}
                  >
                    Dưới 5 triệu
                  </button>
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(5000000, 9999999)}
                  >
                    Từ 5 - 10 triệu
                  </button>
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(10000000, 19999999)}
                  >
                    &nbsp;Từ 10 - 20 triệu&nbsp;
                  </button>
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(20000000, 29999999)}
                  >
                    &nbsp;Từ 20 - 30 triệu&nbsp;
                  </button>
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(30000000, 39999999)}
                  >
                    &nbsp;Từ 30 - 40 triệu&nbsp;
                  </button>
                  <button
                    className="phone_btnconmenu"
                    onClick={() => filterPrice(0, 40000000)}
                  >
                    Trên 40 triệu
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="phone_kichthuocmanhinhx">
            <button
              className="phone_item_btn"
              onClick={() => {
                setActive(!active);
                setSelected("loai");
              }}
            >
              Loại điện thoại&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div
                // className="phone_theconkich"
                className={
                  (selected === "loai") & active
                    ? `phone_theconkich active`
                    : `phone_theconkich`
                }
              >
                <div className="phone_box_quicklinkkick">
                  <button
                    className="phone_btnconmenu"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 9,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    iPhone (IOS)
                  </button>

                  <button
                    className="phone_btnconmenu"
                    onClick={() =>
                      setShowSub({
                        manufacturerId: 0,
                        categoryId: 1,
                        subCategoryId: 8,
                        page: 1,
                        size: 20,
                      })
                    }
                  >
                    Android
                  </button>
                  {/* <button className="phone_btnconmenu">
                  &nbsp;Điện thoại phổ thông&nbsp;
                </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="phone_kichthuocmanhinhx">
            <button
              className="phone_item_btn"
              onClick={() => {
                setActive(!active);
                setSelected("nhucau");
              }}
            >
              Nhu cầu&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div
                // className="phone_theconkich"
                className={
                  (selected === "nhucau") & active
                    ? `phone_theconkich active`
                    : `phone_theconkich`
                }
              >
                <div className="phone_box_quicklinkkick">
                  <button className="phone_btnconmenu">
                    Chơi game / Cấu hình cao
                  </button>
                  <button className="phone_btnconmenu">
                    Chụp ảnh, quay phim
                  </button>
                  <button className="phone_btnconmenu">Mỏng nhẹ</button>
                  <button className="phone_btnconmenu">
                    &nbsp;Nhỏ gọn dễ cầm&nbsp;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="phone_ramx">
            <button
              className="phone_item_btn"
              onClick={() => {
                setActive(!active);
                setSelected("ram");
              }}
            >
              RAM&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div
                // className="phone_theconram"
                className={
                  (selected === "ram") & active
                    ? `phone_theconram active`
                    : `phone_theconram`
                }
              >
                <div className="phone_box_quicklinkram">
                  <button className="phone_btnconmenu">&emsp;2 GB&emsp;</button>
                  <button className="phone_btnconmenu">&emsp;3 GB&emsp;</button>
                  <button className="phone_btnconmenu">&emsp;4 GB&emsp;</button>
                  <button className="phone_btnconmenu">&emsp;6 GB&emsp;</button>
                  <button className="phone_btnconmenu">&emsp;8 GB&emsp;</button>
                  <button className="phone_btnconmenu">
                    &emsp;12 GB&emsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="phone_bonhotrongx">
            <button
              className="phone_item_btn"
              onClick={() => {
                setActive(!active);
                setSelected("bonho");
              }}
            >
              Bộ nhớ trong&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div
                // className="phone_thecongia"
                className={
                  (selected === "bonho") & active
                    ? `phone_thecongia active`
                    : `phone_thecongia`
                }
              >
                <div className="phone_box_quicklinkgia">
                  <button className="phone_btnconmenu">
                    &emsp;32 GB&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;64 GB&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;128 GB&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;256 GB&emsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="phone_hieunangx">
            <button className="phone_item_btn">
              Pin & Sạc &nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrong">
              <div className="phone_theconkich">
                <div className="phone_box_quicklinkkick">
                  <button className="phone_btnconmenu">
                    &nbsp; Pin khủng trên 7000mAh &nbsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &nbsp; Sạc nhanh (từ 18W) &nbsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &nbsp;Sạc siêu nhanh (từ 33W)&nbsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &nbsp;Sạc không dây&nbsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="phone_tinhnangx">
            <button className="phone_item_btn">
              Tính năng đặc biệt&nbsp;
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className="phone_thechuakhoangtrongtinhnang">
              <div className="phone_thecontinh">
                <div className="phone_box_quicklinkgia">
                  <button className="phone_btnconmenu">
                    &emsp;Kháng nước, bụi&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;Hỗ trợ 5G&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;Bảo mật khuôn mặt 3D&emsp;
                  </button>
                  <button className="phone_btnconmenu">
                    &emsp;Chống rung quang học (OIS)&emsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="phone_box_quicklink">
        <div className="phone_cangiua">Tìm kiếm nhiều nhất&emsp;</div>

        <button className="phone_quicklink">Hỗ trợ nghe gọi</button>
        <button className="phone_quicklink">Pin khủng</button>
        <button className="phone_quicklink">Chơi game</button>
      </div>

      <div className="phone_box_quicklink_nhucau">
        <div className="phone_cangiua">Chọn điện thoại theo nhu cầu&emsp;</div>
        <div className="phone_box_quicklink">
          <button style={{ width: "185px" }} className="phone_quicklink">
            Chơi game / Cấu hình cao
          </button>
          <button style={{ width: "165px" }} className="phone_quicklink">
            Chụp ảnh, quay phim
          </button>
          <button className="phone_quicklink">Mỏng nhẹ</button>
          <button style={{ width: "130px" }} className="phone_quicklink">
            Nhỏ gọn dễ cầm
          </button>
        </div>
      </div>

      <div className="phone_checkboxtablet">
        <div className="phone_cangiua2">{listProduct?.length} Điện thoại</div>
        <label htmlFor="" className="phone_labelbox" id="mauxanh">
          <input type="checkbox"></input> <i className="fa-solid fa-bolt"></i>
          &nbsp;Giao nhanh
        </label>
        <label htmlFor="" className="phone_labelbox">
          <input type="checkbox"></input> Giảm giá
        </label>
        <label htmlFor="" className="phone_labelbox">
          <input type="checkbox"></input> Góp 0%
        </label>
        <label htmlFor="" className="phone_labelbox">
          <input type="checkbox"></input> Độc quyền
        </label>
        <label htmlFor="" className="phone_labelbox">
          <input type="checkbox"></input> Mới
        </label>

        <div className="phone_options">
          <label style={{ marginRight: "10px" }} htmlFor="Sapxep">
            Sắp xếp theo:
          </label>
          <select
            name="Sapxep"
            className="phone_Sapxep"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option style={{ textAlign: "center" }} value="noibat">
              Nổi bật
            </option>
            <option style={{ textAlign: "center" }} value="tang">
              Giá tăng
            </option>
            <option style={{ textAlign: "center" }} value="giam">
              Giá giảm
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PhoneFilter;
