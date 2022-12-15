import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../features/product/productSlice";
import { toVND } from "../utils/format";
import StarRating from "./accessories/StarRating";
import ProductCard from "./ProductCard";

const ListProduct = ({ list, qt }) => {
  const listProduct = list;
  const [quantityShow, setQuantityShow] = useState(5);
  const [totalQuantity, setTotalQuantity] = useState(
    listProduct?.length - quantityShow
  );
  useEffect(() => {
    setQuantityShow(5);
    setTotalQuantity(listProduct?.length - 5);
  }, [listProduct]);

  const handleShowViewMore = (e) => {
    setQuantityShow((prev) => prev + 5);
    setTotalQuantity((prev) => prev - 5);
  };

  return (
    <div>
      <div className="list-product grid wide">
        <div className="row">
          {listProduct?.slice(0, quantityShow).map((item) => (
            // <Link
            //   to={{
            //     pathname: `/productdetail/${item.name.replaceAll(" ", "-")}`,
            //     state: { productId: item.id },
            //   }}
            //   key={item?.id}
            //   className="item_productPhone"
            // >
            //   <div className="label_tragop">Trả góp 0.5%</div>
            //   <div className="img_item">
            //     <img src={item?.image} alt={item?.name} />
            //   </div>

            //   <div className="deal_producPhone">
            //     <img
            //       src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/297632120_799671721273088_3656926271973415090_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OexV_wfLJmcAX_zA8pn&tn=uqNY_A4K5aIz-Opo&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJEyezZUMM1GhKKawfAyyTnKJpCvlrcOHoagw-7eYd_Qw&oe=6318C966"
            //       alt=""
            //     />
            //     <div>Giảm giá cực sốc</div>
            //   </div>

            //   <div className="title_productPhone">{item?.name}</div>

            //   <div className="discount_productPhone_priceOld">
            //     <div className="priceOld_productPhone">
            //       {/* {item?.marketPrice
            //       .toString()
            //       .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "} */}
            //       {toVND(item?.price)}
            //       {/* <div className="donvi">&#8363;</div> */}
            //     </div>
            //     <div className="discount_productPhone">-{item?.promotion}%</div>
            //   </div>

            //   <div className="price_currency_productPhone">
            //     {toVND(item?.marketPrice)}
            //     {/* <div className="donvi">&#8363;</div> */}
            //   </div>

            //   <div className="star-phone">
            //     <StarRating rating={item?.rate} />
            //     {/* <StarRating rating={3.7} /> */}
            //   </div>
            //   <div
            //     className="sosanhproduct"
            //     onClick={(e) => {
            //       e.preventDefault();
            //       handleAddProductCompare(item);
            //     }}
            //   >
            //     <i className="fa-solid fa-circle-plus"></i> So sánh
            //   </div>
            // </Link>
            <ProductCard item={item} />
          ))}
        </div>
      </div>
      <div className="button_xemthem">
        {totalQuantity <= 0 ? (
          ""
        ) : (
          <button onClick={handleShowViewMore}>
            Xem thêm {totalQuantity} sản phẩm &nbsp;
            <i className="fa-solid fa-caret-down"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
