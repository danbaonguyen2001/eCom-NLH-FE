import React, { useState, useEffect } from "react";
import axios from "axios";
import "../sass/purchasehistory/_user_infor.scss";
import DeleteAddressModal from "./purchasehistory/subcomponents/DeleteAddressModal";
// controller
import userController from "../features/user/function";
import DropZone from "./useInfo/DropZone";
//
import { getProvince, getDistrict, getWard } from "../apis/apiShipment";
import { toast } from "react-toastify";

const UserInFor = () => {
  //
  const [province, setProvince] = useState([]);
  const [provinceID, setProvinceID] = useState("269");
  const [district, setDistrict] = useState([]);
  const [districtID, setDistrictID] = useState("");
  const [commune, setCommune] = useState([]);
  const [communeID, setCommuneID] = useState("");
  const [openModalDelete, setOpenModalDelete] = useState(false);

  //

  //
  const [deleteAddressId, setDeleteAddressId] = useState(null);
  const [addressBtStatus, setAddressBtStatus] = useState("Add");
  const [addressEdit, setAddressEdit] = useState([]);
  //
  const [detailAddress, setDetailAddress] = useState("");
  const [provinceName, setProvinceName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [communeName, setCommuneName] = useState("");
  const [isIdDefault, setIsIdDefault] = useState(false);
  //45Yasuo,Xã Bình Yên,Huyện Sơn Dương,Tỉnh Tuyên Quang
  // detail              + commune ,      + district, +    province name
  //
  const handlerEditAddress = (v) => {
    if (v.idDefault) {
      setIsIdDefault(true);
    } else {
      setIsIdDefault(false);
    }
    setAddressBtStatus("Edit");
    let add = userData.addresses
      .find((address) => v.detailAddress == address.detailAddress)
      .address.split(",");
    setUserData({
      ...userData,
      addressId: v.detailAddress,
    });
    setDetailAddress(add[0] || "Chưa có địa chỉ cụ thể");
    setCommuneName(add[1]);
    setDistrictName(add[2]);
    setProvinceName(add[3]);
    setAddressEdit(add.join(","));
  };

  // Tỉnh
  useEffect(() => {
    const fetchProvince = async () => await getProvince();
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    fetchProvince()
      .then((res) => {
        const { data } = res.data;
        setProvince(data);
        setProvinceName(data[0].ProvinceName);
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, []);

  const handleProvince = (e) => {
    const getProvinceID = e.target.value;
    const provinceNameV = province.find((v) => {
      return v.ProvinceID == getProvinceID;
    }).ProvinceName;
    setProvinceName(provinceNameV);
    setProvinceID(getProvinceID);
    setCommune([]);
  };

  //Huyện
  useEffect(() => {
    const fetchDistrict = async (provinceID) => await getDistrict(provinceID);
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    fetchDistrict(provinceID)
      .then((res) => {
        // Set default
        const { data } = res.data;
        setDistrictName(data[0]?.DistrictName);
        setDistrictID(data[0]?.DistrictID);
        setDistrict(data);
      })
      .catch((e) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${e?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [provinceID]);

  const handleDistrict = (e) => {
    const getDistrictID = e.target.value;
    const districtNameV = district.find(
      (v) => v.DistrictID == getDistrictID
    ).DistrictName;
    setDistrictName(districtNameV);
    setDistrictID(getDistrictID);
  };

  // Xã
  useEffect(() => {
    const fetchWard = async (districtID) => await getWard(districtID);
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    fetchWard(districtID)
      .then((res) => {
        // Set default

        const { data } = res.data;

        setCommuneName(data[0]?.WardName);
        setCommuneID(data[0]?.WardCode);
        setCommune(data);
      })
      .catch((e) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${e?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [districtID]);

  const handleCommune = (e) => {
    const getCommunetID = e.target.value;
    const communeNameV = commune.find((v) => {
      return v.WardCode == getCommunetID;
    }).WardName;
    setCommuneName(communeNameV);
    setCommuneID(getCommunetID);
  };
  // Get element
  ///[###]/////////////////////////////////////////////////////////////////////////
  // Get user info
  const [userData, setUserData] = useState({
    gender: "",
    name: "Đang tải dữ liệu...",
    phone: "Đang tải dữ liệu...",
    addresses: ["Đang tải dữ liệu..."],
    avatar: null,
    isNew: false,
    addressId: -1,
  });
  useEffect(() => {
    // userController
    userController
      .getUser()
      .then((res) => {
        const data = res.data.user;
        let { gender, name, addresses, phone, avatar } = data;
        setUserData({
          ...userData,
          gender,
          name,
          addresses,
          phone,
          avatar,
        });
      })
      .catch((e) => {
        toast.info(`Lỗi không thể tải thông tin người dùng: ${e?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, []);
  // address button click handler
  const handleConfirmUpdateUserData = async () => {
    alert("click")
    // var
    const addressStr = `${
      detailAddress || "Chưa nhập số nhà"
    },${communeName},${districtName},${provinceName}`;
    const addressValue = {
      province: {
        provinceID: provinceID,
        provinceName: provinceName,
      },
      ward: {
        wardCode: communeID,
        wardName: communeName,
      },
      district: {
        districtID: districtID,
        districtName: districtName,
      },
    };
    const addresses = userData.addresses.filter(
      (v) => v.detailAddress !== userData.addressId
    );
    addresses.push({
      editAddress:userData.addressId,
      idDefault: isIdDefault,
      detailAddress: addressValue,
      address: addressStr,
    });
    let inputData = editDisabled
      ? {
          ...userData,
          addresses:addresses,
        }
      : {
          ...userData,
        };
    const res = await userController.updateUser(inputData);
    try {
      const { status, data } = res;
      const { gender, name, phone, avatar, addresses } = data;

      if (status) {
        const newAddresses = userData.addresses.map((v) => {
          if (v.detailAddress == addresses[0].detailAddress) {
            return addresses[0];
          } else {
            const tempAdd = { ...v };
            tempAdd.idDefault = false;
            return tempAdd;
          }
        });
        toast.success(`Cập nhật địa chỉ thành công`, {
          toastId: 200,
          autoClose: 5000,
          closeOnClick: true,
        });
        setUserData({
          ...userData,
          gender,
          name,
          phone,
          avatar,
          addresses: newAddresses,
        });

      } else {
        toast.error(`Lỗi không thể thêm địa chỉ mới`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    } catch (e) {
      toast.error(`Lỗi không thể lấy địa chỉ: ${e?.message}`, {
        toastId: 99,
        autoClose: 5000,
        closeOnClick: true,
      });
    } finally {
      setEditDisabled(!editDisabled);
      setAddressBtStatus("Add")
    }
  };
  // Add
  const handleAddUserAddress = async () => {
    // var
    const addressStr = `${
      detailAddress || "Chưa nhập số nhà"
    },${communeName},${districtName},${provinceName}`;
    const addressValue = {
      province: {
        provinceID: provinceID,
        provinceName: provinceName,
      },
      ward: {
        wardCode: communeID,
        wardName: communeName,
      },
      district: {
        districtID: districtID,
        districtName: districtName,
      },
    };
    // call
    const res = await userController.updateUser({
      ...userData,
      isNew: true,
      addresses: [
        {
          isNew: true,
          idDefault: isIdDefault,
          detailAddress: addressValue,
          address: addressStr,
        },
      ],
    });
    try {
      const { status, data } = res;
      const { gender, name, phone, avatar, addresses } = data;
      if (status) {
        const newAddresses = [
          ...userData.addresses,
          {
            address: addressStr,
            idDefault: isIdDefault,
          },
        ];
        setUserData({
          ...userData,
          gender,
          name,
          phone,
          avatar,
          addresses: newAddresses,
        });
      } else {
        toast.error(`Lỗi không thể thêm địa chỉ mới`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    } catch (e) {
      toast.error(`Lỗi không thể thêm địa chỉ mới`, {
        toastId: 99,
        autoClose: 5000,
        closeOnClick: true,
      });
    }
  };
  //
  const updateInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const [editDisabled, setEditDisabled] = useState(true);
  return (
    <div className="user-infor-main">
      <div className="user-infor">
        {/* Info */}
        <div className="user-infor-header">
          <h4 className="user-infor-header__heading">Thông tin cá nhân</h4>
          {/* Img */}
          <DropZone
            userDataAvatar={userData.avatar}
            setUserData={setUserData}
            userData={userData}
          />
          {/*  */}
          <input
            checked={userData.gender == "man"}
            type="radio"
            id="male-input"
            className="user-infor-header__input"
            name="sex"
            onChange={(e) => {
              setUserData({
                ...userData,
                gender: "man",
              });
            }}
            disabled={editDisabled}
          />
          <label className="user-infor-header__label" htmlFor="male-input">
            Anh
          </label>
          <input
            checked={userData.gender != "man"}
            type="radio"
            id="female-input"
            name="sex"
            className="user-infor-header__input"
            onChange={(e) => {
              setUserData({
                ...userData,
                gender: "woman",
              });
            }}
            disabled={editDisabled}
          />
          <label className="user-infor-header__label" htmlFor="female-input">
            Chị
          </label>
          <br />
          <input
            type="text"
            className="user-infor-header__input input"
            placeholder={userData.name}
            value={userData.name}
            name="name"
            disabled={editDisabled}
            onChange={(e) => updateInput(e)}
          />
          <input
            type="text"
            className="user-infor-header__input input"
            placeholder={userData.phone}
            value={userData.phone}
            disabled={editDisabled}
            name="phone"
            onChange={(e) => updateInput(e)}
          />
          {editDisabled ? (
            <>
              <button
                onClick={() => setEditDisabled(!editDisabled)}
                className="user-infor-address-item__btn btn"
              >
                Cập nhật
              </button>
              <button
                onClick={() => alert("Coming soon...")}
                className="user-infor-address-item__btn btn"
              >
                Liên hệ với quản lý
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleConfirmUpdateUserData}
                className="user-infor-address-item__btn btn"
              >
                Lưu
              </button>
              <button
                onClick={() => setEditDisabled(!editDisabled)}
                className="user-infor-address-item__btn btn"
              >
                Hủy
              </button>
            </>
          )}
        </div>
        {/* Address list */}
        <div className="user-infor-address">
          <h4 className="user-infor-address__heading">Địa chỉ nhận hàng</h4>
          <div className="line"></div>
          <div className="user-infor-address-list">
            {userData?.addresses.map((v, i) => {
              return (
                <>
                  <div key={i} className="user-infor-address-list__item">
                    <input
                      type="hidden"
                      name="addressId"
                      value={v.detailAddress}
                    />

                    <span className="user-infor-address-item__detail">
                      {v.address}
                    </span>
                    <span className="user-infor-address-item__default">
                      {v.idDefault ? "Mặc định" : i == 0}
                    </span>
                    <button
                      className="user-infor-address-item__btn btn"
                      onClick={() => handlerEditAddress(v)}
                    >
                      Sửa
                    </button>
                    <button
                      className="user-infor-address-item__btn btn"
                      disabled={v.idDefault}
                      onClick={() => {
                        setOpenModalDelete(true);
                        handlerEditAddress(v);
                        setDeleteAddressId(v.detailAddress);
                      }}
                    >
                      Xoá
                    </button>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
          </div>
        </div>
        {/* Address detail */}
        <div className="user-infor-new-address">
          <h4 className="user-infor-new-address__heading">Cập nhật địa chỉ</h4>
          <form className="update-address">
            <select
              className="update-address__input input"
              name="provinceSelect"
              onChange={handleProvince}
            >
              {province.map((p, index) => (
                <option key={index} value={p.ProvinceID}>
                  {p.ProvinceName}
                </option>
              ))}
            </select>
            <select
              className="update-address__input input"
              name=""
              id="district"
              onChange={handleDistrict}
            >
              {district.map((getDis, index) => (
                <option key={index} value={getDis.DistrictID}>
                  {getDis.DistrictName}
                </option>
              ))}
            </select>
            <select
              className="update-address__input input"
              name=""
              id="commune"
              onChange={handleCommune}
            >
              {commune.map((getCom, index) => (
                <option key={index} value={getCom.WardCode}>
                  {getCom.WardName}
                </option>
              ))}
            </select>
            <input
              className="update-address__input input"
              type="text"
              value={detailAddress}
              placeholder="Số nhà, tên đường"
              onChange={(e) => setDetailAddress(e.target.value)}
            />
            <div className="update-address__default">
              <input
                type="checkbox"
                checked={isIdDefault ? "checked" : ""}
                onChange={() => setIsIdDefault(!isIdDefault)}
              />

              <label htmlFor=""> &nbsp; Địa chỉ mặc định</label>
            </div>
          </form>
        </div>
        {/* Add ress update Button */}
        <div className="user-infor-btn ">
          {addressBtStatus == "Add" ? (
            <button
              className="btn user-infor-btn__update"
              style={{ marginRight: "25px" }}
              onClick={handleAddUserAddress}
              disabled={!editDisabled}
            >
              Thêm địa chỉ mới
            </button>
          ) : (
            <button
              className="btn user-infor-btn__update"
              style={{ marginRight: "25px" }}
              onClick={handleConfirmUpdateUserData}
              disabled={!editDisabled}
            >
              Cập nhật thông tin
            </button>
          )}
          {addressBtStatus == "Add" ? (
            <></>
          ) : (
            <button
              disabled={!editDisabled}
              className="btn user-infor-btn__update"
              style={{ marginRight: "25px" }}
              onClick={() => setAddressBtStatus("Add")}
            >
              Hủy
            </button>
          )}
        </div>
        {/* Modal */}
        {openModalDelete && (
          <DeleteAddressModal
            deleteAddressId={deleteAddressId}
            openModalDelete={setOpenModalDelete}
            addressEdit={addressEdit}
          />
        )}
      </div>
    </div>
  );
};

export default UserInFor;
