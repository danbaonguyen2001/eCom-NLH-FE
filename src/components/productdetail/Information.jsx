import React, { useState } from "react";
import img from "../../assets/images/phone/iphone-12-mini-2-org.jpg";
import "../../sass/productdetail/_information.scss";
import SpecificationsModal from "./SpecificationsModal";

const Information = ({ product }) => {
  const [featureExpand, setfeatureExpand] = useState(false);
  const [openModalSpecification, setOpenModalSpecification] = useState(false);

  const infor = product ? product.description : "";
  const specifications = product ? product?.detailSpecs : [];

  return (
    <div class="product_information border row">
      {/* Thông tin sản phẩm */}
      <div
        class={`product_information_left col l-6 m-12 c-12 ${
          featureExpand ? "expand" : ""
        }`}
      >
        <h1 class="product_infor_header">Thông tin sản phẩm</h1>
        {/* {infor.map((v, i) => (
          <div class="product_infor_feature" key={i}>
            <h2 class="product_infor_feature_header">{v}</h2>
            <p class="product_infor_feature_detail">{v.description}</p>
            <img src={v.img} alt="" class="product_infor_feature_img" />
          </div>
        ))} */}
        <h2 class="product_infor_feature_header">{infor}</h2>
        {/* <div class={`product_infor_toggle flex_100_width flex_center`}>
          <button
            class={`product_information_btn_80 `}
            onClick={() => setfeatureExpand(!featureExpand)}
          >
            {featureExpand ? "Thu gọn" : "Xem thêm"}
          </button>
        </div> */}
      </div>

      {/* Thông số kỹ thuật */}
      <div class={`product_information_right col  l-6 m-12 c-12`}>
        <h1 class="product_information_detail_header">Thông số kỹ thuật</h1>

        <div class="product_information_detail_list ">
          {specifications.slice(0, 12).map((v, i) => (
            <div
              class={`product_information_detail_item  flex_center ${
                i % 2 === 0 ? "infor_1" : "infor_2"
              }`}
              key={i}
            >
              <span class="product_information_item_title flex_50_width">
                {v.name}
              </span>
              <span class="product_information_item_content flex_50_width">
                {v.value}
              </span>
            </div>
          ))}
        </div>
        <div class="product_information_btn flex_100_width flex_center">
          <button
            class="product_information_btn_80 flex_50_width "
            onClick={() => setOpenModalSpecification(true)}
          >
            Xem thêm chi tiết
          </button>
        </div>
      </div>
      {openModalSpecification && (
        <SpecificationsModal
          closeModal={setOpenModalSpecification}
          specifications={specifications}
        />
      )}
    </div>
  );
};

export default Information;
