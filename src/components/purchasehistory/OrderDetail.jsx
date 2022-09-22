import React, { useEffect, useState } from "react";

import "../../sass/purchasehistory/_order_detail.scss";
import img1 from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
import orderController from "../../features/order/function";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { toDate, toVND } from "../../utils/format";
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
    const fetchOrder = async () => {
      try {
        const res = await orderController.getOrderInfo({ orderId });
        const { status, data } = res;
        console.log(res);
        if (status) {
          setOrderData(data?.orders);
          setItemsData(data?.items);
        }
      } catch (e) {
        toast.error(`Không thể tải dữ liệu đơn hàng thử lại`, {
          closeOnClick: true,
          autoClose: 5000,
          position: "top-right",
        });
      }
    };
    fetchOrder();
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
            console.log(res)
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
      {itemsData?.map((item, index) => {
        return (
          <li style={{ listStyle: "none" }} key={index}>
            <div className="line"></div>

            <div className="order_detail_list">
              <div className="order_detail_list_item flex">
                <div className="order_detail_list_item_img">
                  {
                    item.product.productImages?.map(i => (
                      (i.id === item.productColor.id ? <img className="order_detail_img" src={i.urlImage} alt="loading" /> : null)
                    ))
                  }
                 
                </div>
                <div className="order_detail_list_item_infor">
                  <h5 className="mg_b_10">
                    {item?.itemName || "Đang cập nhật"}
                  </h5>
                  <h6 className="mg_b_10">
                    {`Màu: ${
                      item?.productColor?.color?.name || "Đang cập nhật"
                    }`}
                  </h6>
                  <h6 className="mg_b_10">
                    {`Loại: ${
                      item?.productOption?.optionName || "Đang cập nhật"
                    }`}
                  </h6>
                  <h6 className="mg_b_10">
                    {`Số lượng: ${item?.quantity || "Đang cập nhật"}`}
                  </h6>
                  <h6 className="mg_b_10">
                    {`Giá niêm yết: ${
                      toVND(item?.productOption?.price) || "Đang cập nhật"
                    }`}
                  </h6>
                  <h6 className="mg_b_10">
                    {`Thương hiệu: ${
                      item?.product?.manufacturer?.name || "Đang cập nhật"
                    }`}
                  </h6>
                  <h6 className="mg_b_10">
                    {`Hệ điều hành: ${
                      item?.product?.subcategory?.categoryName ||
                      "Đang cập nhật"
                    }`}
                  </h6>

                  <h6>
                    <i class="fa-solid fa-circle mg_r_5"></i>
                    Giảm 500.000 khi toán bằng zalo pay
                  </h6>
                </div>
                <div className="order_detail_list_item_price">
                  <h5 className="text_primary">
                    {toVND(item?.totalPrice) || "Đang cập nhật"}
                  </h5>
                </div>
              </div>
            </div>
          </li>
        );
      })}
      <div className="line"></div>
      <div className="order_detail_total_price flex">
        {/* Pay State */}
        {paymentMethod == "cod" ? (
          <h6>Đơn hàng chưa được thanh toán</h6>
        ) : (
          <div>
            <div style={{ display: "flex" }}>
              <h6>Đơn hàng đã được thanh toán bằng &nbsp;</h6>
              <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                {orderData?.orderdetail?.payment?.name.toUpperCase()}
              </h6>
            </div>
            <h6>Mã thanh toán: {orderData?.paymentId}</h6>
          </div>
        )}
        {/* Total */}
        <div>
          <h5>Tổng tiền</h5>
          <h5 className="text_primary">
            {toVND(orderData?.orderdetail?.totalPrice) || "Đang cập nhật"}
          </h5>
        </div>
      </div>

      <div className="line"></div>
      {/* Info */}
      <div className="order_detail_infor">
        <div className="order_detail_infor_header">
          <h5>Địa chỉ và thông tin người nhận hàng : </h5>
        </div>
        <h6 className="mg_b_10">
          <i class="fa-solid fa-user mg_r_5"></i>
          {`${orderData?.orderUser?.name} - ${
            orderData?.orderUser?.phone || "Chưa cung cấp số điện thoại"
          } - ${orderData?.orderUser?.email || "Chưa cung cấp email"}`}
        </h6>

        <h6 className="mg_b_10">
          <i class="fa-solid fa-location-dot mg_r_5"></i>
          {orderData?.orderdetail?.deliveryAddress || "Đang cập nhật"}
        </h6>

        {/* Thời gian nhận hàng */}
        {/* 6 : Sunday */}

        <h6>
          <i class="fa-solid fa-clock mg_r_5"></i>

          {`Đơn hàng đặt lúc: ${toDate(date) || "Đang cập nhật"}`}
        </h6>
        <h6>
          <i class="fa-solid fa-clock-rotate-left mg_r_5"></i>

          {`Được xác nhận lúc: Sau 30 phút làm việc ngày ${
            toDate(date) || "Đang cập nhật"
          }`}
        </h6>
        <h6>
          <i class="fa-solid fa-truck mg_r_5"></i>
          Thời gian nhận hàng: Trước{" "}
          {(date.getDay() == 6
            ? toDate(date.setDate(date.getDate() + 4))
            : date.getDay() == 5
            ? toDate(date.setDate(date.getDate() + 5))
            : toDate(date.setDate(date.getDate() + 3))) || "Đang cập nhật"}
        </h6>
      </div>
      <div className="line"></div>

      <div className="flex_center" style={{ justifyContent: "space-between" }}>
        <button
          className="order_detail_btn btn"
          onClick={() => history.push("/purchasehistory/product")}
        >
          Quay lại danh sách đơn hàng
        </button>
        <CancelButton
          style={disableCancel ? { pointerEvents: "none", opacity: 0.6 } : {}}
          onClick={handleCancelOrder}
        >
          {" "}
          Hủy đơn{" "}
        </CancelButton>
      </div>
    </div>
  );
};

export default OrderDetail;
