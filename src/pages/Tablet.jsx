import React, { useEffect, useState } from "react";
import { sliderPC, bannerPC } from "../components/PCPrint/data";
import "../assets/css//tabletlaptop/tablet.css";
import TopSlider from "../components/PCPrint/TopSlider";
import ListProductOld from "../components/ProductOld/ListProductOld";
import productHandler from "../features/product/function";
import Product from "../components/phone/Product";
import SkeletonProducts from "../components/phone/SkeletonProducts";

// lọc theo hãng, giá + sắp xếp tăng giảm
const Tablet = () => {
  const [isLoading, setIsLoading] = useState(true);
  //
  const [showSub, setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 3,
    subCategoryId: 0,
    page: 1,
    size: 20,
  });

  const [totalQt, setTotalQt] = useState(0);
  const [tempList, setTempList] = useState();

  const [listProduct, setListProduct] = useState(0);

  const listTemp = tempList;

  useEffect(() => {
    productHandler
      .getProductsByCategory({ categoryName: "Tablet" })
      .then((res) => {
        setIsLoading(res.isLoading)

        setListProduct(res.data);

        setTotalQt(res.data);
      });
  }, [showSub]);

  // lọc theo giá
  const filterPrice = (priceMin, priceMax) => {
    const result = listTemp.filter((curData) => {
      // return curData?.price > priceMax;
      switch (priceMax) {
        case 30000000:
          return curData?.price > priceMax;
        case 29999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        case 19999999:
          return curData?.price > priceMin && curData?.price <= priceMax;
        default:
          return curData?.price < priceMax;
      }
    });

    setListProduct(result);
  };

  // sắp xếp tăng giảm
  const handleSort = (e) => {
    const sort = e.target.value;
    if (sort === "tang") {
      setListProduct(listProduct?.slice().sort((a, b) => a.price - b.price));
    }
    if (sort === "giam") {
      setListProduct(listProduct?.slice().sort((a, b) => b.price - a.price));
    }
  };
  return (
    <div className="grid wide">
      <div className="paddingtoppx"></div>
      {/* thêm slider   */}
      <TopSlider sliders={sliderPC} banners={bannerPC} />

      <div>
        <div className="box_filter">
          <div className="scroll">
            <div className="scroll_main_item">
              <div className="bolocx">
                <button className="item_btn">
                  <i class="fa-solid fa-filter"></i>
                  &nbsp;Bộ lọc
                </button>
              </div>
              <div className="hangx">
                <button className="item_btn">
                  Hãng&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrong">
                  <div className="theconcuahang">
                    <div className="box_quicklinkhang">
                      <button
                        className="quicklink"
                        onClick={() =>
                          setShowSub({
                            manufacturerId: 1,
                            categoryId: 3,
                            subCategoryId: 0,
                            page: 1,
                            size: 20,
                          })
                        }
                      >
                        iPad
                      </button>
                      <button
                        className="quicklink"
                        onClick={() =>
                          setShowSub({
                            manufacturerId: 2,
                            categoryId: 3,
                            subCategoryId: 0,
                            page: 1,
                            size: 20,
                          })
                        }
                      >
                        Samsung
                      </button>
                      <button className="quicklink">Xiaomi</button>
                      <button className="quicklink">Lenovo</button>
                      <button className="quicklink">Masstel</button>
                      <button className="quicklink">Nokia</button>
                      <button className="quicklink">Huawei</button>
                      <button className="quicklink">Alcate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="giax">
                <button className="item_btn">
                  Giá&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>

                <div className="thechuakhoangtrong">
                  <div className="thecongia">
                    <div className="box_quicklinkgia">
                      <button
                        className="btnconmenu"
                        onClick={() => filterPrice(0, 10000000)}
                      >
                        Dưới 10 triệu
                      </button>
                      <button
                        className="btnconmenu"
                        onClick={() => filterPrice(10000000, 19999999)}
                      >
                        Từ 10 - 20 triệu
                      </button>
                      <button
                        className="btnconmenu"
                        onClick={() => filterPrice(20000000, 29999999)}
                      >
                        &nbsp;Từ 20 - 30 triệu&nbsp;
                      </button>
                      <button
                        className="btnconmenu"
                        onClick={() => filterPrice(0, 30000000)}
                      >
                        Trên 30 triệu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kichthuocmanhinhx">
                <button className="item_btn">
                  Kích thước màn hình&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrong">
                  <div className="theconkich">
                    <div className="box_quicklinkkick">
                      <button className="btnconmenu">Khoảng 7 - 8 inch</button>
                      <button className="btnconmenu">
                        Khoảng 10 - 11 inch
                      </button>
                      <button className="btnconmenu">
                        &nbsp;Khoảng 12 inch trở lên&nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ramx">
                <button className="item_btn">
                  RAM&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrong">
                  <div className="theconram">
                    <div className="box_quicklinkram">
                      <button className="btnconmenu">&emsp;2 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;3 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;4 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;6 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;8 GB&emsp;</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bonhotrongx">
                <button className="item_btn">
                  Bộ nhớ trong&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrong">
                  <div className="thecongia">
                    <div className="box_quicklinkgia">
                      <button className="btnconmenu">&emsp;32 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;64 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;128 GB&emsp;</button>
                      <button className="btnconmenu">&emsp;256 GB&emsp;</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hieunangx">
                <button className="item_btn">
                  Hiệu năng & pin&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrong">
                  <div className="theconkich">
                    <div className="box_quicklinkkick">
                      <button className="btnconmenu">
                        &nbsp; Chơi game/ Cấu hình cao &nbsp;
                      </button>
                      <button className="btnconmenu">
                        &nbsp; Pin khủng trên 7000mAh &nbsp;
                      </button>
                      <button className="btnconmenu">
                        &nbsp;Sạc nhanh&nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tinhnangx">
                <button className="item_btn">
                  Tính năng đặc biệt&nbsp;
                  <i class="fa-solid fa-caret-down"></i>
                </button>
                <div className="thechuakhoangtrongtinhnang">
                  <div className="thecontinh">
                    <div className="box_quicklinkgia">
                      <button className="btnconmenu">
                        &emsp;Hỗ trợ 5G&emsp;
                      </button>
                      <button className="btnconmenu">
                        &emsp;Hỗ trợ nghe gọi&emsp;
                      </button>
                      <button className="btnconmenu">
                        &emsp;Bảo mật khuôn mặt&emsp;
                      </button>
                      <button className="btnconmenu">
                        &emsp;Bảo mật vân tay&emsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box_quicklink">
            <button
              className="quicklink"
              onClick={() =>
                setShowSub({
                  manufacturerId: 1,
                  categoryId: 3,
                  subCategoryId: 0,
                  page: 1,
                  size: 20,
                })
              }
            >
              iPad
            </button>
            <button
              className="quicklink"
              onClick={() =>
                setShowSub({
                  manufacturerId: 2,
                  categoryId: 3,
                  subCategoryId: 0,
                  page: 1,
                  size: 20,
                })
              }
            >
              Samsung
            </button>
            <button className="quicklink">Xiaomi</button>
            <button className="quicklink">Lenovo</button>
            <button className="quicklink">Masstel</button>
            <button className="quicklink">Nokia</button>
            <button className="quicklink">Huawei</button>
            <button className="quicklink">Alcate</button>
          </div>
          <div className="box_quicklink">
            <div className="cangiua">Tìm kiếm nhiều nhất&emsp;</div>

            <button className="quicklink">Hỗ trợ nghe gọi</button>
            <button className="quicklink">Pin khủng</button>
            <button className="quicklink">Chơi game</button>
          </div>
          <div className="checkboxtablet">
            <div className="cangiua2">{listProduct?.length} Máy tính bảng</div>
            <label htmlFor="" className="labelbox" id="mauxanh">
              <input type="checkbox"></input> <i class="fa-solid fa-bolt"></i>
              &nbsp;Giao nhanh
            </label>
            <label htmlFor="" className="labelbox">
              <input type="checkbox"></input> Giảm giá
            </label>
            <label htmlFor="" className="labelbox">
              <input type="checkbox"></input> Góp 0%
            </label>
            <label htmlFor="" className="labelbox">
              <input type="checkbox"></input> Mới
            </label>
            <select className="Sapxep" onChange={handleSort}>
              <option value="">Sắp xếp</option>
              <option value="tang">Giá tăng</option>
              <option value="giam">Giá giảm</option>
            </select>
          </div>
        </div>
        {isLoading ?<SkeletonProducts/> :listProduct.length > 0 && <Product list={listProduct} qt={totalQt} />}
      </div>
    </div>
  );
};

export default Tablet;
