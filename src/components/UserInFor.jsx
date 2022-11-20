import React, { useState, useEffect } from "react";
import "../sass/purchasehistory/_user_infor.scss";
import DeleteAddressModal from "./purchasehistory/subcomponents/DeleteAddressModal";
// controller
import userController from "../features/user/function";
import DropZone from "./useInfo/DropZone";
import {
  Button,
  Stack,
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Delete as DeleteIcon } from "@material-ui/icons";
//
import { toast } from "react-toastify";
//

const AddressSelect = React.lazy(() =>
  import("../components/register/AddressSelect")
);

const UserInFor = () => {
  //

  const [openModalDelete, setOpenModalDelete] = useState(false);

  //
  const [editDisabled, setEditDisabled] = useState(true);
  const [detailAddress, setDetailAddress] = useState({});
  const [currentAddressInfo, setCurrentAddressInfo] = useState("");
  //
  const [addressBtStatus, setAddressBtStatus] = useState("Add");
  const [addressEdit, setAddressEdit] = useState([]);
  //
  const [numberAddress, setNumberAddress] = useState("");
  const [isIdDefault, setIsIdDefault] = useState(false);
  //45Yasuo,Xã Bình Yên,Huyện Sơn Dương,Tỉnh Tuyên Quang
  // detail              + commune ,      + district, +    province name
  //
  const handleAddressEdit = (v) => {
    setNumberAddress(v?.address.split(",")[0]);
    if (v?.idDefault) {
      setIsIdDefault(true);
    } else {
      setIsIdDefault(false);
    }
    setAddressBtStatus("Edit");
    setAddressEdit(v?.detailAddress);
    userController
      .getAddressById({ addressId: v?.detailAddress })
      .then((res) => {
        console.log(res);
        const address = res.data.address;
        setDetailAddress({ ...address });
      })
      .catch((e) => {
        toast.error(`Lỗi không thể lấy địa chỉ phù hợp`, {
          autoClose: 5000,
          closeOnClick: true,
          position: "top-right",
        });
      });
    setUserData({
      ...userData,
      addressId: v?.detailAddress,
    });
  };
  // Xã

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
          avatar: avatar.url,
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
    const getAddress = detailAddress?.detailAddress || detailAddress;
    // var
    const addressStr = `${numberAddress || "Chưa nhập số nhà"},${
      getAddress?.ward?.wardName
    },${getAddress?.district?.districtName},${
      getAddress?.province?.provinceName
    }`;
    const addressValue = {
      ...getAddress,
    };
    const addresses = userData.addresses.filter(
      (v) => v?.addressIdEdit !== userData.addressId
    );
    addresses.push({
      idDefault: isIdDefault,
      detailAddress: addressValue,
      address: addressStr,
    });
    let inputData = editDisabled
      ? {
          ...userData,
          editAddress: userData.addressId,
          newAddress: {
            idDefault: isIdDefault,
            numberAddress: addressValue,
            address: addressStr,
          },
        }
      : {
          ...userData,
        };
    const res = await userController.updateUser(inputData);
    try {
      const { status } = res;
      const { gender, name, phone, avatar, addresses } = res.data;

      if (status) {
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
          avatar: avatar.url,
          addresses,
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
      if (!editDisabled) setEditDisabled(true);
      if (addressBtStatus == "Edit") setAddressBtStatus("Add");
    }
  };
  // Add
  const handleAddUserAddress = async () => {
    const getAddress = detailAddress?.detailAddress || detailAddress;

    // var
    const addressStr = `${numberAddress || "Chưa nhập số nhà"},${
      getAddress?.ward?.wardName
    },${getAddress?.district?.districtName},${
      getAddress?.province?.provinceName
    }`;
    const addressValue = {
      ...getAddress,
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
        setAddressBtStatus("Edit");
        // const newAddresses = [
        //   ...userData.addresses,
        //   {
        //     address: addressStr,
        //     idDefault: isIdDefault,
        //   },
        // ];
        setUserData({
          ...userData,
          gender,
          name,
          phone,
          avatar: avatar.url,
          addresses: addresses,
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

  return (
    <div className="user-infor-main">
      <div className="user-infor">
        {/* Info */}
        <div className="user-infor-header">
          <h4 className="user-infor-header__heading">Thông tin cá nhân</h4>
          {/* Avatar */}
          <DropZone
            userDataAvatar={userData.avatar}
            setUserData={setUserData}
            userData={userData}
          />

          {/* EDIT USER INFO */}
          {/* GENDER */}
          <FormControl>
            <FormLabel sx={{ fontSize: 18 }}>Giới tính</FormLabel>
            <RadioGroup
              row
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 20 },
                "& .MuiFormControlLabel-label": { fontSize: 16 },
              }}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  gender: e.target.value,
                });
              }}
            >
              <FormControlLabel
                InputLabelProps={{ style: { fontSize: 16 } }}
                checked={userData.gender === "man"}
                value="man"
                control={<Radio />}
                label="Nam"
                disabled={editDisabled}
              />
              <FormControlLabel
                InputLabelProps={{ style: { fontSize: 16 } }}
                checked={userData.gender === "woman"}
                value="woman"
                control={<Radio />}
                label="Nữ"
                disabled={editDisabled}
              />
            </RadioGroup>
          </FormControl>

          {/* INFO */}
          <Stack
            sx={{ mt: 2 }}
            direction="row"
            align="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                "& > :not(style)": { width: "25ch", mr: 2 },
              }}
            >
              <TextField
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                label="Tên"
                variant="standard"
                placeholder={userData.name}
                value={userData.name}
                name="name"
                disabled={editDisabled}
                onChange={(e) => updateInput(e)}
              />
              <TextField
                InputLabelProps={{ style: { fontSize: 16 } }}
                label="Số điện thoại"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  style: { fontSize: 16 },
                }}
                variant="standard"
                placeholder={userData.phone}
                value={userData.phone}
                disabled={editDisabled}
                name="phone"
                onChange={(e) => updateInput(e)}
              />
            </Box>

            {editDisabled ? (
              <Stack direction="row">
                <Button
                  sx={{ m: 0.8, fontSize: 12 }}
                  variant="contained"
                  onClick={() => {
                    setEditDisabled(!editDisabled);
                  }}
                >
                  Cập nhật
                </Button>
                <Button
                  sx={{ m: 0.8, fontSize: 12 }}
                  variant="contained"
                  onClick={() => alert("Coming soon...")}
                >
                  Liên hệ với quản lý
                </Button>
              </Stack>
            ) : (
              <Stack direction="row">
                <Button
                  sx={{ m: 0.8, fontSize: 12 }}
                  variant="contained"
                  onClick={handleConfirmUpdateUserData}
                >
                  Lưu
                </Button>
                <Button
                  sx={{ m: 0.8, fontSize: 12 }}
                  variant="contained"
                  onClick={() => setEditDisabled(!editDisabled)}
                >
                  Hủy
                </Button>
              </Stack>
            )}
          </Stack>
        </div>
        {/* Address list */}
        <div className="user-infor-address">
          <h4 className="user-infor-address__heading">Địa chỉ nhận hàng</h4>
          <div className="line"></div>
          <div className="user-infor-address-list">
            {userData?.addresses.map((v, i) => {
              return (
                <>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    key={i}
                  >
                    <input
                      type="hidden"
                      name="addressId"
                      value={v?.detailAddress}
                    />

                    <Box sx={{ width: "100%", maxWidth: "60%" }}>
                      <Typography variant="h5">{v?.address}</Typography>
                    </Box>

                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      spacing={2}
                      sx={{ width: "30%" }}
                    >
                      <span className="user-infor-address-item__default">
                        {v?.idDefault ? "Mặc định" : i == 0}
                      </span>
                      <Button
                        sx={{ fontSize: "12px" }}
                        variant="contained"
                        onClick={() => handleAddressEdit(v)}
                      >
                        Sửa
                      </Button>
                      <Button
                        sx={{ fontSize: "12px" }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        color="error"
                        disabled={v?.idDefault}
                        onClick={() => {
                          setOpenModalDelete(true);
                          setAddressEdit(v?.detailAddress);
                          setCurrentAddressInfo(v?.address);
                        }}
                      >
                        Xoá
                      </Button>
                    </Stack>
                  </Stack>
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
            <AddressSelect
              detailAddress={detailAddress}
              addressEdit={addressEdit}
              setValues={setDetailAddress}
              addressBtStatus={addressBtStatus}
            />
            <input
              className="update-address__input input"
              type="text"
              value={numberAddress}
              placeholder="Số nhà, tên đường"
              onChange={(e) => setNumberAddress(e.target.value)}
            />
            <div className="update-address__default">
              <input
                type="checkbox"
                disabled={isIdDefault ? true : false}
                checked={isIdDefault ? "checked" : ""}
                onChange={() => setIsIdDefault(!isIdDefault)}
              />

              <label htmlFor=""> &nbsp; Địa chỉ mặc định</label>
            </div>
          </form>
        </div>
        {/* Address update Button */}
        <div className="user-infor-btn ">
          {addressBtStatus == "Add" ? (
            <button
              className={`btn user-infor-btn__update `}
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
              onClick={() => {
                setAddressBtStatus("Add");
              }}
            >
              Hủy
            </button>
          )}
        </div>
        {/* Modal */}
        {openModalDelete && (
          <DeleteAddressModal
            currentAddressInfo={currentAddressInfo}
            setUserData={setUserData}
            openModalDelete={setOpenModalDelete}
            addressEdit={addressEdit}
          />
        )}
      </div>
    </div>
  );
};

export default UserInFor;
