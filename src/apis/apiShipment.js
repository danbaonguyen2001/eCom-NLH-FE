const axios = require("axios")


const Token = "36ccac9c-5cf2-11ed-b8cc-a20ef301dcd7";
const shop_id = 120559;
const province_id = 202;
const from_district = 3695;



const headers = {
    Token,
    "Content-Type": "application/json",
}
const params = {
        "shop_id": shop_id,
        "from_district": from_district,
    }
    // close before product
export const getShipFee = async(input) => {
    let inputData = {
        from_district_id: input.from_district,
        service_id: null,
        service_type_id: null,
        to_district_id: input.district,
        to_ward_code: input.ward,
        height: input.h,
        length: input.l,
        weight: input.wt,
        width: input.wh,
    };

    const res = await axios.get(`https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services`, {
        params: {
            ...params,
            to_district: input.district,
        },
        headers: {
            ...headers,
        }
    })
    const {
        data
    } = res.data
        // Get first serve - temp only
    inputData = {
        ...inputData,
        service_id: data[0].service_id,
    }

    return await axios
        .get(`https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`, {
            params: {
                ...params,
                ...inputData
            },
            headers
        })

};

// fetch service


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