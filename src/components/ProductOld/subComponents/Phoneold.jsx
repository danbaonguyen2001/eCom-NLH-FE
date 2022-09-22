import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListProductOld from "../ListProductOld";
import productHandler from "../../../features/product/function";

const Phoneold = () => {
  const params = {
    manufacturerId: 0,
    categoryId: 1,
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
                  <input type="checkbox"></input> OPPO
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Xiaomi
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Vivo
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Realme
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Vsmart
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> OnePlus
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Nokia
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Mobell
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Itel
                </label>
                <label htmlFor="" className="labelboxold">
                  <input type="checkbox"></input> Masstel
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
                <Link to="http://">Dưới 2 triệu</Link>
                <Link to="http://">Từ 2 - 4 triệu</Link>
                <Link to="http://">Từ 4 - 7 triệu</Link>
                <Link to="http://">Từ 7 - 13 triệu</Link>
                <Link to="http://">Từ 13 - 20 triệu</Link>
                <Link to="http://">Trên 20 triệu</Link>
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
                  <div className="tenmenu">Ram</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 2 GB
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 3 GB
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
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 12GB
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Chọn theo dòng</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> OPPO
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Galaxy
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Xiaomi
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Vsmart
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> iPhone
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Vivo
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
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> 512 GB
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Hiệu năng & Pin</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chơi game / Cấu hình cao
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Pin khủng trên 5000mAh
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Sạc pin nhanh
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Camera</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chụp ảnh cận cảnh (Macro)
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chụp góc rộng
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chụp xóa phông
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Chụp zoom xa
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Tính năng đặc biệt</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Hỗ trợ 5G
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Bảo mật khuôn mặt
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Bảo mật vân tay
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Sạc không dây
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Kháng nước, bụi
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Thiết kế</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Tràn viền
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Mỏng nhẹ
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Mặt lưng kính
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Màn hình</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Dưới 6 inch
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Từ 6 inch trở lên
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Màn hình gập
                  </label>
                </div>
                <div className="item_listmenu">
                  <div className="tenmenu">Loại điện thoại</div>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Android
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Iphone (IOS)
                  </label>
                  <label htmlFor="" className="labelboxold">
                    <input type="checkbox"></input> Điện thoại phổ thông
                  </label>
                </div>
              </div>
              <div className="thexemketqua">
                <button className="xemketqua">Xem kết quả</button>
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

export default Phoneold;
