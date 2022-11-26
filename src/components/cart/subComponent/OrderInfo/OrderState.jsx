import React, { useState, useEffect } from "react";
import { Button, List, Stack } from "@mui/material";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { toDate } from "../../../../utils/format";
import orderController from "../../../../features/order/function";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ListOrderInfo = React.lazy(() => import("./ListOrderInfo"));
const OrderState = ({ orderData }) => {
  const history = useHistory();

  const [date, setDate] = useState(new Date(orderData?.createdAt));
  useEffect(() => {
    setDate(new Date(orderData?.createdAt));
  }, [orderData]);
  //   Handle cancel order
  const handleCancelOrder = async () => {
    const paymentMethod = orderData?.orderdetail?.payment?.name;
    if (paymentMethod != "cod") {
      toast.warning(`Chưa hỗ trợ hoàn tiền ví điện tử. Liên hệ hotline`, {
        autoClose: 5000,
        closeOnClick: true,
        position: "top-right",
      });
    } else {
      const confirm = window.confirm("Bạn có chắc muốn hủy đơn hàng này không");
      if (confirm) {
        try {
          // alter
          const res = await orderController.handlerCancelCodOrder({ orderId:orderData?._id });
          res &&
            toast.success(`Hủy đơn hàng thành công`, {
              closeOnClick: true,
              autoClose: 5000,
              position: "top-right",
            });
          !res &&
            toast.error(`Xảy ra lỗi trong quá trình hủy đơn hàng`, {
              closeOnClick: true,
              autoClose: 5000,
              position: "top-right",
            });
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  return (
    <List>
      {/* Process Time*/}
      <ListOrderInfo
        primary="Chờ xác nhận đơn hàng:"
        secondary={`30 phút làm việc kể từ: ${toDate(date)}`}
      />
      {/* Receive Time */}
      <ListOrderInfo
        primary="Chờ xác nhận đơn hàng:"
        secondary={`Thời gian nhận hàng: ${
          date?.getDay() == 6
            ? toDate(date?.setDate(date?.getDate() + 4))
            : date?.getDay() == 5
            ? toDate(date?.setDate(date?.getDate() + 5))
            : toDate(date?.setDate(date?.getDate() + 3))
        }`}
      />

      {/* Order State */}
      <ListOrderInfo
        primary="Trạng thái đơn hàng:"
        secondary={`Thời gian nhận hàng: ${orderData?.state || "Đang xử lý"}`}
      />
      {/* Button */}
      <Stack
        direction="row"
        marginTop={2}
        spacing={1}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          variant="outlined"
          sx={{ textAlign: "center", fontSize: "12px", minWidth: "13em" }}
          onClick={() => history.push("/")}
        >
          Mua thêm sản phẩm khác
        </Button>
        <Button
          variant="outlined"
          sx={{ textAlign: "center", fontSize: "12px", minWidth: "13em" }}
          onClick={() => history.push("/")}
        >
          Thay đổi thông tin
        </Button>
        <Button
          sx={{ textAlign: "center", fontSize: "12px", minWidth: "13em" }}
          endIcon={<DeleteIcon />}
          color="error"
          variant="outlined"
          onClick={handleCancelOrder}
        >
          Huỷ đơn hàng
        </Button>
      </Stack>
    </List>
  );
};

export default OrderState;
