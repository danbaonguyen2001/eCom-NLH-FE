import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getVNDRate } from "../apis/apiCurrency";
import { toastObject } from "../constants/toast";
import orderController from "../features/order/function";
import { toVND, toUSD } from "../utils/format";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
const ButtonPayPalWrap = React.lazy(() =>
  import("./payOrder/ButtonPayPalWrap")
);
// /order/pay/:id

const PayOrder = () => {
  // const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [rate, setRate] = useState(0);
  const history = useHistory();
  useMemo(() => {
    orderController
      .getOrderInfo({ orderId })
      .then((res) => {
        console.log(res);
        setOrder(res.data.order);
      })
      .catch((e) => {
        toast.error(`Lỗi thanh toán ví điện tử, thử lại sau`, toastObject);
        history.push(`/redirect/order?orderId=${orderId}`);
      });
  }, [orderId]);
  useEffect(() => {
    getVNDRate()
      .then((res) => {
        setRate(res?.data?.rates?.VND);
      })
      .catch((e) => {
        toast.error(`Hiện tại chưa hỗ trợ tiền USD`);
        setRate(0);
      });
  }, [order]);
  const payOrder = async (data) => {
    // orderController.handlerPayOrder();
    // id: req.body.id,
    // status: req.body.status,
    // update_time: req.body.update_time,
    // email_address: req.body.payer.email_address,
    orderController.handlerPayOrder({
      orderId,
      ...data,
    }).then(()=>{
      toast.success(`Thanh toán thành công`,toastObject)
      history.push(`/redirect/order?orderId=${orderId}`);
    })
  };
  return (
    <Paper sx={{ width: "70%", margin: "0 auto" }}>
      <TableContainer>
        <Table>
          {/* HEAD */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 14 }} align="center" colSpan={5}>
                {`Hóa đơn thanh toán ví điện tử mã #${order?._id}`}
              </TableCell>
            </TableRow>
          </TableHead>
          {/* BODY */}
          <TableBody>
            <TableRow>
              {/* TITLE */}
              <TableCell sx={{ fontSize: 14 }} colSpan="0.5" variant="head">
                {" "}
                STT
              </TableCell>
              <TableCell sx={{ fontSize: 14 }} variant="head">
                Tên sản phẩm
              </TableCell>
              <TableCell sx={{ fontSize: 14 }} variant="head">
                Số lượng
              </TableCell>
              <TableCell sx={{ fontSize: 14 }} variant="head">
                Giá 1 đơn vị
              </TableCell>
              <TableCell sx={{ fontSize: 14 }} variant="head">
                Tổng
              </TableCell>
            </TableRow>
            {/*TABLE DATA */}
            {order?.orderItems?.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell sx={{ fontSize: 14 }} variant="body">
                    {" "}
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ fontSize: 14 }} variant="body">
                    {" "}
                    {item?.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: 14 }} variant="body">
                    {item?.quantity || item?.qty}
                  </TableCell>
                  <TableCell sx={{ fontSize: 14 }} variant="body">
                    {toVND(item?.price)}
                  </TableCell>
                  <TableCell sx={{ fontSize: 14 }} variant="body">
                    {toVND((item?.quantity || item?.qty) * item?.price)}
                  </TableCell>
                </TableRow>
              );
            })}
            {/* ASSUME */}
            <TableRow>
              <TableCell rowSpan={1} />
              
              <TableCell colSpan={1} />

              <TableCell colSpan={2} align="right">
                <Typography variant="h6" fontWeight="bold">
                  {rate === 0
                    ? `Tỷ lệ quy đổi bị lỗi thử lại sau`
                    : `Tổng thu với tỷ lệ quy đổi ${toVND(rate)} = ${toUSD(
                        1
                      )} - USD`}
                </Typography>
              </TableCell>
              <TableCell colSpan={1} />
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />

              <TableCell colSpan={1} />

              <TableCell colSpan={2} align="right">
                <Typography variant="h6" fontWeight="bold">
                  {`Tổng tiền phải trả là: ${toUSD(
                    (order?.totalPrice / rate).toPrecision(2)
                  )}`}
                </Typography>
              </TableCell>
              <TableCell colSpan={1} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pay button */}
      {rate && (
        <PayPalScriptProvider
          options={{
            "client-id":
              "AYnnIG_uYjcamwk8Vcd5pTuDyCjl-MBx43rB-lB1eDYDNitB6swG_k97jMKAFcz0o98mjoPo1zs5ZOGP",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonPayPalWrap
            currency={"USD"}
            amount={(order?.totalPrice / rate).toPrecision(2)}
            handlerOrder={payOrder}
          />
        </PayPalScriptProvider>
      )}
    </Paper>
  );
};

export default PayOrder;
