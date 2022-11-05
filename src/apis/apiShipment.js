import axios from "axios";

const Token = "36ccac9c-5cf2-11ed-b8cc-a20ef301dcd7";
const shop_id = 120559;
const province_id = 202;
const from_district = 3695;
let config = {
  headers: {
    Token,
    "Content-Type": "application/json",
    ShopId: shop_id,
    "Content-Type": "text/plain",
  },
};

// MOCK
// sample input

const input = {
  w: 50,
  from_district: 1452,
  ward: 21012,
  district: 1454,
  service_id: 53320,
};

// close before product

export const getShipFee = async (input) => {
  const data = {
    from_district_id: input.from_district,
    service_id: input.service_id,
    service_type_id: null,
    to_district_id: input.district,
    to_ward_code: input.ward,
    height: input.h,
    length: input.l,
    weight: input.wt,
    width: input.wh,
  };
  axios
    .get(``, data, config)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
};
