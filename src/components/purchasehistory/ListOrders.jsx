import React, { useEffect, useState } from "react";
import "../../sass/purchasehistory/_list_order.scss";
import Order from "./subcomponents/Order";
// selector
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import orderController from "../../features/order/function";
import { toast } from "react-toastify";

const ListOrders = () => {
  const userId = useSelector(selectCurrentUserId);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    let page = 1;
    let size = 5;
    const fetchData = async () => {
      const result = await orderController.getHistoryOrder({ userId, page, size });
      try {
        const {status,data} = result
        if(status){
          console.log(data)
          setOrder([
          ...order,
            ...data,
          ]);

        }else{
          toast.error(`Tải lịch sử đơn hàng thất bại, thử lại`,{
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          })


        }
      } catch (e) {
        console.log("Cant get order history: " + e);
      }
    };
    fetchData()
    
  }, [userId]);
  return (
    <div className="list_orders">
      <div className="list_orders_header">
        <h4 className="mg_b_10">ĐƠN HÀNG MUA GẦN ĐÂY</h4>
      </div>
      <div className="list_orders_title">
        <h5 className="width_15">Mã đơn hàng</h5>
        <h5 className="flex_40_width">Sản phẩm</h5>
        <h5 className="width_15">Giá</h5>
        <h5 className="width_15">Ngày đặt mua</h5>
        <h5 className="width_15">Trạng thái</h5>
      </div>
      <div className="line"></div>
      <div className="list_orders_list">
        
        {order.map((v, i) => {
          return (
            <div key={i}>
              <Order data={v} />
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOrders;
