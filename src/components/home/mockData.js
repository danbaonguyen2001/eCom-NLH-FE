// 6 col size event
import s1 from "../../assets/images/home/slider-bigBanner/s1.png";
import s2 from "../../assets/images/home/slider-bigBanner/s2.png";
import s3 from "../../assets/images/home/slider-bigBanner/s3.png";
import s4 from "../../assets/images/home/slider-bigBanner/s4.png";
import s5 from "../../assets/images/home/slider-bigBanner/s5.png";
import s6 from "../../assets/images/home/slider-bigBanner/s6.png";
import s7 from "../../assets/images/home/slider-bigBanner/s7.png";
import s8 from "../../assets/images/home/slider-bigBanner/s8.png";
import s9 from "../../assets/images/home/slider-bigBanner/s9.png";
import s10 from "../../assets/images/home/slider-bigBanner/s10.png";
// 4 col size event (Golden week)
import h1 from "../../assets/images/home/slide-goldenWeek/e4p1.png";
import h2 from "../../assets/images/home/slide-goldenWeek/e4p2.png";
import h3 from "../../assets/images/home/slide-goldenWeek/e4p3.png";
// 4 col size event (Discount online pay)
import po1 from "../../assets/images/home/item-PO/po1.png";
import po2 from "../../assets/images/home/item-PO/po2.png";
import po3 from "../../assets/images/home/item-PO/po3.png";

// product pic
import lc1 from "../../assets/images/home/slider-luckyCircle/lc1.png";
// nguyen import
import lc2 from "../../assets/images/home/slider-luckyCircle/lc2.png";
import lc3 from "../../assets/images/home/slider-luckyCircle/lc3.png";
import lc4 from "../../assets/images/home/slider-luckyCircle/lc4.png";
import lc5 from "../../assets/images/home/slider-luckyCircle/lc5.png";
import lc6 from "../../assets/images/home/slider-luckyCircle/lc6.png";

export const hoData = [{
        id: "1",
        path: s1,
    },
    {
        id: "2",
        path: s2,
    },
    {
        id: "3",
        path: s3,
    },
    {
        id: "4",
        path: s4,
    },
    {
        id: "5",
        path: s5,
    },
    {
        id: "6",
        path: s6,
    },
    {
        id: "7",
        path: s7,
    },
    {
        id: "8",
        path: s8,
    },
    {
        id: "9",
        path: s9,
    },
    {
        id: "10",
        path: s10,
    },
];
export const veData = [{
        id: 1,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "4.5",
        numRate: 15,
        fav: true,
        event: 1,
        //tra gop
        TG: true,
        path: lc1,
    },
    {
        id: 2,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "No rate",
        numRate: 0,
        event: 2,
        //tra gop
        TG: true,
        path: lc2,
    },
    {
        id: 3,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "No rate",
        numRate: 2.3,
        event: 1,
        //tra gop
        TG: true,
        path: lc3,
    },
    {
        id: 4,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "No rate",
        numRate: 4.1,
        event: 1,
        //tra gop
        TG: true,
        path: lc4,
    },
    {
        id: 5,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "No rate",
        numRate: 1.1,
        event: 1,
        //tra gop
        TG: true,
        path: lc5,
    },
    {
        id: 6,
        name: "oppo a96",
        price: 6990000,
        award: "Quà 450.000đ",
        rate: "No rate",
        numRate: 3.2,
        event: 1,
        //tra gop
        TG: true,
        path: lc6,
    },
];
export const hoData4 = [{
        id: "1",
        path: h1,
    },
    {
        id: "2",
        path: h2,
    },
    {
        id: "3",
        path: h3,
    },
    {
        id: "4",
        path: h1,
    },
    {
        id: "5",
        path: h3,
    },
    {
        id: "6",
        path: h2,
    },
    {
        id: "7",
        path: h1,
    },
    {
        id: "8",
        path: h3,
    },
    {
        id: "9",
        path: h2,
    },
    {
        id: "10",
        path: h1,
    },
];
export const hoDataPo = [{
        id: "1",
        path: po1,
    },
    {
        id: "2",
        path: po2,
    },
    {
        id: "3",
        path: po3,
    },
    {
        id: "4",
        path: po1,
    },
    {
        id: "5",
        path: po3,
    },
    {
        id: "6",
        path: po2,
    },
    {
        id: "7",
        path: po1,
    },
    {
        id: "8",
        path: po3,
    },
    {
        id: "9",
        path: po2,
    },
    {
        id: "10",
        path: po1,
    },
];
// Recommend shop
export const listProduct = veData.reduce((prev, curr, index) => {
    return index < 5 ?
        prev.concat(curr, curr, curr) :
        prev.concat(curr, curr, curr, curr, curr);
}, []);