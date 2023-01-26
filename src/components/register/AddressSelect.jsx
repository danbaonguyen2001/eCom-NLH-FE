import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getDistrict, getWard, getProvince } from "../../apis/apiShipment";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  Box,
  Stack,
  Skeleton,
} from "@mui/material";
import userController from "../../features/user/function";
import AddressSkeleton from "./skeleton/AddressSkeleton";

const AddressSelect = ({ setValues, addressBtStatus, addressEdit, sx }) => {
  // loading state
  const [isSuccess, setIsSuccess] = useState(false);

  const [detailAddress, setDetailAddress] = useState({});
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
    setIsSuccess(false);
    getProvince().then((res) => {
      const { data } = res.data;
      setProvinces(data);
      if (addressEdit && addressEdit != "") {
        userController
          .getAddressById({ addressId: addressEdit })
          .then((res) => {
            const address = res.data.address;
            setWard({
              ID: address?.ward?.wardCode,
              value: address?.ward.wardName,
            });
            setProvince({
              ID: address?.province?.provinceID,
              value: address?.province.provinceName,
            });
            setDistrict({
              ID: address?.district?.districtID,
              value: address?.district.districtName,
            });
          })
          .catch((e) => {
            toast.error(`Lỗi không thể lấy địa chỉ phù hợp`, {
              autoClose: 5000,
              closeOnClick: true,
              position: "top-right",
            });
          });
      } else {
        setProvince({
          ID: data[0].ProvinceID,
          value: data[0].ProvinceName,
        });
      }
    });
  }, [addressEdit]);
  useEffect(() => {
    setIsSuccess(false);

    if (province.ID) {
      getDistrict(province.ID).then((res) => {
        const { data } = res.data;
        setDistricts(data);
        if (!addressEdit || district.ID == "" || (district.ID && addressEdit)) {
          setDistrict({
            ID: data[0]?.DistrictID,
            value: data[0]?.DistrictName,
          });
        }
      });
    }
  }, [province.ID]);
  useEffect(() => {
    setIsSuccess(false);

    if (district.ID) {
      getWard(district.ID).then((res) => {
        const { data } = res.data;
        setWards(data);
        if (!addressEdit || ward.ID == "" || (ward.ID && addressEdit)) {
          setWard({
            ID: data[0]?.WardCode,
            value: data[0]?.WardName,
          });
        }
      });
    }
  }, [district.ID, province.ID]);
  useEffect(() => {
    setIsSuccess(false);

    if (addressBtStatus == "Edit" && !district.ID) {
      setDistrict({
        ...district,
        ID:
          detailAddress?.detailAddress?.district.districtID ||
          detailAddress?.district?.districtID,
        value:
          detailAddress?.detailAddress?.district.districtName ||
          detailAddress?.district?.districtName,
      });
    }
  }, [province.ID]);
  useEffect(() => {
    setValues((prev) => {
      return {
        ...prev,
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
    setIsSuccess(true);
  }, [province.ID, district.ID, ward.ID]);
  //
  const handleChangeProvince = (e) => {
    setIsSuccess(false);
    e.preventDefault();
    const name = provinces.find((v) => {
      return v.ProvinceID == e.target.value;
    }).ProvinceName;
    setProvince({
      ID: e.target.value,
      value: name,
    });
  };
  const handleChangeDistrict = (e) => {
    setIsSuccess(false);
    e.preventDefault();
    const name = districts.find((v) => {
      return v.DistrictID == e.target.value;
    }).DistrictName;
    setDistrict({
      ID: e.target.value,
      value: name,
    });
  };
  const handleChangeWard = (e) => {
    setIsSuccess(false);
    e.preventDefault();
    const name = wards.find((v) => {
      return v.WardCode == e.target.value;
    }).WardName;

    setWard({
      ID: e.target.value,
      value: name,
    });
  };
  const AddressSelector = () => (
    <Box
      sx={{ width: "100%", margin: "1.5rem auto", display: "flex" }}
      justifyContent="space-around"
      alignItems="center"
    >
      {/* ADDRESS */}
      {/* ADDRESS - PROVINCE */}
      <FormControl
        sx={{
          "&	.MuiInputLabel-root": { fontSize: 16 },
          paddingRight: "3rem",
          marginRight: "2rem",
        }}
      >
        <InputLabel sx={{ fontSize: "1.4rem" }} id="demo" variant="standard">
          Tỉnh,Thành Phố
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeProvince(e)}
          sx={sx || { fontSize: "1.5rem", minWidth: "25ch" }}
          defaultValue={`${province?.ID || provinces[0]?.ProvinceName}`}
          inputProps={{
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
      <FormControl sx={{ paddingRight: "3rem", marginRight: "2rem" }}>
        <InputLabel sx={{ fontSize: "1.4rem" }} variant="standard">
          Quận, Huyện
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeDistrict(e)}
          sx={sx || { fontSize: "1.5rem", minWidth: "25ch" }}
          defaultValue={`${district?.ID || "DEFAULT"}`}
          inputProps={{
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

      <FormControl sx={{ paddingRight: "3rem", marginRight: "2rem" }}>
        <InputLabel sx={{ fontSize: "1.4rem" }} variant="standard">
          Khu vực
        </InputLabel>
        <NativeSelect
          onChange={(e) => handleChangeWard(e)}
          sx={sx || { fontSize: "1.5rem", minWidth: "25ch" }}
          defaultValue={`${ward?.ID || "DEFAULT"}`}
          inputProps={{
            name: "ward",
          }}
        >
          <option value={`${ward?.ID || "DEFAULT"}`} disabled>
            {ward?.value}
          </option>
          {wards?.map((v, i) => {
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
    </Box>
  );
  return isSuccess ? <AddressSelector /> : <AddressSkeleton />;
};

export default AddressSelect;
