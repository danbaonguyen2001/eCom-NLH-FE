import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/css/home/productcard.css";
// Icon
import "../../sass/phone/rating.scss";
import bdI from "../../assets/images/home/event/bdI.png";
import ticketI from "../../assets/images/home/event/ticketI.png";
import { Link } from "react-router-dom";
import eyeI from "../../assets/images/home/eyeI.png";
import { toVND } from "../../utils/format";
import Rating from "@mui/material/Rating";
const StarRating = React.lazy(() => import("../accessories/StarRating"));
const ProductCard = ({ ...props }) => {
  const mouseEnterHandler = () => {
    setEyeS(true);
  };
  const mouseLeaveHandler = () => {
    setEyeS(false);
  };
  const [eyeS, setEyeS] = useState(false);

  const v = props.data;
  return (
    <Link
      to={{
        pathname: `/productdetail/${v?.name.replaceAll(" ", "-")}`,
        state: { productId: v._id },
      }}
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="pCardWrap"
      >
        {/* overlay */}
        <div className={`pCard__overlay ${eyeS ? "pCard__overlay--show" : ""}`}>
          <LazyLoadImage src={eyeI} />
        </div>
        {/* content */}
        <div className="pCard__inner">
          <div className="pCard__TG">
            {(v?.installment != null ? (
              <p>Trả góp 0%</p>
            ) : (
              <p>Không áp dụng trả góp</p>
            )) || (v.TG ? <p>Trả góp 0%</p> : <p>Không áp dụng trả góp</p>)}
          </div>
          <div className="pCard__img">
            <LazyLoadImage src={v?.image} />
          </div>
          <div className="pCard__des">
            <div
              className={`pCard__event--${
                v?.event || Math.floor(Math.random() * 2 + 1)
              } pCard__event`}
            >
              {Math.floor(Math.random() * 2 + 1) == 1 ? (
                <div>
                  <LazyLoadImage src={ticketI} />
                  <p>hot sale 1-10/7</p>
                </div>
              ) : (
                <div>
                  <LazyLoadImage src={bdI} />
                  <p>ưu đãi sinh nhật</p>
                </div>
              )}
            </div>
            <div className="pCard__name">{v?.name}</div>
            <div className="pCard__price">
              {v?.price ? (
                <div className="pCard__price--marketPrice">
                  {toVND(v?.price)}
                </div>
              ) : (
                <></>
              )}

              <div className="marketPriceWrap">
                <div className="pCard__price--onStockPrice">
                  {toVND(v?.price)}
                </div>
                <div className="pCard__promotion">-{"10"}%</div>
              </div>
            </div>
            {/* promotion */}

            {/* <div className="pCard__award">{props?.award || v.award}</div> */}
            <div className="pCard__award">Quà trị giá 500.000</div>
            <div className="star-phone">
              {/* <StarRating rating="5" /> */}
              <Rating name="rate" value={v ? v.rating : 0} readOnly />
              {/* <span>{`(${v?.countRate || v.rating})`}</span> */}
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
