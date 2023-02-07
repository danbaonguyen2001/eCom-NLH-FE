import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { getAvailableVouchers } from "../../../../features/voucher/function";
import VoucherModal from "./VoucherModal";
import { toastObject } from "../../../../constants/toast";
import { ErrorResponse } from "../../../../utils/ErrorResponse";
import { toVND } from "../../../../utils/format";
const VoucherButtonBox = ({ setIsLoading }) => {
  const [currentVoucher, setCurrentVoucher] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [applyState, setApplyState] = useState(false);
  const checkAvailableVoucher = () => {
    getAvailableVouchers(currentVoucher)
      .then((res) => {
        if (!res.data.success) {
          throw new ErrorResponse(res.data.message, 500);
        }
        const { vouchers } = res.data;
        if (vouchers < 1) {
          throw new ErrorResponse(res.data.message, 404);
        }
        toast.success(
          `Bạn được giảm ${toVND(vouchers[0].promotion)}`,
          toastObject
        );
        setApplyState(true);
      })
      .catch((e) => {
        toast.error(
          e.statusCode === 404 ? `Voucher không hợp lệ` : `Lỗi: ${e.message}`,
          {
            ...toastObject,
            toastId: 99,
          }
        );
      });
  };

  return (
    // Group 2 buttons
    // button 1: Show voucher List
    // button 2: Apply current voucher
    <>
      <Grid container>
        <Grid item xs={8}>
          <TextField
            onChange={(e) => setCurrentVoucher(e.target.value)}
            fullWidth
            label="Mã giảm giá"
            placeholder="Nhập mã giảm giá"
            value={currentVoucher}
            variant="filled"
          />
        </Grid>
        {/* Button 1 */}
        <Grid
          item
          xs={4}
          sx={{ display: "flex" }}
          justifyContent="space-around"
        >
          <Button
            variant="contained"
            sx={{ height: "100%", fontSize: "1rem" }}
            onClick={() => setModalOpen(true)}
          >
            Danh sách
          </Button>
          {/* Button 2 */}
          {!applyState ? (
            <Button
              variant="contained"
              sx={{ height: "100%", fontSize: "1rem" }}
              onClick={checkAvailableVoucher}
            >
              Sử dụng
            </Button>
          ) : (
            <Button
              variant="secondary"
              sx={{ height: "100%", fontSize: "1rem" }}
              onClick={() => {
                setCurrentVoucher("");
                setApplyState(false);
              }}
            >
              Thay đổi
            </Button>
          )}
        </Grid>
      </Grid>
      {/* Modal List Voucher */}
      <VoucherModal
        open={modalOpen}
        setCurrentVoucher={setCurrentVoucher}
        currentVoucher={currentVoucher}
        setOpen={setModalOpen}
      />
    </>
  );
};

export default VoucherButtonBox;
