import {
  Modal,
  Stack,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  Paper,
  Table,
  Radio,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import FullScreenProgress from "../../../loading/FullScreenProgress";
import { getAvailableVouchers } from "../../../../features/voucher/function";
import {
  useGetAvailableVouchersQuery,
  voucherApiSlice,
} from "../../../../features/voucher/voucherApiSlice";
import { toVND } from "../../../../utils/format";
import Loader from "../../../loading/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "80rem",
  boxShadow: 24,
};
// table style
// head
const styleHead = {
  fontSize: "1.3rem",
};
// body
const styleBody = {
  fontSize: "1.2rem",
};
// Component
const VoucherModal = ({
  open,
  setOpen,
  keyword,
  setCurrentVoucher,
  currentVoucher,
}) => {
  const [listVoucher, setListVoucher] = useState([]);
  const { data, isError, isLoading, isSuccess } =
    useGetAvailableVouchersQuery();
  useEffect(() => {
    data && setListVoucher(data.vouchers);
  }, [data, isError, isLoading, isSuccess]);

  // const vouchers =
  //   voucherApiSlice.endpoints.getAvailableVouchers.useQuery(keyword);

  // Current main
  // useEffect(() => {
  //   getAvailableVouchers(keyword)
  //     .then((res) => {
  //       setIsLoading(res.isLoading);
  //       setListVoucher(res?.data?.vouchers);
  //     })
  //     .catch((e) => {});
  // }, []);

  const setClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={setClose}>
      <Stack sx={style}>
        {/* Table */}
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table>
            {/* Header */}
            <TableHead>
              <TableRow>
                <TableCell sx={styleHead}>Mã</TableCell>
                <TableCell sx={styleHead}>Mô tả</TableCell>
                <TableCell sx={styleHead} colSpan={2}>
                  Giá trị
                </TableCell>
                <TableCell sx={styleHead}>Đơn tối thiểu</TableCell>
                <TableCell sx={styleHead}>Số lượng</TableCell>
                <TableCell sx={styleHead}>Chọn</TableCell>
              </TableRow>
            </TableHead>
            {/* Content */}
            <TableBody>
              <Loader isLoading={isLoading}>
                {listVoucher && listVoucher.length > 0 ? (
                  listVoucher.map((v, i) => {
                    return (
                      <TableRow
                        sx={
                          v.limit < 1 && {
                            opacity: 0.5,
                          }
                        }
                        key={v.key}
                      >
                        <TableCell style={styleBody}>{v.key}</TableCell>
                        <TableCell style={styleBody}>{v.description}</TableCell>
                        <TableCell colSpan={2} style={styleBody}>
                          <Stack>
                            <ListItemText
                              primaryTypographyProps={{
                                sx: { fontSize: "1.2rem" },
                              }}
                              secondaryTypographyProps={{
                                sx: { fontSize: "1.1rem" },
                              }}
                              primary={`Giảm:${toVND(v.promotion)}`}
                              secondary={`Lên đến:${toVND(
                                v.conditions.maxDiscount
                              )}`}
                            />
                          </Stack>
                        </TableCell>

                        <TableCell style={styleBody}>
                          {toVND(v.conditions.minTotalPrice)}
                        </TableCell>
                        <TableCell style={styleBody}>
                          {v.limit > 0 ? v.limit : "Hết"}
                        </TableCell>
                        <TableCell>
                          <Radio
                            defaultChecked={false}
                            checked={currentVoucher === v.key}
                            disabled={v.limit < 1}
                            onClick={() => setCurrentVoucher(v.key)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>Hiện tại đã hết voucher</TableCell>
                  </TableRow>
                )}
              </Loader>
            </TableBody>
          </Table>
        </TableContainer>
        {/* Close Button */}
        <Button variant="contained" onClick={setClose}>
          Close
        </Button>
      </Stack>
    </Modal>
  );
};

export default VoucherModal;
