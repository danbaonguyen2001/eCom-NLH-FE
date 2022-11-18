import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./subComponent/Product";
import Info from "./subComponent/Info";
import { toVND } from "../../utils/format";
import { useDispatch } from "react-redux";
import { setCartTotal } from "../../features/cart/cartSlice";
// Ship fee
import { getShipFee } from "../../apis/apiShipment";
const OrderConfirm = React.lazy(() => import("./subComponent/OrderConfirm"));

const HasProduct = ({ cart }) => {
  //
  const dispatch = useDispatch();
  //
  //
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
      return 10;
      //return v?.item.promotion;
    });

    setPromotionList([...promotionList, ...promotionsGet]);

    // get cart info
    const newArr = cart.map((v) => {
      //console.log(cart);
      const currentProduct = productListInfo.find(
        (item) => item._id == v?.item?.color
      );

      let obj = {
        quantity: currentProduct?.quantity || v.quantity || 0,
        id: v.item.color._id || 0,
      };
      if (currentProduct || obj.id != 0) {
        return obj;
      }
    });

    //setProductListInfo([...newArr]);

    setProductListInfo(cart);
  }, [cart]);

  //console.log(cart);

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

    // get Ship fee
    // MOCK
    // sample input ship fee
    let insuranceValue;
    const input = {
      wt: 50,
      wh: 20,
      l: 20,
      h: 50,
      from_district: 1452,
      ward: 21012,
      district: 1454,
      service_id: 53320,
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
      .catch((e) => console.log(e));
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
  }, [productListInfo]);

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
        {/* <Info
          promotionList={promotionList}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        /> */}

        <div className="line"></div>
        {/* <OrderConfirm
          cartInfo={cartInfo}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
        /> */}
      </div>
    </div>
  );
};

export default HasProduct;
