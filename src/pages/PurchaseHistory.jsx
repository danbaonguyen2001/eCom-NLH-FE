import React, { useEffect, useState } from "react";
import "../sass/purchasehistory/_purchase_history.scss";

import { useParams, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { getParamsValue } from "../utils/format";
const NoOrder = React.lazy(() =>
  import("../components/purchasehistory/NoOrder")
);
const ListOrder = React.lazy(() =>
  import("../components/purchasehistory/ListOrders")
);
const OrderDetail = React.lazy(() =>
  import("../components/purchasehistory/OrderDetail")
);
const PasswordChange = React.lazy(() =>
  import("../components/purchasehistory/PasswordChange")
);
const UserInFor = React.lazy(() => import("../components/UserInFor"));
const PurchaseHistory = (props) => {
  // Side button effects
  const [clickList, setClickList] = useState(true);
  const [clickInfor, setClickInfo] = useState(false);
  //
  const [openNoOrder, setOpenNoOrder] = useState(false);
  //
  const [openListOrder, setOpenListOrder] = useState(true);
  const [openOrderDetail, setOpenOrderDetail] = useState(false);
  //
  const [passwordChange, setPasswordChange] = useState(false);
  //
  // check page
  const params = useParams()[0].slice(1);
  const location = useLocation();
  const orderId = getParamsValue(location.search, "orderId");
  const history = useHistory();

  // fake data
  const product = [""];
  useEffect(() => {
    // product n userinfo
    if (params === "userinfo") {
      // Userinfo
      setClickInfo(true);
      setClickList(false);
      setOpenNoOrder(false);
      setOpenListOrder(false);
      setOpenOrderDetail(false);
      setPasswordChange(false);
    } else if (params === "product") {
      setClickList(true);
      setClickInfo(false);
      setOpenOrderDetail(false);
      setPasswordChange(false);

      if (product < 1) {
        // Order không có đơn
        setOpenNoOrder(false);
        setOpenListOrder(true);
        setPasswordChange(false);
      } else {
        // Order có đơn
        setOpenNoOrder(true);
        setOpenListOrder(false);
        setPasswordChange(false);
      }
    } else if (params === "order") {
      setClickInfo(false);
      setClickList(true);
      setOpenNoOrder(false);
      setOpenListOrder(false);
      setOpenOrderDetail(true);
      setPasswordChange(false);
    } else if (params === "password_change") {
      setClickInfo(false);
      setClickList(false);
      setOpenNoOrder(false);
      setOpenListOrder(false);
      setOpenOrderDetail(false);
      setPasswordChange(true);
    }
  }, [props,params]);

  //Get user information
  // const { name } = useSelector(selectCurrentUser);
  return (
    <div className="purchase_history">
      <div className="purchase_history_box_left">
        <button
          className={`purchase_history_box_left_btn ${
            clickList ? "active_btn_history" : " "
          }`}
          onClick={() => {
            history.push("/purchasehistory/product");
          }}
        >
          <i class="fa-solid fa-square-poll-horizontal icon_history mg_r_5"></i>
          Danh sách đơn hàng đã mua
        </button>
        <button
          className={`purchase_history_box_left_btn ${
            clickInfor ? "active_btn_history" : " "
          }`}
          onClick={() => {
            history.push("/purchasehistory/userinfo");
          }}
        >
          <i class="fa-solid fa-circle-user icon_history mg_r_5"></i>
          Thông tin cá nhân và địa chỉ
        </button>
      </div>
      <div className="purchase_history_box_right">
        <div className="purchase_history_box_right_title">
          <div className="purchase_history_box_right_title_right flex">
            <button className="logout_btn_history">
              <i class="fa-regular fa-comment-dots mg_r_5"></i>Phản hồi,góp ý
            </button>
            <div className="seperate"></div>
            <button className="logout_btn_history">Thoát tài khoản</button>
          </div>
        </div>
        <div className="purchase_history_box_right_main border">
          {/* Chưa có đơn hàng */}

          {openNoOrder && <NoOrder />}

          {/* Danh sách đơn hàng */}
          {openListOrder && <ListOrder />}

          {/* Chi tiết đơn hàng */}
          {openOrderDetail && <OrderDetail orderId={orderId} />}

          {/* Chỉnh sửa thông tin cá nhân */}
          {clickInfor && <UserInFor />}
          {/* Password Change */}
          {passwordChange ? (
            <PasswordChange />
          ) : (
            () => history.push(`/purchasehistory/userinfo`)
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
