import React, { useState, useEffect } from "react";
// import img from "../../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
//
import { toVND, toDate } from "../../../utils/format";
import cartController from "../../../features/cart/function";
import productController from "../../../features/product/function";
import { Link } from "react-router-dom";
import orderController from "../../../features/order/function";
const Order = ({data}) => {
  const [info, setInfo] = useState({
    items: [],
    orders: {},
  });
  const [rootImg, setRootImg] = useState("");
  //
  // 
  useEffect(() => {
    // Get order information
    const fetchData = async () => {
      // console.log(data)

      const res = await orderController.getOrderInfo({ orderId: data?.orderId });
      try {
      // console.log(res)

        let { status, data, message } = res;
        if (status) {
          setInfo(data);
        } else {
          console.log("Cant get order : " + message);
        }
      } catch (e) {
        console.log(e);
      }
    };
    // Get product information
    const fetchProduct = async () => {
      let productId = info?.items?.[0]?.product?.id ;
      // console.log(productId)
      // res
      const res = await productController.getProductById(productId);
      try {
        let { data } = res;
        // console.log(data)
        setRootImg(data?.images?.[0]?.items?.[0]?.urlImage);
      } catch (e) {
        console.log(e);
      }
    };
    // Call
    // fetchOrder
    fetchData();
    // fetchProduct
    fetchProduct();
  }, [data,info]);

  // get img
  return (
    <div className="order">
      <h5 className="width_15">{`#${data.orderId}`}</h5>
      <div className="order_pd flex_40_width flex">
        <img className="order_pd_img " src={rootImg} alt="Img" />
        <div className="order_pd_detail flex_60_width">
          <h5>{info.items[0]?.product?.name || "Khong co du lieu"}</h5>
          <br />
          <Link className="text_primary" to={`order?orderId=${data?.orderId}`}>
            Xem chi tiết
          </Link>
        </div>
      </div>

      <h5 className="width_15">{toVND(data.totalPrice)}</h5>
      <h5 className="width_15">{toDate(data.orderDate)}</h5>
      <h5 className="width_15" style={{ textTransform: "capitalize" }}>
        {data.state}
      </h5>
    </div>
  );
};

export default Order;
