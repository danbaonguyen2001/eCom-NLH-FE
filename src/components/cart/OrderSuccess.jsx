import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import orderController from "../../features/order/function";
import cartController from "../../features/cart/function"
import { useDispatch } from "react-redux";
import "../../sass/cart/cart.scss";
import { getParamsValue, toDate, toVND } from "../../utils/format";
import { setCurrentCart } from "../../features/cart/cartSlice";
const CancelButton = styled.span`
  border: 1px solid red;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: red;
    border: 1px solid white;
  }
`;
//
const OrderSuccess = () => {
  let history = useHistory();
  const dispatch = useDispatch()
  //
  const [orderData, setOrderData] = useState({});
  const [itemsData, setItemsData] = useState([]);
  //
  const orderState = history.location.search.replace(/\?/, "").split("=")[0];
  //
  const orderId =
    getParamsValue(history.location.search, "orderId") ||
    getParamsValue(history.location.search, "error");
  useEffect(() => {
    // function
    if (orderState === "orderId") {
      cartController.handlerRemoveCartAll();
      dispatch(setCurrentCart([]))
      const fetchOrder = async (orderId) => {
        try {
          const res = await orderController.getOrderInfo({ orderId });

          const { status, data } = res;
          if (status) {
            setOrderData(data?.orders);
            setItemsData(data?.items);
          } else {
            toast.error(
              `Đơn hàng này không tồn tại, có thể hệ thống bị trục trặc thử lại sau`,
              {
                toastId:3,
                autoClose: 5000,
                closeOnClick: true,
                position: "top-right",
              }
            );
          }
        } catch (e) {
          console.log(e);
          toast.error(
            `Có lỗi xảy ra khi tải đơn hàng. Kiểm tra mail để biết chi tiết đơn hàng`,
            {
              autoClose: 5000,
              closeOnClick: true,
              position: "top-right",
            }
          );
        }
      };
      // alter
      fetchOrder(orderId);
    } else {
      
      toast.warning(`Đơn hàng gặp trục trặc khi thanh toán, thử lại`,{
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
      history.push("/cart")
    }
  }, []);
  const routeHome = () => {
    let path = `/`;
    history.push(path);
  };
  const date = new Date(orderData?.createTime);
  //
  const handleCancelOrder = async () => {
    const paymentMethod = orderData?.orderdetail?.payment?.name;
    if (paymentMethod != "cod") {
      toast.warning(`Chưa hỗ trợ hoàn tiền ví điện tử. Liên hệ hotline`, {
        autoClose: 5000,
        closeOnClick: true,
        position: "top-right",
      });
    } else {
      const confirm = window.confirm("Bạn có chắc muốn hủy đơn hàng này không");
      if (confirm) {
        try {
          // alter
          const res = await orderController.handlerCancelCodOrder({ orderId });
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
  };
  return (    <div className="cart_order_success border">
      <div className="order_success_header flex  flex_center flex_100_width">
        <i class="fa-solid fa-clipboard-check mg_r_5"></i>
        <header className="order_success_heading">Đặt hàng thành công</header>
      </div>
      <div className="line"></div>
      <div className="order_success_content">
        <div className="order_success_detail">
          <header>
            Cảm ơn khách hàng đã cho Thế giới di động cơ hội được phục vụ
          </header>
          <div className="order_success_detail_box flex_100_width border">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="fw_header">Đơn hàng: #{orderData?.id}</span>
              <CancelButton
                onClick={handleCancelOrder}
                className="detail_box_cancel"
              >
                Huỷ
              </CancelButton>
            </div>
            <div className="detail_box_receiver">
              <span className="fw_header">Người nhận: </span>
              <span>{`${orderData?.orderUser?.name}`}</span>
            </div>
            <div className="detail_box_receiver">
              <span className="fw_header">Số điện thoại: </span>
              <span>
                {orderData?.orderUser?.phone ||
                  "Chưa có số điện thoại, kiểm tra mail"}
              </span>
            </div>
            <div className="detail_box_receiver">
              <span className="fw_header">Email: </span>
              <span>
                {orderData?.orderUser?.email ||
                  "Chưa có số điện thoại, kiểm tra mail"}
              </span>
            </div>
            <div className="detail_box_address">
              <span className="fw_header">Giao đến: </span>
              <span>{orderData?.orderdetail?.deliveryAddress}</span>
            </div>
            <div className="detail_box_total_price">
              <span className="fw_header">Tổng tiền: </span>
              <span className="total_price">
                {toVND(orderData?.orderdetail?.totalPrice)}
              </span>
            </div>
          </div>
          {orderData?.orderdetail?.payment?.name == "cod" ? (
            <div className="detail_box_payment">
              Đơn hàng chưa được thanh toán
            </div>
          ) : (
            <>
              <div className="detail_box_payment">
                Đơn hàng đã được thanh toán bằng{" "}
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {orderData?.orderdetail?.payment?.name.toUpperCase()}
                </span>
              </div>
              <div
                style={{ marginBottom: "1.5rem" }}
                className="detail_box_total_price"
              >
                <span className="fw_header">
                  Mã thanh toán: {orderData?.paymentId}
                </span>
              </div>
            </>
          )}
        </div>
        {/*  */}
        <div>
          <button className="btn order_success_btn" onClick={routeHome}>
            Đặt hàng thành công
          </button>
        </div>
        <div className="line"></div>
        <div className="order_success_infor_delivery">
          {/* Prepare */}
          <div className="order_success_infor_delivery_header">
            <span className="pd_r_8 fw_header">Chờ xác nhận đơn hàng: </span>
            <span>30 phút làm việc kể từ: {toDate(date)}</span>
          </div>
          {/* Receive */}
          <div className="order_success_infor_delivery_header">
            <span className="pd_r_8 fw_header">Thời gian nhận hàng: </span>
            {/* 6 : Sunday */}
            <span>
              {date.getDay() == 6
                ? toDate(date.setDate(date.getDate() + 4))
                : date.getDay() == 5
                ? toDate(date.setDate(date.getDate() + 5))
                : toDate(date.setDate(date.getDate() + 3))}
            </span>
          </div>
          {/* Order State */}
          <div className="order_success_infor_delivery_header">
            <span className="pd_r_8 fw_header">Trạng thái đơn hàng: </span>
            <span style={{ textTransform: "capitalize" }}>
              {orderData.state}
            </span>
          </div>
          <button className="btn order_success_btn" onClick={routeHome}>
            Mua thêm sản phẩm khác
          </button>
        </div>

        <div className="order_success_review border flex">
          <div className="order_success_review_left flex_50_width flex_center">
            Bạn có hài lòng về trải nghiệm mua hàng không
          </div>
          <div className="order_success_review_right flex flex_50_width">
            <a className="order_success_review_good">
              <i class="fa-solid fa-face-grin-hearts review_good_icon pd_b_5"></i>
              <span>Hài lòng</span>
            </a>
            <a className="order_success_review_bad">
              <i class="fa-solid fa-face-frown review_bad_ion pd_b_5"></i>
              <span>Không hài lòng</span>
            </a>
          </div>
        </div>
      </div>
    </div>)
  
};

export default OrderSuccess;
