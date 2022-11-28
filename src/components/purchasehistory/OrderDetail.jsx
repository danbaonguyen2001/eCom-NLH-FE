import React, { useEffect, useState } from "react";

import "../../sass/purchasehistory/_order_detail.scss";
import img1 from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
import orderController from "../../features/order/function";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { toDate, toVND } from "../../utils/format";
import ProductItem from "./subcomponents/ProductItem";
const OrderInfo = React.lazy(() =>
  import("../cart/subComponent/OrderInfo/OrderInfo")
);
const OrderState = React.lazy(() =>
  import("../cart/subComponent/OrderInfo/OrderState")
);
//
const CancelButton = styled.span`
  border: 1px solid red;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  align-self: center;
  color: red;
  transition: 0.1s all linear;
  &:hover {
    transition: 0.1s all linear;
    color: white;
    background-color: red;
    border: 1px solid white;
  }
`;
//

const OrderDetail = ({ orderId }) => {
  const history = useHistory();
  //
  const [orderData, setOrderData] = useState({});
  const [itemsData, setItemsData] = useState([]);
  const date = new Date(orderData?.createTime);
  const paymentMethod = orderData?.orderdetail?.payment?.name;
  // cancel state
  const [disableCancel, setDisableCancel] = useState(false);
  useEffect(() => {
    orderController
      .getOrderInfo({ orderId })
      .then((res) => {
        const { success, order } = res?.data;
        if (success) {
          setOrderData(order);
          setItemsData(order?.orderItems);
        }
      })
      .catch((e) => {
        toast.error(`Không thể tải dữ liệu đơn hàng thử lại`, {
          closeOnClick: true,
          autoClose: 5000,
          position: "top-right",
        });
      });
  }, [orderId]);
  const handleCancelOrder = async () => {
    const paymentMethod = orderData?.orderdetail?.payment?.name;
    const orderState = orderData?.state;

    if (orderState.toUpperCase() == "pending".toUpperCase()) {
      if (paymentMethod != "cod") {
        toast.warning(`Chưa hỗ trợ hoàn tiền ví điện tử. Liên hệ hotline`, {
          autoClose: 5000,
          closeOnClick: true,
          position: "top-right",
        });
        setDisableCancel(true);
      } else {
        const confirm = window.confirm(
          "Bạn có chắc muốn hủy đơn hàng này không"
        );
        if (confirm) {
          try {
            // alter
            const res = await orderController.handlerCancelCodOrder({
              orderId,
            });
            console.log(res);
            res &&
              toast.success(`Hủy đơn hàng thành công`, {
                closeOnClick: true,
                autoClose: 5000,
                position: "top-right",
              });
            !res &&
              toast.error(`Xảy ra lỗi trong quá trình hủy đơn hàng`, {
                closeOnClick: true,
                autoClose: 5000,
                position: "top-right",
              });
          } catch (e) {
            console.log(e);
          }
        }
      }
    } else {
      setDisableCancel(true);
      toast.warning(`Đơn hàng này đã được xử lý, không thể hủy `, {
        autoClose: 5000,
        closeOnClick: true,
        position: "top-right",
      });
    }
  };
  return (
    <div className="order_detail">
      {/* Title */}
      <div className="order_detail_header">
        <h4>CHI TIẾT ĐƠN HÀNG #{orderData?.id}</h4>
        <div className="order_detail_header_status flex">
          <h5 className="mg_r_10">Trạng thái:</h5>
          <h5 style={{ textTransform: "capitalize" }} className="text_primary">
            {orderData?.state}
          </h5>
        </div>
      </div>
      {/* List content */}
      {orderData?.orderItems?.map((item, index) => <ProductItem key={index} item={item}/>)}

      {/*Order Info */}
      <OrderInfo orderData={orderData} />
      <OrderState orderData={orderData} />

    </div>
  );
};

export default OrderDetail;
