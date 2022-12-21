import React, { useState, useEffect } from "react";
import { Button, List, Stack } from "@mui/material";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { toDate } from "../../../../utils/format";
import orderController from "../../../../features/order/function";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import OrderModal from "./OrderModal";
import { toastObject } from "../../../../constants/toast";

const ListOrderInfo = React.lazy(() => import("./ListOrderInfo"));
const OrderState = ({ orderData, setOrderData }) => {
  const history = useHistory();

  const [date, setDate] = useState(new Date(orderData?.createdAt));
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const dateI = new Date(orderData?.createdAt);
    const time =
      dateI?.getDay() == 6
        ? toDate(dateI?.setDate(dateI?.getDate() + 4))
        : dateI?.getDay() == 5
        ? toDate(dateI?.setDate(dateI?.getDate() + 5))
        : toDate(dateI?.setDate(dateI?.getDate() + 3));
    setDate(time);
  }, [orderData]);
  //   Handle cancel order
  const handleCancelOrder = () => {
    const { idPaid, isConfirm, isDelivered } = orderData;
    if (idPaid) {
      toast.warning(
        `Chưa hỗ trợ hoàn tiền ví điện tử. Liên hệ hotline`,
        toastObject
      );
    } else if (isConfirm) {
      toast.warning(
        `Đơn hàng này đã xác nhận, không thể hủy bây giờ. Liên hệ hotline`,
        toastObject
      );
    } else if (isDelivered) {
      toast.warning(
        `Đơn hàng này đã được giao hàng, không thể hủy.`,
        toastObject
      );
    } else {
      const confirm = window.confirm("Bạn có chắc muốn hủy đơn hàng này không");
      if (confirm) {
        orderController
          .handlerCancelCodOrder({
            orderId: orderData?._id,
          })
          .then((res) => {
            if (res?.data?.success) {
              toast.success(`Hủy đơn hàng thành công`, toastObject);
              setOrderData((prev) => {
                return {
                  ...prev,
                  status: {
                    statusNow: "Cancel",
                    description: "Cancel.",
                  },
                };
              });
            }
          })
          .catch((e) =>
            toast.error(
              `Xảy ra lỗi trong quá trình hủy đơn hàng: ${e.message}, Thử lại`,
              toastObject
            )
          );
      }
    }
  };
  return (
    <List>
      {
        <OrderModal
          orderData={orderData}
          open={modalOpen}
          setOpen={setModalOpen}
        />
      }
      {/* Process Time*/}
      <ListOrderInfo
        primary="Chờ xác nhận đơn hàng:"
        secondary={`30 phút làm việc kể từ: ${toDate(orderData?.createAt)}`}
      />
      {/* Receive Time */}
      <ListOrderInfo
        primary="Chờ xác nhận đơn hàng:"
        secondary={`Thời gian nhận hàng: ${date}`}
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
          sx={{ textAlign: "lef", fontSize: "11px", minWidth: "13em" }}
          onClick={() => history.push("/")}
        >
          Mua thêm sản phẩm khác
        </Button>
        <Button
          variant="outlined"
          sx={{ textAlign: "center", fontSize: "11px", minWidth: "13em" }}
          disabled={
            orderData?.status?.statusNow.toUpperCase() === "CANCEL" ||
            orderData?.status?.statusNow.toUpperCase() === "REFUND"
          }
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          Yêu cầu thay đổi thông tin
        </Button>
        <Button
          sx={{ textAlign: "center", fontSize: "11px", minWidth: "13em" }}
          endIcon={<DeleteIcon />}
          color="error"
          variant="outlined"
          onClick={handleCancelOrder}
          disabled={
            orderData?.status?.statusNow.toUpperCase() === "CANCEL" ||
            orderData?.status?.statusNow.toUpperCase() === "REFUND"
          }
        >
          Huỷ đơn hàng
        </Button>
      </Stack>
    </List>
  );
};

export default OrderState;
