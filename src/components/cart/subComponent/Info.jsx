import React, { useRef } from "react";
import { useState } from "react";
import userController from "../../../features/user/function";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect } from "react";
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    height: 100%;
    line-height: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 14px;
  }
`;
const DifferentWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  input {
    flex: 1;
  }
`;
const Info = ({ promotionList, orderInfo, setOrderInfo }) => {
  const [currentUser, setCurrentUser] = useState({
    phone: "",
    name: "",
    address: "",
    others: "",
    discountCode: "",
    differentReceiverName: "",
    differentReceiverPhone: "",
    promotionList: [],
  });

  const [promotionAvailable, setPromotionAvailable] = useState(false);
  const [differentInfo, setDifferentInfo] = useState(false);
  //   Element get
  useEffect(() => {
    setCurrentUser({
      ...currentUser,
      promotionList: [...promotionList],
    });
  }, [promotionList, currentUser.address, currentUser.phone, currentUser.name]);
  useEffect(() => {
    setOrderInfo({
      ...orderInfo,
      deliveryAddress: currentUser.address,
      discountCode: currentUser.discountCode,
      description: currentUser.others,
      differentReceiverName: currentUser.differentReceiverName,
      differentReceiverPhone: currentUser.differentReceiverPhone,
    });
  }, [currentUser]);
  const promotionInputElement = useRef(null);
  //   Handler event
  //   Button
  const handleAutoFillClick = async () => {
    try {
      const res = await userController.getUser();
      const { status, data } = res.data;

      console.log(res.data);

      if (status) {
        const defaultAddress = data?.addresses.find((v) => v.idDefault);
        setCurrentUser({
          ...currentUser,
          phone: data?.phone || "Chưa cung số điện thoại",
          name: data?.name,
          address: defaultAddress?.address || "Chưa cung địa chỉ",
        });
      } else {
        throw new Error();
      }
    } catch (e) {
      toast.warning("Thử lại sau", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      console.log(e);
    }
  };
  //   Input change
  const handleInputChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };
  //   Promotion Check
  const handlePromotionCheck = (e) => {
    const availablePromotions = currentUser.promotionList;
    const currentPromotion = promotionInputElement.current.value;
    if (availablePromotions.some((v) => v == currentPromotion)) {
      toast.success(
        `Bạn được giảm ${currentPromotion}%, Giá sẽ được cập nhât sau nhé`,
        {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        }
      );
      setCurrentUser({
        ...currentUser,
        discountCode: `${currentPromotion}%`,
      });
      setPromotionAvailable(true);
    } else {
      toast.error(`Mã này hết hiệu lực rồi`);
      setPromotionAvailable(false);
    }
  };
  return (
    <>
      <div className="has_cart_infor_user">
        <Title>
          <p className="has_cart_infor_user_heading">Thông tin khách hàng</p>
          <button
            onClick={handleAutoFillClick}
            className="has_cart_voucher_apply btn"
          >
            Tự động điền
          </button>
        </Title>

        <div className="has_cart_infor_user_input">
          <div className="has_cart_infor_user_input_item">
            <label htmlFor="" className="has_cart_infor_user_input_label">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              disabled
              className="has_cart_infor_user_input_infor input"
              value={currentUser?.name}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="has_cart_infor_user_input_item">
            <label htmlFor="" className="has_cart_infor_user_input_label">
              Số điện thoại
            </label>
            <input
              type="text"
              disabled
              name="phone"
              className="has_cart_infor_user_input_infor input"
              value={currentUser?.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        <span className="has_cart_infor_user_heading">
          Chọn cách thức nhận hàng
        </span>
        {/* Middle control box */}
        <div className="has_cart_infor_user_receive flex">
          <div>
            <input
              type="radio"
              id="athome"
              name="fav_language"
              value="athome"
            />
            &nbsp;
            <label htmlFor="athome">Giao tận nơi</label>
          </div>
          <div>
            <input
              type="radio"
              id="atstore"
              name="fav_language"
              value="atstore"
            />
            &nbsp;
            <label htmlFor="atstore">Nhận tại siêu thị</label>
          </div>
        </div>
        {/* Address */}
        <div className="has_cart_infor_user_input_add">
          <input
            type="text"
            className="has_cart_infor_user_address input"
            name="address"
            placeholder="Nhập địa chỉ"
            onChange={handleInputChange}
            value={currentUser.address}
          />
          <input
            type="text"
            className="has_cart_infor_user_request input"
            value={currentUser.others}
            name="others"
            onChange={handleInputChange}
            placeholder="Yêu cầu khác"
          />
          <div className="has_cart_infor_user_input_item">
            <input
              className="mg_r_5"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
              onChange={() => setDifferentInfo(!differentInfo)}
            />
            {/* Bottom control box */}
            <label htmlFor="vehicle1">Gọi người khác nhận hàng nếu có</label>
          </div>
          {/* Different input */}

          {!differentInfo ? (
            <></>
          ) : (
            <DifferentWrap>
              <input
                type="text"
                name="differentReceiverName"
                className="has_cart_infor_user_address input"
                placeholder="Nhập địa chỉ người nhận hộ"
                onChange={handleInputChange}
                value={currentUser.differentReceiverName}
              />
              <input
                type="text"
                name="differentReceiverPhone"
                className="has_cart_infor_user_address input"
                placeholder="Nhập số điện thoại người nhận hộ"
                onChange={handleInputChange}
                value={currentUser.differentReceiverPhone}
              />
            </DifferentWrap>
          )}
          <div className="has_cart_infor_user_input_item">
            <input
              className="mg_r_5"
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="Car"
            />

            <label htmlFor="vehicle2">
              Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm
            </label>
          </div>

          <div className="has_cart_infor_user_input_item">
            <input
              className="mg_r_5"
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="Boat"
            />
            <label htmlFor="vehicle3">Xuất hoá đơn công ty</label>
          </div>
        </div>
      </div>
      {/* Promotion */}
      <div className="line"></div>
      <div className="has_cart_voucher flex_center">
        <input
          type="text"
          className="has_cart_voucher_input"
          placeholder="Nhập mã giảm giá"
          disabled={promotionAvailable}
          ref={promotionInputElement}
        />

        {promotionAvailable ? (
          <button
            onClick={() => setPromotionAvailable(!promotionAvailable)}
            className="has_cart_voucher_apply btn"
          >
            Thay đổi
          </button>
        ) : (
          <button
            onClick={handlePromotionCheck}
            className="has_cart_voucher_apply btn"
          >
            Áp dụng
          </button>
        )}
      </div>
    </>
  );
};

export default Info;
