import React, { useEffect, useState } from "react";
import "../../sass/purchasehistory/_list_order.scss";
// selector
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import orderController from "../../features/order/function";
import { toast } from "react-toastify";
import { Typography, Stack, Divider } from "@mui/material";
import SkeletonListOrders from "./SkeletonListOrders";
import NoOrder from "./NoOrder";

const Order = React.lazy(() => import("./subcomponents/Order"));
const ListOrders = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let page = 1;
    let size = 5;

    orderController
      .getHistoryOrder({ page, size })
      .then((res) => {
        setIsLoading(res.isLoading);
        setOrder([...res?.data]);
      })
      .catch((e) =>
        toast.error(`Tải lịch sử đơn hàng thất bại, thử lại: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
      );
  }, []);
  return (
    <div className="list_orders">
      <Divider textAlign="right" sx={{ marginBottom: "1rem" }}>
        <Typography
          variant="h6"
          fontStyle="italic"
          fontWeight="bold"
          sx={{
            minWidth: "20em",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          textTransform="uppercase"
        >
          {`ĐƠN HÀNG MUA GẦN ĐÂY-`}
          <Typography
            variant="h6"
            fontStyle="italic"
            color="blue"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {`${currentUser.name}`}
          </Typography>
        </Typography>
      </Divider>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{ flex: 2, textAlign: "center", fontWeight: "bold" }}
          variant="h6"
        >
          Mã đơn hàng
        </Typography>
        <Typography
          sx={{ flex: 4, textAlign: "center", fontWeight: "bold" }}
          variant="h6"
        >
          Sản phẩm
        </Typography>
        <Typography
          sx={{ flex: 2, textAlign: "center", fontWeight: "bold" }}
          variant="h6"
        >
          Giá
        </Typography>
        <Typography
          sx={{ flex: 3, textAlign: "center", fontWeight: "bold" }}
          variant="h6"
        >
          Ngày đặt mua
        </Typography>
        <Typography
          sx={{ flex: 1, textAlign: "center", fontWeight: "bold" }}
          variant="h6"
        >
          Trạng thái
        </Typography>
      </Stack>
      <div className="line"></div>
      <div className="list_orders_list">
        {isLoading ? (
          <SkeletonListOrders />
        ) : order.length > 0 ? (
          order.reverse().map((v, i) => {
            return (
              <div key={i}>
                <Order data={v} />
                <div className="line"></div>
              </div>
            );
          })
        ) : (
          <NoOrder />
        )}
      </div>
    </div>
  );
};

export default ListOrders;
