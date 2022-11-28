import React, { useRef } from "react";
import { useState } from "react";
import userController from "../../../features/user/function";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddressSelect = React.lazy(() =>
  import("../../../components/register/AddressSelect")
);
const RadioPickup = React.lazy(() =>
  import("../../../components/cart/subComponent/RadioPickup")
);

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
const Info = ({ orderInfo, setOrderInfo, setDetailAddress,detailAddress }) => {

  // ADDRESS ID
  const [addressEdit,setAddressEdit] = useState("")
  // 
  const [currentUser, setCurrentUser] = useState({
    phone: "",
    name: "",
    address: "",
    others: "",
    defaultAddress: "",
    discountCode: "",
    differentReceiverName: "",
    differentReceiverPhone: "",
    promotionList: [],
  });
  const [promotionAvailable, setPromotionAvailable] = useState(false);
  const [differentInfo, setDifferentInfo] = useState(false);
  const [pickUp, setPickUp] = useState(true);

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


  useEffect(()=>{
    // 280AAAA,Côn Đảo,Huyện đảo Côn Đảo,Bà Rịa - Vũng Tàu
    const arr = currentUser.address && currentUser.address.split(",")
    setCurrentUser({
      ...currentUser,
      address:`${arr[0]||"Nhập địa chỉ"}, ${detailAddress?.ward?.wardName}, ${detailAddress?.district?.districtName}, ${detailAddress?.province?.provinceName}`    
    })
  },[detailAddress])


  //   Handler Auto Form Fill
  //   Button
  const handleAutoFillClick = () => {
    userController
      .getUser()
      .then((res) => {
        const user = res.data.user;
        if (user) {
          const defaultAddress = user?.addresses.find(
            (v) => v.idDefault === true
          );
          setAddressEdit(defaultAddress?.detailAddress)
          setCurrentUser({
            ...currentUser,
            defaultAddress: defaultAddress.detailAddress,
            phone: user?.phone || "Chưa cung số điện thoại",
            name: user?.name,
            address: defaultAddress?.address,
          });
        }
      })
      .catch((e) => {
        toast.warning("Thử lại sau, mã lỗi: " + e.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  };
  //   Input change
  const handleInputChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  
  //
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

        {/* SELECT PICKUP WAY */}
        <RadioPickup setPickup={setPickUp} />

        {/* ADDRESS SELECT */}
        {Boolean(pickUp) ? <AddressSelect setValues={setDetailAddress} addressBtStatus="Edit" addressEdit={addressEdit} /> : <></>}

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
            onClick={()=>alert("Coming soon")}
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
