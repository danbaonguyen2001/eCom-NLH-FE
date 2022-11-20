import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getDistrict, getWard, getProvince } from "../../apis/apiShipment";
import "../../sass/auth/_register.scss";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";

const AddressSelect = ({
  setValues,
  detailAddress,
  addressBtStatus,
  addressEdit,
}) => {
  // ADDRESS STATE
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState({
    ID: "",
    value: "",
  });
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState({
    ID: "",
    value: "",
  });
  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState({
    ID: "",
    value: "",
  });

  // ADDRESS FETCH
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    // First initial

    if (addressBtStatus == "Edit") {
      setProvince({
        ...province,
        ID:
          detailAddress?.detailAddress?.province?.provinceID ||
          detailAddress?.province?.provinceID,
        value:
          detailAddress?.detailAddress?.province?.provinceName ||
          detailAddress?.province?.provinceName,
      });
    } else {
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
    }
  }, [addressEdit, detailAddress]);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    if (province.ID) {
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
    }
  }, [province.ID]);
  useEffect(() => {
    toast.info(`Vui lòng chờ hệ thống tải địa chỉ mới`, {
      toastId: 88,
      autoClose: 5000,
      closeOnClick: true,
    });
    if (district.ID) {
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
    }
  }, [district.ID, province.ID]);
  useEffect(() => {
    setValues((prev) => {
      return {
        ...prev,
        detailAddress: {
          ward: {
            wardCode: ward.ID,
            wardName: ward.value,
          },
          province: {
            provinceID: province.ID,
            provinceName: province.value,
          },
          district: {
            districtID: district.ID,
            districtName: district.value,
          },
        },
      };
    });
  }, [province.ID, district.ID, ward.ID]);
  //
  const handleChangeProvince = (e) => {
    e.preventDefault();
    const name = provinces.find((v) => {
      return v.ProvinceID == e.target.value;
    }).ProvinceName;
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
      <FormControl
        className="register__select"
        sx={{
          "&	.MuiInputLabel-root": { fontSize: 16 },
        }}
      >
        <InputLabel sx={{ fontSize: "1.4rem" }} id="demo" variant="standard">
          Tỉnh,Thành Phố
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeProvince(e)}
          sx={{ fontSize: "1.5rem" }}
          defaultValue={`${province?.ID || provinces[0]?.ProvinceName}`}
          inputProps={{
            className: "register__native-select",
            name: "province",
          }}
        >
          <option
            value={`${province?.ID || provinces[0]?.ProvinceName}`}
            disabled
          >
            {province?.value}
          </option>

          {provinces.map((v, i) => {
            return (
              <option
                key={i}
                selected={v?.ProvinceID === province?.ID}
                value={v?.ProvinceID}
              >
                {v?.ProvinceName}
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
          defaultValue={`${district?.ID || "DEFAULT"}`}
          inputProps={{
            className: "register__native-select",
            name: "district",
          }}
        >
          <option value={`${district?.ID || "DEFAULT"}`} disabled>
            {district?.value}
          </option>
          {districts.map((v, i) => {
            return (
              <option
                key={i}
                selected={v.DistrictID == district.ID}
                value={v.DistrictID}
              >
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
          defaultValue={`${ward?.ID || "DEFAULT"}`}
          inputProps={{
            className: "register__native-select",

            name: "ward",
          }}
        >
          <option value={`${ward?.ID || "DEFAULT"}`} disabled>
            {ward?.value}
          </option>
          {wards.map((v, i) => {
            return (
              <option
                selected={v.WardCode == ward.ID}
                key={i}
                value={v.WardCode}
              >
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
