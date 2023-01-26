import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../assets/css/home/productcard.css";
// Icon
import "../../../sass/phone/rating.scss";
import bdI from "../../../assets/images/home/event/bdI.png";
import ticketI from "../../../assets/images/home/event/ticketI.png";
import { Link } from "react-router-dom";
import eyeI from "../../../assets/images/home/eyeI.png";
import { toVND } from "../../../utils/format";
const StarRating = React.lazy(() => import("../../accessories/StarRating"));
const ProductCard = ({ data, award }) => {
  const mouseEnterHandler = () => {
    setEyeS(true);
  };
  const mouseLeaveHandler = () => {
    setEyeS(false);
  };
  const [eyeS, setEyeS] = useState(false);

  return (
    <Link
      to={{
        pathname: `/productdetail/${data?.name.replaceAll(" ", "-")}`,
        state: { productId: data?._id },
      }}
    >
      <div
        onMouseEnter={()=>setEyeS(true)}
        onMouseLeave={()=>setEyeS(false)}
        className="pCardWrap"
      >
        {/* overlay */}
        <div className={`pCard__overlay ${eyeS ? "pCard__overlay--show" : ""}`}>
          <LazyLoadImage src={eyeI} />
        </div>
        {/* content */}
        <div className="pCard__inner">
          <div className="pCard__TG">
            {(data?.installment != null ? (
              <p>Trả góp 0%</p>
            ) : (
              <p>Không áp dụng trả góp</p>
            )) || (data?.TG ? <p>Trả góp 0%</p> : <p>Không áp dụng trả góp</p>)}
          </div>
          <div className="pCard__img">
            <LazyLoadImage src={data?.image} />
          </div>
          <div className="pCard__des">
            <div
              className={`pCard__event--${
                data?.event || Math.floor(Math.random() * 2 + 1)
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
            <div className="pCard__name">{data?.name}</div>
            <div className="pCard__price">
              {data?.price ? (
                <div className="pCard__price--marketPrice">
                  {toVND(data?.price)}
                </div>
              ) : (
                <></>
              )}
              <div className="marketPriceWrap">
                <div className="pCard__price--onStockPrice">
                  {toVND(data?.price)}
                </div>
                <div className="pCard__promotion">
                  -{data?.promotion || "15"}%
                </div>
              </div>
            </div>
            {/* promotion */}

            <div className="pCard__award">{award}</div>
            <div className="star-phone">
              <StarRating rating={data?.rating || 4} />
              <span>{`(${data?.countRate || "3"})`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
