// company
import fe from "../../assets/images/tienich/company/fecredit.png";
// form
import feF from "../../assets/images/tienich/formImage/fe.png";
import homeF from "../../assets/images/tienich/formImage/home.png";
// str
import strCode from "../../assets/images/tienich/formImage/strCode.png";
import strInfo from "../../assets/images/tienich/formImage/strInfo.png";

// Left Box
export const mainDataL = {
  title: {
    className: "sc__title",
    content: "đóng tiền trả góp",
  },
  service: [
    // Step 1 ( Row 1 )
    {
      step: {
        className: "step__title ",
        content: "CHỌN ĐỐI TÁC TRẢ GÓP",
      },
      company: {
        className: "sc__content row",
        content: [
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col  ",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col  ",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col  ",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col  ",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col",
            path: fe,
          },
          {
            link: "/tien-ich/thanh-toan-tra-gop/fe",
            className: "sc__company col  ",
            path: fe,
          },
        ],
      },
    },
    // Step 2 ( Row 2 )
    {
      step: {
        className: "step__title",
        content: "NHẬP THÔNG TIN THANH TOÁN",
      },
      form: {
        className: "sc__form row",
        method: "POST",
        action: "/checkFeCode",
        content: [
          // Input 1
          {
            name: "strCodeNumber",
            className: "sc__input col c-11 m-5 l-5",
            content: "Số hợp đồng",
          },
          // Input 2
          {
            name: "strPhoneNumber",
            className: "sc__input col c-11 m-5 l-5",
            content: "Số điện thoại liên hệ",
          },
          // Input 3 - Submit
          {
            className: "sc__button col c-12 m-8 l-8",
            content: "Kiểm tra và thanh toán",
          },
        ],
      },
    },
    // Comment
  ],
};
// Right Box
export const dataRight = {
  title: {
    content: "hướng dẫn xem mã khách hàng",
    path: feF,
    className: "right__title row",
  },
  content: {
    title: {
      content: "thông tin hỗ trợ",
      className: "right__nextTitle row",
    },
    supports: {
      className: "right__list row",

      support: [
        // Step 1
        {
          step: {
            content: "Số hợp đồng",
            className: "stepR__title ",
          },
          className: "right__item",
          path: strCode,
          content:
            "Gồm số, không có chữ cái, bắt đầu bằng 20xxxxx, 150xxxxx, 53xxxxx. Khách hàng có thể xem số hợp đồng trên thẻ thanh toán/ hợp đồng trả góp hoặc liên hệ tổng đài FE Credit (028) 39 333 888 để được hỗ trợ kiểm tra số hợp đồng.",
        },
        // Step 2
        {
          step: {
            content: "Thông tin thanh toán",
            className: "stepR__title",
          },
          className: "right__item",
          path: strInfo,
          content:
            ": Có thể thanh toán nhiều hơn hoặc ít hơn số tiền cần thanh toán hàng tháng (tối thiểu 20.000đ, tối đa 50.000.000đ) và được thanh toán nhiều lần/ tháng.",
          underLine: "Số tiền thanh toán",
        },
      ],
    },
    warning:
      "Lưu ý: GIAO DỊCH THANH TOÁN TRỰC TUYẾN KHÔNG HỖ TRỢ HỦY GIAO DỊCH/CHUYỂN HỢP ĐỒNG. KHÁCH HÀNG VUI LÒNG KIỂM TRA KỸ THÔNG TIN TRƯỚC KHI THANH TOÁN.",
  },
};
