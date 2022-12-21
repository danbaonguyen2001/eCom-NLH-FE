import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../features/product/productSlice";
import { toVND } from "../utils/format";
import StarRating from "./accessories/StarRating";

const ProductCard = ({ item }) => {
  //Add Compare Product
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);
  const handleAddProductCompare = (item) => {
    const action = addProduct(item.id);
    dispatch(action);
  };
  return (
    <div className="pd-card l-2-4 m-4 c-6">
      <Link
        to={{
          pathname: `/productdetail/${item.name.replaceAll(" ", "-")}`,
          state: { productId: item.id },
        }}
        key={item?.id}
        className="item_productPhone"
      >
        <div className="label_tragop">Trả góp 0.5%</div>
        <div className="img_item">
          <img src={item?.image} alt={item?.name} />
        </div>

        <div className="deal_producPhone">
          <img
            src="https:scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/297632120_799671721273088_3656926271973415090_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OexV_wfLJmcAX_zA8pn&tn=uqNY_A4K5aIz-Opo&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJEyezZUMM1GhKKawfAyyTnKJpCvlrcOHoagw-7eYd_Qw&oe=6318C966"
            alt=""
          />
          <div>Giảm giá cực sốc</div>
        </div>

        <div className="title_productPhone">{item?.name}</div>

        <div className="discount_productPhone_priceOld">
          <div className="priceOld_productPhone">{toVND(item?.price)}</div>
          <div className="discount_productPhone">-{item?.promotion}%</div>
        </div>

        <div className="price_currency_productPhone">
          {toVND(item?.marketPrice)}
          {/* <div className="donvi">&#8363;</div> */}
        </div>

        <div className="star-phone">
          <StarRating rating={item?.rate} />
          {/* <StarRating rating={3.7} /> */}
        </div>
        <div
          className="sosanhproduct"
          onClick={(e) => {
            e.preventDefault();
            handleAddProductCompare(item);
          }}
        >
          <i className="fa-solid fa-circle-plus"></i> So sánh
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
