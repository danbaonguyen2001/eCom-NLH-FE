import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../sass/purchasehistory/_user_infor.scss";
import DeleteAddressModal from "./subcomponents/DeleteAddressModal";
const UserInfor = () => {
  const [province, setProvince] = useState([]);
  const [provinceID, setProvinceID] = useState("1");
  const [district, setDistrict] = useState([]);
  const [districtID, setDistrictID] = useState("1");
  const [commune, setCommune] = useState([]);
  const [communeID, setCommuneID] = useState("");
  const [openModalDelete, setOpennModalDelete] = useState(false);

  // Tỉnh
  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/p/").then((res) => {
      setProvince(res.data);
    });
  }, []);

  const handleProvince = (e) => {
    const getProvinceID = e.target.value;
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
        setDistrict(res.data.districts);
      });
  };

  const handleDistrict = (e) => {
    const getDistrictID = e.target.value;
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
        setCommune(res.data.wards);
      });
  };

  const handleCommune = (e) => {
    const getCommunetID = e.target.value;
    setCommuneID(getCommunetID);
  };

  return (
    <div className="user-infor">
      <div className="user-infor-header">
        <h4 className="user-infor-header__heading">Thông tin cá nhân</h4>
        <input type="radio" className="user-infor-header__input" name="sex" />
        <label className="user-infor-header__label" htmlFor="">
          Anh
        </label>
        <input type="radio" name="sex" className="user-infor-header__input" />
        <label className="user-infor-header__label" htmlFor="">
          Chị
        </label>
        <br />
        <input
          type="text"
          className="user-infor-header__input input user__name"
          placeholder="Họ tên người dùng"
        />
        <input
          type="text"
          className="user-infor-header__input input user__phone"
          placeholder="Số điện thoại"

        />
      </div>
      <div className="user-infor-address">
        <h4 className="user-infor-address__heading">Địa chỉ nhận hàng</h4>
        <div className="line"></div>
        <div className="user-infor-address-list">
          <div className="user-infor-address-list__item">
            <input
              type="radio"
              className="user-infor-address-item__input"
              name="address"
            />
            <span className="user-infor-address-item__detail">
              81/01 Nguyễn Xiển, phường Long Bình, Quận 9, Thành Phố Thủ Đức
            </span>
            <span className="user-infor-address-item__default">Mặc định</span>
            <button className="user-infor-address-item__btn btn">Sửa</button>
            <button
              className="user-infor-address-item__btn btn"
              onClick={() => setOpennModalDelete(true)}
            >
              Xoá
            </button>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="user-infor-new-address">
        <h4 className="user-infor-new-address__heading">Cập nhật địa chỉ</h4>
        <form className="update-address">
          <select
            className="update-address__input input"
            name=""
            id="province"
            onChange={handleProvince}
          >
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
            {commune.map((getCom, index) => (
              <option key={index} value={getCom.code}>
                {getCom.name}
              </option>
            ))}
          </select>
          <input
            className="update-address__input input"
            type="text"
            placeholder="Số nhà, tên đường"
          />
        </form>
      </div>
      <div className="user-infor-btn ">
        <button className="btn user-infor-btn__update">Cập nhật</button>
      </div>

      {openModalDelete && (
        <DeleteAddressModal openModalDelete={setOpennModalDelete} />
      )}
    </div>
  );
};

export default UserInfor;
