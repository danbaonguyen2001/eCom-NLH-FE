import React from "react";
import "../../../sass/purchasehistory/_delete_address_modal.scss";
import userController from "../../../features/user/function";
import { toast } from "react-toastify";

const DeleteAddressModal = ({
  openModalDelete,
  currentAddressInfo,
  addressEdit,
  setUserData,
}) => {
  const handleConfirmDeleteAddress = async () => {
    userController
      .deleteAddressById({ addressId: addressEdit })
      .then(() => {
        toast.success(`Xóa địa chỉ thành công`, {
          toastId: 88,
          autoClose: 5000,
          closeOnClick: true,
        });
        setUserData((prev) => {
          const newAddresses = prev.addresses.filter(
            (v) => v?.detailAddress != addressEdit
          );
          console.log(newAddresses);
          return {
            ...prev,
            addresses: newAddresses,
          };
        });
        openModalDelete(false);
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  };
  return (
    <div className="delete-address-modal">
      <div className="delete-address-modal-content">
        <header className="delete-address-modal-content__header">
          Xoá địa chỉ
        </header>
        <p className="delete-address-modal-content__question">
          Bạn có muốn xoá địa chỉ <br />
          <span style={{ color: "red" }}>{currentAddressInfo}?</span>
        </p>
        <div className="delete-address-modal-content__btn">
          <button
            className="delete-address-modal-content__btn--cancel btn "
            onClick={() => openModalDelete(false)}
          >
            Đóng
          </button>
          <button
            className="delete-address-modal-content__btn--accept btn"
            onClick={handleConfirmDeleteAddress}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAddressModal;
