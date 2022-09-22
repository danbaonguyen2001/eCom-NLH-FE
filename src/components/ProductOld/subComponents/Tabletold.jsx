import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListProductOld from "../ListProductOld";
import productHandler from "../../../features/product/function";

const Tabletold = () => {
  const params = {
    manufacturerId: 0,
    categoryId: 3,
    subCategoryId: 0,
    page: 1,
    size: 20,
  };

  const [totalQt, setTotalQt] = useState(0);

  const [listProduct, setListProduct] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(params);
      try {
        setListProduct(res.data);
        setTotalQt(res?.data?.length);
        //console.log(listProduct);
        // console.log(listProduct.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="thanhmenu">
        <div className="menuhang">
          <button className="item_btnx">
            Hãng&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <div className="thebocngoaimenu">
            <div className="thebocmuiten">
              <div className="muiten"></div>
              <div className="listmenu">
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> iPhone (Apple)
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Samsung
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Xiaomi
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Lenovo
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Masstel
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Nokia
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Huawei
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Alcatel
                </label>
              </div>
              <div className="thexemketqua">
                <button className="xemketqua">Xem kết quả</button>
              </div>
            </div>
          </div>
        </div>
        <div className="menugia">
          <button className="item_btnx">
            Giá&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <div className="thebocngoaimenu">
            <div className="thebocmuiten">
              <div className="muiten"></div>
              <div className="listmenu">
                <Link to="http://">Dưới 3 triệu</Link>
                <Link to="http://">Từ 3 - 8 triệu</Link>
                <Link to="http://">Từ 8 - 15 triệu</Link>
                <Link to="http://">Trên 15 triệu</Link>
              </div>
              <div className="thexemketqua">
                <button className="xemketqua">Xem kết quả</button>
              </div>
            </div>
          </div>
        </div>
        <div className="menutinhnang">
          <button className="item_btnx">
            Tính năng&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <div className="thebocngoaimenu">
            <div className="thebocmuiten">
              <div className="muiten"></div>
              <div className="listmenu">
                <div className="item_listmenu">
                  <div className="tenmenu">Chọn theo dòng</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> iPad Pro M1
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> iPad Mini
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Galaxy Tab A
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Màn hình</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Khoảng 7 - 8 inch
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Khoảng 10 - 11 inch
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Khoảng 12 inch trở lên
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Ram</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 2 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 4 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 6 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 8 GB
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Bộ nhớ trong</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 32 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 64 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 128 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 256 GB
                  </label>
                </div>

                <div className="item_listmenu">
                  <div className="tenmenu">Tính năng đặc biệt</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chơi game / Cấu hình cao
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Hỗ trợ nghe gọi
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Pin khủng trên 7000mAh
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Sạc pin nhanh
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Bảo mật khuôn mặt
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Bảo mật vân tay
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menusapxep">
          <button className="item_btnx">
            Sắp xếp&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <div className="thebocngoaimenu">
            <div className="thebocmuitenx">
              <div className="muiten"></div>
              <div className="listmenux">
                <Link>Giá tăng dần</Link>
                <Link>Giá giảm dần</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listproduct_old">
        {listProduct.length > 0 && (
          <ListProductOld list={listProduct} qt={totalQt} />
        )}
      </div>
    </div>
  );
};

export default Tabletold;
