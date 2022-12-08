import React, { useState, useEffect } from "react";
import { Box, Modal, Typography, Button, Stack } from "@mui/material";

const OrderModal = ({ open, setOpen, orderData }) => {
  return (
    <Modal
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      open={open}
    >
      <Box
        sx={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "600px",
          position: "relative",
        }}
      >
        <Typography component="div" onClick={() => setOpen(!open)} variant="h5">
          Chúng tôi sẽ hủy đơn hàng hiện tại và tạo một đơn hàng mới khi thay
          đổi thành công đơn hàng #{<p>{orderData?._id}</p>}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button variant="outlined">Thay đổi sản phẩm</Button>
          <Button variant="outlined">Thay đổi thông tin giao hàng</Button>
          <Button variant="outlined">Hủy đơn hàng</Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default OrderModal;
