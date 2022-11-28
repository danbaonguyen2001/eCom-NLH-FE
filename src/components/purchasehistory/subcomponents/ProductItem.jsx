import { Divider, List, Stack } from "@mui/material";
import React from "react";
import { toVND } from "../../../utils/format";
import {LazyLoadImage} from "react-lazy-load-image-component";
const ProductItem = ({ item, index }) => {
  {
    console.log(item);
  }
  return (
    <List key={index}>
      <Divider></Divider>

      <Stack sx={{ width: "100%" }} direction="row">
        {/* LEFT */}
        {/* IMAGE */}
        <Stack direction="row" sx={{width: "100%" }} spacing={2}>
          <LazyLoadImage
            style={{ height: "100px"}}
            src={item?.image}
            alt="loading"
          />

          {/* PRODUCT INFO */}
          <Stack direction="column" spacing={2}>
            <h5 className="mg_b_10">{item?.itemName || "Đang cập nhật"}</h5>
            <h6 className="mg_b_10">
              {`Màu: ${item?.productColor?.color?.name || "Đang cập nhật"}`}
            </h6>
            <h6 className="mg_b_10">
              {`Loại: ${item?.productOption?.optionName || "Đang cập nhật"}`}
            </h6>
            <h6 className="mg_b_10">
              {`Số lượng: ${item?.quantity || "Đang cập nhật"}`}
            </h6>
            <h6 className="mg_b_10">
              {`Giá niêm yết: ${
                toVND(item?.productOption?.price) || "Đang cập nhật"
              }`}
            </h6>
            <h6 className="mg_b_10">
              {`Thương hiệu: ${
                item?.product?.manufacturer?.name || "Đang cập nhật"
              }`}
            </h6>
            <h6 className="mg_b_10">
              {`Hệ điều hành: ${
                item?.product?.subcategory?.categoryName || "Đang cập nhật"
              }`}
            </h6>

            <h6>
              <i class="fa-solid fa-circle mg_r_5"></i>
              Giảm 500.000 khi toán bằng zalo pay
            </h6>
          </Stack>
        </Stack>

        {/* RIGHT */}
        {/* ITEM PRICE */}
        <div className="order_detail_list_item_price">
          <h5 className="text_primary">
            {toVND(item?.totalPrice) || "Đang cập nhật"}
          </h5>
        </div>
      </Stack>
    </List>
  );
};

export default ProductItem;
