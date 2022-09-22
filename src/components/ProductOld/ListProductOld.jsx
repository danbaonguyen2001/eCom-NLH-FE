import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/tabletlaptop/listproductold.css";
import "../../sass/phone/rating.scss";
import StarRating from "../accessories/StarRating";

const ListProductOld = ({ list, qt }) => {
  const listProduct = list;
  // const [quantity,setQuantity] = useState(quantityShow)
  // quantityShow là biến hiển thị bao nhiêu sản phẩm init = 5
  // total quantity là số sản phẩm còn lại
  const [quantityShow, setQuantityShow] = useState(5);
  const [totalQuantity, setTotalQuantity] = useState(
    listProduct?.length - quantityShow
  );
  useEffect(() => {
    setQuantityShow(5);
    setTotalQuantity(listProduct?.length - 5);
  }, [listProduct]);
  // khi mà click nút btn xem thêm thì nó dô cái này .. thì setQuantityShow lấy
  // biến ban đầu + cho số sp mún sô lần kế tiếp

  
  
  const handleShowViewMore = (e) => {
    setQuantityShow((prev) => prev + 5);
    setTotalQuantity((prev) => prev - 5);
  };
  
  return (
    <div>
      <div className="listProductOld">
        {listProduct?.slice(0, quantityShow).map((item) => (
          <Link
          to={{
            pathname: `/productdetail/${item.name.replaceAll(" ","-")}`,
            state: { productId: item.id },
          }}
          key={item?.id}
          className="item_ProductOld"
          >
            <div className="label_tragop">Trả góp 0.5%</div>
            <div className="img_item">
              <img src={item?.image} alt="" />
            </div>
            <div className="deal_Productold">
              <img
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/297632120_799671721273088_3656926271973415090_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OexV_wfLJmcAX_zA8pn&tn=uqNY_A4K5aIz-Opo&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJEyezZUMM1GhKKawfAyyTnKJpCvlrcOHoagw-7eYd_Qw&oe=6318C966"
                alt=""
              />
              <div>Giảm giá cực sốc</div>
            </div>
            <div className="title_ProductOld">{item?.name}</div>
            <div className="priceold_discount_ProductOld">
              <div className="price_old_ProductOld">
                {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                <div className="donvi">&#8363;</div>
              </div>
              <div className="discount_ProductOld">-{item?.promotion}%</div>
            </div>
            <div className="price_new_ProductOld">
              {item?.marketPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <div className="donvi">&#8363;</div>
            </div>
            <div className="star-phone">
              <StarRating rating={item?.rate} />
            </div>
            <div className="sosanhproduct">
              <i class="fa-solid fa-circle-plus"></i> So sánh
            </div>
          </Link>
        ))}
      </div>
      <div className="button_xemthem">
        {totalQuantity <= 0 ? (
          ""
        ) : (
          <button onClick={handleShowViewMore}>
            Xem thêm {totalQuantity} sản phẩm &nbsp;
            <i class="fa-solid fa-caret-down"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListProductOld;
