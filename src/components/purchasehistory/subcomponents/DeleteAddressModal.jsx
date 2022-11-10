import React from "react";
import "../../../sass/purchasehistory/_delete_address_modal.scss";
import userController from "../../../features/user/function";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const DeleteAddressModal = ({
  openModalDelete,
  deleteAddressId,
  addressEdit,
}) => {
  const history = useHistory();

  const handleConfirmDeleteAddress = async () => {
    const addressId = deleteAddressId;
    userController
      .deleteAddressById({ addressId })
      .then(() => {
        toast.success(`Xóa địa chỉ thành công`, {
          toastId: 88,
          autoClose: 5000,
          closeOnClick: true,
        });
        openModalDelete(false);
        history.go(0);
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
          <span style={{ color: "red" }}>{addressEdit}?</span>
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
