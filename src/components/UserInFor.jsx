import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import "../sass/purchasehistory/_user_infor.scss";
import DeleteAddressModal from "./purchasehistory/subcomponents/DeleteAddressModal";
// controller
import userController from "../features/user/function";
import DropZone from "./useInfo/DropZone";
//

const UserInFor = () => {
  //
  const [province, setProvince] = useState([]);
  const [provinceID, setProvinceID] = useState("1");
  const [district, setDistrict] = useState([]);
  const [districtID, setDistrictID] = useState("1");
  const [commune, setCommune] = useState([]);
  const [communeID, setCommuneID] = useState("");
  const [openModalDelete, setOpennModalDelete] = useState(false);

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
      .find((address) => v.id == address.id)
      .address.split(",");
    setUserData({
      ...userData,
      addressId: v.id,
    });
    setDetailAddress(add[0]|| "Chưa có địa chỉ cụ thể");
    setCommuneName(add[1]);
    setDistrictName(add[2]);
    setProvinceName(add[3]);
    setAddressEdit(add.join(","));
  };

  // Tỉnh
  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/p/").then((res) => {
      setProvince(res.data);
      let provinceName = res.data.find((v) => v.code == provinceID);
      setProvinceName(provinceName.name);
    });
  }, []);

  const handleProvince = (e) => {
    const getProvinceID = e.target.value;

    const provinceNameV = province.find((v) => {
      return v.code == getProvinceID;
    }).name;
    setProvinceName(provinceNameV);
    setProvinceID(getProvinceID);
    setCommune([]);
  };

  //Huyện
  useEffect(() => {
    getDistrict(provinceID);
  }, [provinceID]);

  const getDistrict = (provinceid) => {
    axios
      .get(`https://provinces.open-api.vn/api/p/${provinceid}?depth=2`)
      .then((res) => {
        let districtId = res.data.districts[0].code;
        let districtName = res.data.districts.find((v) => {
          return v.code == districtId;
        });
        setDistrictName(districtName?.name);
        setDistrictID(districtId);
        setDistrict(res.data.districts);
      });
  };

  const handleDistrict = (e) => {
    const getDistrictID = e.target.value;
    const districtNameV = district.find((v) => {
      return v.code == getDistrictID;
    }).name;
    setDistrictName(districtNameV);
    setDistrictID(getDistrictID);
  };

  // Xã
  useEffect(() => {
    getCommune(districtID);
  }, [districtID]);

  const getCommune = (districtid) => {
    axios
      .get(`https://provinces.open-api.vn/api/d/${districtid}?depth=2`)
      .then((res) => {
        let communeId = res.data.wards[0].code;
        let communeNameV = res.data.wards.find((v) => {
          return v.code == communeId;
        });
        setCommuneName(communeNameV?.name);
        setCommuneID(communeId);
        setCommune(res.data.wards);
      });
  };

  const handleCommune = (e) => {
    const getCommunetID = e.target.value;
    const communeNameV = commune.find((v) => {
      return v.code == getCommunetID;
    }).name;
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
    addressId: -1,
  });
  useMemo(() => {
    // userController
    const fetchUser = async () => {
      const res = await userController.getUser();
      try {
        let { gender, name, addresses, phone, avatar } = res.data.data;

        setUserData({
          ...userData,
          gender,
          name,
          addresses,
          phone,
          avatar,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);
  // address button click handler
  const handleConfirmUpdateUserData = async () => {
    const addressStr = `${detailAddress},${communeName},${districtName},${provinceName}`;
    let inputData = editDisabled
      ? {
          ...userData,
          addresses: [
            {
              id: userData.addressId,
              address: addressStr,
              idDefault: isIdDefault,
            },
          ],
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
          if (v.id == addresses[0].id) {
            return addresses[0];
          } else {
            const tempAdd = { ...v };
            tempAdd.idDefault = false;
            return tempAdd;
          }
        });
        alert("Cập nhật thông tin thành công")
        setUserData({
          ...userData,
          gender,
          name,
          phone,
          avatar,
          addresses: newAddresses,
        });
      } else {
        console.log("Khong add cap them dia chi");
      }
    } catch (e) {
      console.log(e);
    }finally{
       setEditDisabled(!editDisabled)

    }
  };
  const handleAddUserAddress = async () => {
    const addressStr = `${detailAddress},${communeName},${districtName},${provinceName}`;
    const res = await userController.updateUser({
      ...userData,
      addresses: [
        {
          address: addressStr,
          idDefault: isIdDefault,
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
          addresses:newAddresses,
        });
      } else {
        console.log("Khong add cap them dia chi");
      }
    } catch (e) {
      console.log(e);
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
          <DropZone userDataAvatar={userData.avatar} setUserData={setUserData} userData={userData} />
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
            {userData.addresses.map((v, i) => {
              return (
                <>
                  <div key={i} className="user-infor-address-list__item">
                    <input type="hidden" name="addressId" value={v.id} />

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
                        setOpennModalDelete(true);
                        handlerEditAddress(v);
                        setDeleteAddressId(v.id);
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
              <option value={provinceName || province[provinceID - 1]?.name}>
                {provinceName ? (
                  <>{provinceName}</>
                ) : province[provinceID - 1] ? (
                  <>{province[provinceID - 1]?.name}</>
                ) : null}
              </option>
              {province.map((getPro, index) => (
                <option key={index} value={getPro.code}>
                  {getPro.name}
                </option>
              ))}
            </select>
            <select
              className="update-address__input input"
              name=""
              id="district"
              onChange={handleDistrict}
            >
              <option value={districtName || district[districtID]?.name}>
                {districtName ? (
                  <>{districtName}</>
                ) : district[districtID] ? (
                  <>{district[districtID]?.name}</>
                ) : null}
              </option>
              {district.map((getDis, index) => (
                <option key={index} value={getDis.code}>
                  {getDis.name}
                </option>
              ))}
            </select>
            <select
              className="update-address__input input"
              name=""
              id="commune"
              onChange={handleCommune}
            >
              <option value={communeName || commune[communeID - 1]?.name}>
                {communeName ? (
                  <>{communeName}</>
                ) : commune[communeID - 1] ? (
                  <>{commune[communeID - 1]?.name}</>
                ) : null}
              </option>
              {commune.map((getCom, index) => (
                <option key={index} value={getCom.code}>
                  {getCom.name}
                </option>
              ))}
            </select>
            <input
              className="update-address__input input"
              type="text"
              value={detailAddress }
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
            openModalDelete={setOpennModalDelete}
            addressEdit={addressEdit}
          />
        )}
      </div>
    </div>
  );
};

export default UserInFor;
