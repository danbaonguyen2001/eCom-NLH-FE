// import axios from "axios";
const axios = require("axios")

const Token = "36ccac9c-5cf2-11ed-b8cc-a20ef301dcd7";
const shop_id = 120559;
const province_id = 202;
const from_district = 3695;


// MOCK
// sample input
let insuranceValue;
const input = {
    wt: 50,
    wh: 20,
    l: 20,
    h: 50,
    from_district: 1452,
    ward: 21012,
    district: 1454,
    service_id: 53320,
    insurance_value: insuranceValue || 100000,
};

// Response
// {
//     "code": 200,
//     "message": "Success",
//     "data": {
//         "total": 38500,
//         "service_fee": 38500,
//         "insurance_fee": 0,
//         "pick_station_fee": 0,
//         "coupon_value": 0,
//         "r2s_fee": 0,
//         "document_return": 0
//     }
// }
const headers = {
        Token,
        "Content-Type": "application/json",
        ShopId: shop_id,
    }
    // close before product
export const getShipFee = async(input) => {
    const inputData = {
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
    return axios
        .get(`https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`, {
            params: {
                ...inputData
            },
            headers
        })

};
// fetch location
// Province
export const getProvince = async() => {
        return await axios.get(`https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province`, {
            headers
        })
    }
    // District
export const getDistrict = async(provinceID) => {
        return await axios.get(`https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district`, {
            headers,
            params: {
                province_id: provinceID
            }
        })
    }
    //Ward 
export const getWard = async(districtID) => {
    return await axios.get(`https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward`, {
        headers,
        params: {
            district_id: districtID
        }
    })
}