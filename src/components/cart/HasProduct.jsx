import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Product from "./subComponent/Product";
import { toast } from "react-toastify";

import Info from "./subComponent/Info";
import { toVND } from "../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartTotal,
  selectCurrentCartInfo,
} from "../../features/cart/cartSlice";

// Ship fee
import { getShipFee } from "../../apis/apiShipment";
import { ErrorResponse } from "../../utils/ErrorResponse";
import Loader from "../loading/Loader";
import { useUpdateCartMutation } from "../../features/cart/cartApiSlice";
const OrderConfirm = React.lazy(() => import("./subComponent/OrderConfirm"));

const HasProduct = ({ cart, setCart }) => {
  //
  const [detailAddress, setDetailAddress] = useState({});

  const [isFetch, setIsFetch] = useState(false);

  const [promotionList, setPromotionList] = useState([]);
  const [productListInfo, setProductListInfo] = useState([]);
  const [disableOrder, setDisableOrder] = useState(false);
  const [cartInfo, setCartInfo] = useState({
    quantity: 0,
    total: 0,
    serviceFee: 0,
  });
  // subscribe quantity update
  const {isLoading} = useUpdateCartMutation({
    fixedCacheKey: "update-cart-quantity-key",
  })[1]
  // order info
  const [orderInfo, setOrderInfo] = useState({
    paymentMethod: "",
    discountCode: "",
    deliveryAddress: "",
    description: "",
    differentReceiverName: "",
    differentReceiverPhone: "",
    items: [
      {
        itemID: 0,
        quantity: 0,
      },
    ],
    shippingPrice: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    const arrCart = cart.map((v) => {
      return {
        price: v?.item?.price,
        quantity: v?.item?.quantity,
        itemID: v?._id,
      };
    });

    setProductListInfo(arrCart);

    const totalGet = arrCart.reduce(
      (prev, curr) => {
        return {
          total: prev.total + curr.price * curr.quantity,
          quantity: prev.quantity + curr?.quantity,
        };
      },
      {
        quantity: 0,
        total: 0,
      }
    );

    setCartInfo({
      ...cartInfo,
      ...totalGet,
    });

    // set order info
    setOrderInfo({
      ...orderInfo,
      items: [...arrCart],
    });
  }, [cart]);
  useEffect(() => {
    // get Ship fee
    // sample input ship fee
    let insuranceValue;
    const input = {
      wt: 50,
      wh: 20,
      l: 20,
      h: 50,
      ward: detailAddress?.ward?.wardCode,
      district: detailAddress?.district?.districtID,
      insurance_value: insuranceValue || 100000,
    };
    if (detailAddress?.district?.districtID) {
      getShipFee(input)
        .then((res) => {
          console.log(res);
          const { total } = res?.data?.data;
          setDisableOrder(false);
          setOrderInfo({
            ...orderInfo,
            shippingPrice: total,
          });
          setCartInfo((prev) => {
            return {
              ...prev,
              serviceFee: total,
            };
          });
        })
        .catch(() => {
          setDisableOrder(true);
          setOrderInfo({
            ...orderInfo,
            shippingPrice: 0,
          });
          setCartInfo((prev) => {
            return {
              ...prev,
              serviceFee: 0,
            };
          });

          toast.error(`Địa chỉ này chưa hỗ trợ giao hàng`, {
            position: "top-right",
            autoClose: 5000,
            toastId: 99,
            closeOnClick: true,
          });
        });
    }
  }, [detailAddress?.district?.districtID]);
  return (
    <Loader isLoading={isLoading}>
      <div className="has_cart  ">
        <div className="has_cart_header flex ">
          <Link to="/" className="has_cart_return">
            <i className="fa-solid fa-angle-left mg_r_5"></i>
            Mua thêm sản phẩm
          </Link>
          <header className="has_cart_heading">Giỏ hàng của bạn</header>
        </div>
        <div className="has_cart_container border">
          <div className="has_cart_list_product">
            {cart.map((product, index) => {
              return (
                <Product key={index} dataProduct={product} setCart={setCart} />
              );
            })}
          </div>

          {/* UserInfo */}
          <div className="line"></div>
          <Info
            promotionList={promotionList}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            detailAddress={detailAddress}
            setDetailAddress={setDetailAddress}
          />

          <OrderConfirm
            cartInfo={cartInfo}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            disableOrder={disableOrder}
          />
        </div>
      </div>
    </Loader>
  );
};

export default HasProduct;
