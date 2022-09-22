export const toVND = function(cash = 0) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",

    }).format(cash);
    // return cash.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};
export const toDate = function(date = new Date()) {
    let day = new Date(date)
    return day.toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
//handler search params
export const getParamsValue = (search, name) => {
    let index = "";
    const params = search.replace(/\?/, "").split("=");
    index = params.findIndex((v) => {
        return v == name;
    });
    if (index != -1) {
        console.log(params[index + 1])
        return params[index + 1]
    } else return false
};