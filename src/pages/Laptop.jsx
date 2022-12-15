import React, { useState, useEffect } from "react";
import "../assets/css/tabletlaptop/laptop.css";
import { sliderPC, bannerPC } from "../components/PCPrint/data";
import TopSlider from "../components/PCPrint/TopSlider";
import Product from "../components/phone/Product";
import ListProductOld from "../components/ProductOld/ListProductOld";
import productHandler from "../features/product/function";

const Laptop = () => {
  const params = {
    manufacturerId: 0,
    categoryId: 2,
    subCategoryId: 0,
    page: 1,
    size: 20,
  };

  const [totalQt, setTotalQt] = useState(0);

  const [listProduct, setListProduct] = useState(0);

  useEffect(() => {
    productHandler
      .getProductsByCategory({ categoryName: "Laptop" })
      .then((res) => {
        //const listProducts = res.data.products;
        //console.log(res.data);
        setListProduct(res.data);
        //setFilter(res.data);
        setTotalQt(res.data);
      });
  }, []);
  return (
    <div>
      <div className="thebackground">
        <div className="paddingtoppx"></div>
        <TopSlider sliders={sliderPC} banners={bannerPC} />
        <div className="the1_quicklink">
          <div className="boxq">
            <button className="quickitem">Macbook</button>
            <button className="quickitem">Asus</button>
            <button className="quickitem">Hp</button>
            <button className="quickitem">Lenovo</button>
            <button className="quickitem">Acer</button>
            <button className="quickitem">Dell</button>
            <button className="quickitem">Msi</button>
            <button className="quickitem">Surface</button>
            <button className="quickitem">LG</button>
            <button className="quickitem">GiGaByte</button>
            <button className="quickitem">Intel</button>
            <button className="quickitem">ChuWi</button>
          </div>
        </div>
      </div>
      <div className="menu-top">
        <div>
          <a href="#dealsoc" class="nav-item">
            <div class="box-icon">
              <i class="fa-solid fa-percent"></i>
            </div>
            <p>Deal Sốc</p>
          </a>
          <a href="#gaming" class="nav-item">
            <div class="box-icon">
              <i class="fa-solid fa-gamepad"></i>
            </div>
            <p>Gaming</p>
          </a>
          <a href="#macbook" class="nav-item">
            <div class="box-icon">
              <i class="fa-brands fa-apple"></i>
            </div>
            <p>MacBook</p>
          </a>
          <a href="#hoc-tap-van-phong" class="nav-item">
            <div class="box-icon">
              <i class="fa-brands fa-leanpub"></i>
            </div>
            <p>Học tập, Văn phòng</p>
          </a>
          <a href="#do-hoa-ky-thuat" class="nav-item">
            <div class="box-icon">
              <i class="fa-brands fa-codepen"></i>
            </div>
            <p>Đồ họa, Kỹ thuật</p>
          </a>
          <a href="#mong-nhe" class="nav-item">
            <div class="box-icon">
              <i class="fa-brands fa-pied-piper-hat"></i>
            </div>
            <p>Mỏng nhẹ</p>
          </a>
          <a href="#cao-cap-sang-trong" class="nav-item">
            <div class="box-icon">
              <i class="fa-regular fa-gem"></i>
            </div>
            <p>Cao cấp, sang trọng</p>
          </a>
          <a href="#phan-mem" class="nav-item">
            <div class="box-icon">
              <i class="fa-brands fa-windows"></i>
            </div>
            <p>Phần mềm</p>
          </a>
        </div>
      </div>

      {/* <div className="the3_deal" id="dealsoc">
        <div className="thecondealx">
          <div className="deal_title">
            <span className="txtDs">Deal sốc</span>
            <span className="txtGd">&nbsp;GIẢM TỚI 10.000.000₫</span>
          </div>
          <img
            src="https://cdn.tgdd.vn/2022/07/banner/Tagline-deal-soc-desk--1--1200x90.png"
            alt=""
          />

          
          {listProduct.length > 0 && (
            <Product list={listProduct} qt={totalQt} />
          )}
        </div>
      </div> */}
      <div className="the4_gamming" id="gaming">
        <div className="thecongamingx">
          <div className="block_bannergaming">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/gamingdes-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="macbook">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/Bannermacbook-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="hoc-tap-van-phong">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/Hoctapvanphong-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="do-hoa-ky-thuat">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/dohoa-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="mong-nhe">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/mongnhedes-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="cao-cap-sang-trong">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2021/08/banner/Caocapdesk-1200x200.jpg"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
      <div className="the_laptop" id="phan-mem">
        <div className="thecon">
          <div className="block_banner">
            <img
              src="https://cdn.tgdd.vn/2022/05/banner/banner-phan-mem-1200x200-1200x200.png"
              alt=""
            />
          </div>
          <div className="listproduct_old">
            {/* đưa list product dô       */}
            {listProduct.length > 0 && (
              <Product list={listProduct} qt={totalQt} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
