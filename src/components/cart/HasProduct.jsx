import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Product from "./subComponent/Product";
import { toast } from "react-toastify";

import Info from "./subComponent/Info";
// Ship fee
import { getShipFee } from "../../apis/apiShipment";
const OrderConfirm = React.lazy(() => import("./subComponent/OrderConfirm"));

const HasProduct = ({ cart }) => {
  //
  const [detailAddress, setDetailAddress] = useState({});
  const [promotionList, setPromotionList] = useState([]);
  const [productListInfo, setProductListInfo] = useState([]);
  const [cartInfo, setCartInfo] = useState({
    quantity: 0,
    total: 0,
    serviceFee: 0,
  });
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
        productColorId: 0,
        quantity: 0,
      },
    ],
    shippingPrice: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    // get promotion list
    const promotionsGet = cart.map((v) => {
      return v;
      // return v?.item.promotion;
    });

    setPromotionList([...promotionList, ...promotionsGet]);

    setProductListInfo(cart);
  }, [cart]);

  useEffect(() => {
    const totalGet = cart.reduce(
      (prev, curr) => {
        const currQuantity =
          productListInfo.find((v) => v._id == curr.item?.color?._id)
            ?.quantity || 0;
        return {
          total: prev.total + curr.item?.price * currQuantity,
          quantity: prev.quantity + currQuantity,
        };
      },
      {
        quantity: 0,
        total: 0,
      }
    );

    setCartInfo({
      ...totalGet,
    });

    // set order info
    const validInputArray = productListInfo.map((v) => ({
      color: v._id,
      quantity: v.quantity,
    }));
    setOrderInfo({
      ...orderInfo,
      items: [...validInputArray],
    });
  }, [productListInfo, detailAddress]);
  useMemo(() => {
    // get Ship fee
    // sample input ship fee
    let insuranceValue;
    const getAddress = detailAddress?.detailAddress
      ? {
          ...detailAddress.detailAddress,
        }
      : {
          ...detailAddress,
        };
    const input = {
      wt: 50,
      wh: 20,
      l: 20,
      h: 50,
      ward: getAddress?.ward?.wardCode,
      district: getAddress?.district?.districtID,
      insurance_value: insuranceValue || 100000,
    };
    const fetchShip = async (input) => await getShipFee(input);
    fetchShip(input)
      .then((res) => {
        const { total: totalFee, service_fee } = res?.data?.data;
        setOrderInfo({
          ...orderInfo,
          shippingPrice: service_fee,
        });
        setCartInfo((prev) => {
          return {
            ...prev,
            serviceFee: service_fee,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [
    detailAddress?.detailAddress?.district?.districtID,
    detailAddress?.detailAddress?.ward?.wardCode,
  ]);
  return (
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
              <Product
                productListInfo={productListInfo}
                setProductListInfo={setProductListInfo}
                key={index}
                dataProduct={product}
              />
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

        <div className="line"></div>
        <OrderConfirm
          cartInfo={cartInfo}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        />
      </div>
    </div>
  );
};

export default HasProduct;
