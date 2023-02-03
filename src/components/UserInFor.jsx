import React, { useState, useEffect } from "react";
import "../sass/purchasehistory/_user_infor.scss";
import DeleteAddressModal from "./purchasehistory/subcomponents/DeleteAddressModal";
// controller
import userController from "../features/user/function";
import DropZone from "./userInfo/DropZone";
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
  Checkbox,
  FormGroup,
  Skeleton,
  LinearProgress,
} from "@mui/material";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
//
import { toast } from "react-toastify";
import { useAuthUser } from "../redux/hook/authUser";
//

const AddressSelect = React.lazy(() =>
  import("../components/register/AddressSelect")
);

const UserInFor = () => {
  //
  const history = useHistory();
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
    if (v?.idDefault != isIdDefault) setIsIdDefault(!isIdDefault);
    setAddressBtStatus("Edit");
    setAddressEdit(v?.detailAddress);
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
    gender: "private",
    name: "",
    phone: "",
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
        if (res.isLoading) {
          setIsLoading(true);
          setIsSuccess(false);
        }
        if (res.isSuccess) {
          setIsSuccess(true);
          setIsLoading(false);
        }

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
      idDefault: isIdDefault || false,
      detailAddress: addressValue,
      address: addressStr,
    });
    let inputData = editDisabled
      ? {
          isNew: false,
          ...userData,
          editAddress: userData.addressId,
          addresses: [
            {
              idDefault: isIdDefault || false,
              detailAddress: addressValue,
              address: addressStr,
            },
          ],
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
      setAddressBtStatus("Add");
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

    try {
      const res = await userController.updateUser({
        ...userData,
        isNew: true,
        addresses: [
          {
            isNew: true,
            idDefault: isIdDefault || false,
            detailAddress: addressValue,
            address: addressStr,
          },
        ],
      });

      const { status, data } = res;
      const { gender, name, phone, avatar, addresses } = data;
      if (status) {
        setUserData({
          ...userData,
          gender,
          name,
          phone,
          avatar: avatar.url,
          addresses: addresses,
        });
        toast.success(`Thêm địa chỉ thành công`, {
          toastId: 200,
          autoClose: 5000,
          closeOnClick: true,
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
          {!isSuccess ? <LinearProgress /> : <></>}
          <h4 className="user-infor-header__heading">Thông tin cá nhân</h4>
          {/* Avatar */}
          {isSuccess ? (
            <DropZone
              userDataAvatar={userData.avatar}
              setUserData={setUserData}
              userData={userData}
            />
          ) : (
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Skeleton variant="rectangular" width="350px" height="120px" />
              <Skeleton variant="circular" width="198px" height="198px" />
            </Stack>
          )}

          {/* EDIT USER INFO */}
          {/* GENDER */}
          {isSuccess ? (
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
                <FormControlLabel
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  checked={userData.gender === "private" || !userData.gender}
                  value="private"
                  control={<Radio />}
                  label="Ẩn"
                  disabled={editDisabled}
                />
              </RadioGroup>
            </FormControl>
          ) : (
            <Stack flexDirection="row">
              <Skeleton width="20px" height="20px" variant="circular" />
              <Skeleton
                variant="text"
                width="80px"
                sx={{ marginLeft: "10px" }}
              />

              <Skeleton
                width="20px"
                height="20px"
                variant="circular"
                sx={{ marginLeft: "30px" }}
              />
              <Skeleton
                variant="text"
                width="80px"
                sx={{ marginLeft: "10px" }}
              />

              <Skeleton
                width="20px"
                height="20px"
                variant="circular"
                sx={{ marginLeft: "30px" }}
              />
              <Skeleton
                variant="text"
                width="80px"
                sx={{ marginLeft: "10px" }}
              />
            </Stack>
          )}

          {/* INFO */}
          <Stack
            sx={{ mt: 2 }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {isSuccess ? (
              <Box
                sx={{
                  "& > :not(style)": { width: "20ch", mr: 2 },
                }}
              >
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  label="Tên"
                  variant="standard"
                  placeholder={userData.name}
                  value={!isLoading ? userData.name : ""}
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
                  value={userData.phone || "Đang tải"}
                  disabled={editDisabled}
                  name="phone"
                  onChange={(e) => updateInput(e)}
                />
              </Box>
            ) : (
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  "& > :not(style)": { width: "20ch", mr: 2 },
                }}
              >
                <Skeleton component="div" variant="text" />
                <Skeleton component="div" variant="text" />
              </Stack>
            )}
            {/* Edit info button */}
            {isSuccess ? (
              editDisabled ? (
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
                    onClick={() =>
                      history.push("/purchasehistory/password_change")
                    }
                  >
                    Đổi mật khẩu
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
              )
            ) : (
              <Stack spacing={2} direction="row">
                <Skeleton variant="rectangular" width="77px" height="21px" />
                <Skeleton variant="rectangular" width="90px" height="21px" />
              </Stack>
            )}
          </Stack>
        </div>
        {/* Address list */}
        <div className="user-infor-address">
          <h4 className="user-infor-address__heading">Địa chỉ nhận hàng</h4>
          <div className="line"></div>
          <div className="user-infor-address-list">
            {isSuccess ? (
              userData?.addresses.map((v, i) => {
                return (
                  <React.Fragment key={i}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <input
                        type="hidden"
                        name="addressId"
                        value={v?.detailAddress}
                      />

                      <Box
                        alignItems="center"
                        sx={{ width: "100%", maxWidth: "60%" }}
                      >
                        <Typography variant="h5" sx={{ lineHeight: "33px" }}>
                          {v?.address}
                        </Typography>
                      </Box>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        spacing={2}
                        sx={{ width: "30%" }}
                      >
                        <Typography
                          sx={{ minWidth: "70px" }}
                          variant="h5"
                          color="red"
                        >
                          {v?.idDefault ? "Mặc định" : i == 0}
                        </Typography>
                        {/* Button Group */}
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={1}
                        >
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
                    </Stack>
                    <div className="line"></div>
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  {/* Address detail */}
                  <Box
                    alignItems="center"
                    sx={{ width: "100%", maxWidth: "60%" }}
                  >
                    <Skeleton variant="text" width="400px" height="33px" />
                    <Skeleton variant="text" width="400px" height="33px" />
                    <Skeleton variant="text" width="400px" height="33px" />
                  </Box>
                  {/* Default mark */}
                  <Stack>
                    <Skeleton
                      component="div"
                      variant="text"
                      width="40px"
                      height="33px"
                    />{" "}
                    <Skeleton
                      component="div"
                      variant="text"
                      width="40px"
                      height="33px"
                    />{" "}
                    <Skeleton
                      component="div"
                      variant="text"
                      width="40px"
                      height="33px"
                    />
                  </Stack>

                  {/* Button */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={2}
                    sx={{ width: "30%" }}
                  >
                    <Typography
                      sx={{ minWidth: "70px" }}
                      variant="h5"
                      color="red"
                    ></Typography>
                    {/* Button Group */}
                    <Stack
                      direction="column"
                      justifyContent="space-around"
                      alignItems="space-around"
                      sx={{ height: "100%" }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="60px"
                          height="21px"
                          variant="contained"
                        />
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="78px"
                          height="21px"
                          variant="contained"
                        />
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="60px"
                          height="21px"
                          variant="contained"
                        />
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="78px"
                          height="21px"
                          variant="contained"
                        />
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="60px"
                          height="21px"
                          variant="contained"
                        />
                        <Skeleton
                          sx={{ fontSize: "12px" }}
                          width="78px"
                          height="21px"
                          variant="contained"
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="line"></div>
              </React.Fragment>
            )}
            {}
          </div>
        </div>

        {/* Address update Button */}
        {/* Address detail */}
        <div>
          <h4>Cập nhật địa chỉ</h4>
          <Stack direction="row" flexWrap="wrap">
            <AddressSelect
              style={{ width: "100%" }}
              addressEdit={addressEdit}
              setValues={setDetailAddress}
              addressBtStatus={addressBtStatus}
            />
            {/* Under */}
            <Stack
              sx={{ width: "100%", m: 1 }}
              justifyContent="flex-end"
              direction="row"
            >
              <TextField
                inputProps={{ style: { fontSize: 16 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                sx={{ width: "16em" }}
                variant="standard"
                value={numberAddress}
                placeholder="Số nhà, tên đường"
                onChange={(e) => setNumberAddress(e.target.value)}
              />
              <FormGroup sx={{ width: "14em", ml: 4 }}>
                <FormControlLabel
                  sx={{ "	& .MuiFormControlLabel-label": { fontSize: 16 } }}
                  label="Địa chỉ mặc định"
                  control={
                    <Checkbox
                      disabled={
                        addressBtStatus === "Edit" &&
                        isIdDefault === true &&
                        userData?.addresses?.find((v) => {
                          if (v?.detailAddress == addressEdit.toString()) {
                            return v?.idDefault == isIdDefault;
                          }
                        })
                          ? true
                          : false
                      }
                      checked={isIdDefault}
                      onChange={() => setIsIdDefault(!isIdDefault)}
                    />
                  }
                />
              </FormGroup>

              {/* Button */}
              <Stack
                direction="row"
                sx={{ minWidth: "20em" }}
                spacing={2}
                justifyContent="flex-end"
              >
                {addressBtStatus == "Add" ? (
                  <Button
                    sx={{ fontSize: 12 }}
                    variant="contained"
                    style={{ marginRight: "25px" }}
                    onClick={handleAddUserAddress}
                    disabled={!editDisabled}
                  >
                    Thêm địa chỉ mới
                  </Button>
                ) : (
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <Button
                      sx={{ fontSize: 12, mr: 2 }}
                      variant="contained"
                      onClick={handleConfirmUpdateUserData}
                      disabled={!editDisabled}
                    >
                      Cập nhật thông tin
                    </Button>
                    <Button
                      sx={{ fontSize: 12, mr: 2 }}
                      variant="contained"
                      disabled={!editDisabled}
                      onClick={() => {
                        setIsIdDefault(false);
                        setAddressEdit(null);
                        setNumberAddress("");
                        setAddressBtStatus("Add");
                      }}
                    >
                      Hủy
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
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
