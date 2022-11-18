import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getDistrict, getWard, getProvince } from "../../apis/apiShipment";
import "../../sass/auth/_register.scss";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";

const AddressSelect = ({ setValues }) => {
  // ADDRESS STATE
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState({
    ID: 269,
    value: "",
  });
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState({
    ID: 2264,
    value: "",
  });
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState({
    ID: 80213,
    value: "",
  });
  // ADDRESS FETCH
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getProvince()
      .then((res) => {
        const { data } = res.data;
        setProvinces(data);
        setProvince({
          ID: data[0]?.ProvinceID,
          value: data[0]?.ProvinceName,
        });
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, []);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getDistrict(province.ID)
      .then((res) => {
        const { data } = res.data;
        setDistricts(data);
        setDistrict({
          ID: data[0]?.DistrictID,
          value: data[0]?.DistrictName,
        });
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [province]);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    getWard(district.ID)
      .then((res) => {
        const { data } = res.data;
        setWard({
          ID: data[0]?.WardCode,
          value: data[0]?.WardName,
        });
        setWards(data);
      })
      .catch((err) => {
        toast.info(`Lỗi không thể lấy địa chỉ: ${err?.message}`, {
          toastId: 99,
          autoClose: 5000,
          closeOnClick: true,
        });
      });
  }, [district]);
  //
  const handleChangeProvince = (e) => {
    e.preventDefault();
    const name = provinces.find((v) => {
      return v.ProvinceID == e.target.value;
    }).ProvinceName;
    setValues((prev) => {
      return {
        ...prev,
        detailAddress: {
          ...prev.detailAddress,
          province: {
            provinceID: e.target.value,
            provinceName: name,
          },
        },
      };
    });

    setProvince({
      ...province,
      ID: e.target.value,
      value: name,
    });
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();
    const name = districts.find((v) => {
      return v.DistrictID == e.target.value;
    }).DistrictName;
    setValues((prev) => {
      return {
        ...prev,
        detailAddress: {
          ...prev.detailAddress,
          district: {
            districtID: e.target.value,
            districtName: name,
          },
        },
      };
    });
    setDistrict({
      ...district,
      ID: e.target.value,
      value: name,
    });
  };
  const handleChangeWard = (e) => {
    e.preventDefault();
    const name = wards.find((v) => {
      return v.WardCode == e.target.value;
    }).WardName;
    setValues((prev) => {
      return {
        ...prev,
        detailAddress: {
          ...prev.detailAddress,
          ward: {
            wardCode: e.target.value,
            wardName: name,
          },
        },
      };
    });
    setWard({
      ...ward,
      ID: e.target.value,
      value: name,
    });
  };
  return (
    <div className="register__address">
      {/* ADDRESS */}
      {/* ADDRESS - PROVINCE */}
      <FormControl className="register__select">
        <InputLabel sx={{ fontSize: "1.4rem" }} id="demo" variant="standard">
          Tỉnh,Thành Phố
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeProvince(e)}
          sx={{ fontSize: "1.5rem" }}
          defaultValue={"DEFAULT"}
          inputProps={{
            className: "register__native-select",
            name: "province",
          }}
        >
          <option value="DEFAULT" disabled>
            {" "}
          </option>

          {provinces.map((v, i) => {
            return (
              <option key={i} value={v.ProvinceID}>
                {v.ProvinceName}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      {/* ADDRESS - DISTRICT */}
      <FormControl className="register__select">
        <InputLabel sx={{ fontSize: "1.4rem" }} variant="standard">
          Quận, Huyện
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeDistrict(e)}
          sx={{ fontSize: "1.5rem" }}
          defaultValue={"DEFAULT"}
          inputProps={{
            className: "register__native-select",
            name: "district",
          }}
        >
          <option value="DEFAULT" disabled>
            {" "}
          </option>
          {districts.map((v, i) => {
            return (
              <option key={i} value={v.DistrictID}>
                {v.DistrictName}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      {/* ADDRESS - WARD */}

      <FormControl className="register__select">
        <InputLabel sx={{ fontSize: "1.4rem" }} variant="standard">
          Khu vực
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeWard(e)}
          sx={{ fontSize: "1.5rem" }}
          defaultValue={"DEFAULT"}
          inputProps={{
            className: "register__native-select",

            name: "ward",
          }}
        >
          <option value="DEFAULT" disabled>
            {" "}
          </option>
          {wards.map((v, i) => {
            return (
              <option key={i} value={v.WardCode}>
                {v.WardName}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default AddressSelect;
