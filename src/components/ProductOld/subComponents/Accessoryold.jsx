import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListProductOld from "../ListProductOld";
import productHandler from "../../../features/product/function";

const Accessoryold = () => {
  const params = {
    manufacturerId: 0,
    categoryId: 4,
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
              <div className="listmenu"></div>
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
              <div className="listmenu"></div>
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
              <div className="listmenu"></div>
            </div>
          </div>
        </div>
        <div className="menusapxep">
          <button className="item_btnx">
            Sắp xếp&nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <div className="thebocngoaimenu">
            <div className="thebocmuiten">
              <div className="muiten"></div>
              <div className="listmenu"></div>
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

export default Accessoryold;
