import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../sass/productdetail/_introduce.scss";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ClickSlider from "../clickSlider/ClickSlider";
import img from "../../assets/images/phone/iphone-12-mini-1-1-org.jpg";
import AddCartModal from "./AddCartModal";
import { toast } from "react-toastify";
import { toVND } from "../../utils/format";

//state Redux
import {
  selectCurrentUser,
  selectLoginStatus,
} from "../../features/auth/authSlice";

// api
import { province } from "../../apis/countryApi";
import { getProvince } from "../../apis/apiShipment";

const Introduce = ({ product }) => {
  // img arr
  const [imgArr, setImgArr] = useState([]);
  const [data, setData] = useState([]);

  //check login
  let history = useHistory();
  const status = useSelector(selectLoginStatus) || false;

  const [chooseOption, setChooseOption] = useState(0);
  // console.log(product?.productOptions);
  // const imgProducts = product.img;
  // console.log(imgProducts);
  // const options = product.options;
  // console.log(options);
  // const qtOptions = options.length;
  // console.log(options[0].option);
  const [addCart, setAddCart] = useState(false);
  // Location menu
  const [lShow, setLShow] = useState(false);
  const [locationI, setLocationI] = useState("");
  // Event handler
  const locationShow = () => {
    setLShow(!lShow);
  };
  const inputLocation = (location) => {
    setLocationI(location);
    setLShow(!lShow);
  };

  useEffect(() => {
    let arr = [];
    product?.productOptions.forEach((productOption) => {
      productOption?.colors.forEach((color) => {
        color?.images.forEach((img) => {
          arr.push(img?.urlImage);
        });
      });
    });
    // console.log(product?.productOptions);
    const sliceArr = arr.slice(0, 7);
    // console.log(sliceArr);
    setImgArr(sliceArr);
  }, [product]);

  useEffect(() => {
    // Get city list
    getProvince()
      .then((res) => {
        //console.log(res.data.data);
        let raw = res.data.data.map((v) => {
          return v.ProvinceName;
        });

        setData(raw);
      })
      .catch((e) => {
        console.log(`Can't get country data with ${e.message}`);
      });
    //
  }, []);

  //
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const clickAddCart = () => {
    if (status === false) {
      toast.info("Vui lòng đăng nhập trước khi đặt hàng", {
        position: "bottom-left",
      });
      history.push("/login");
      return;
    } else {
      setAddCart(true);
    }
  };

  //Open Video Product
  const [openVideo, setOpenVideo] = useState(false);
  const [idVideo, setIDVideo] = useState("");
  const youtube_parser = () => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = product?.video.match(regExp);
    setIDVideo(match && match[7].length == 11 ? match[7] : false);
    console.log(idVideo);
    console.log(product);
  };
  useEffect(() => {
    //youtube_parser();
  }, [product]);
  const handleCloseVideo = () => {
    setOpenVideo(false);
    setIDVideo("");
  };
  return (
    <div className=" row">
      {/* Left */}
      <div class="pd-left col l-8 m-12 c-12 ">
        <ClickSlider imgArr={imgArr} />
        &nbsp;
        {/* Video */}
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={openVideo}
          videoId={idVideo}
          onClose={handleCloseVideo}
        /> */}
        {/* Left */}
        <div class="product_introduce_expand row flex">
          <div class="product_introduce_expand_item l-2 m-2 c-2 flex ">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-medal text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">Điểm nổi bật</span>
          </div>
          <div
            class="product_introduce_expand_item l-2 m-2 c-2 flex"
            onClick={() => setOpenVideo(true)}
          >
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-circle-play text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">Video</span>
          </div>
          <div class="product_introduce_expand_item l-2 m-2 c-2 flex">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-box-open text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">Mở hộp</span>
          </div>
          <div class="product_introduce_expand_item l-2 m-2 c-2 flex">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-camera text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">
              Chụp từ camera
            </span>
          </div>
          <div class="product_introduce_expand_item l-2 m-2 c-2 flex">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-arrows-spin text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">Hình 360 độ</span>
          </div>
          <div class="product_introduce_expand_item l-2 m-2 c-2 flex">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-file-signature text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">
              Thông số kỹ thuật
            </span>
          </div>
          {/* <div class="product_introduce_expand_item flex">
            <div class="expand_item_logo flex">
              <i class="fa-solid fa-circle-info text-3xl"></i>
            </div>
            <span class="product_introduce_expand_item_text">
              Thông tin sản phẩm
            </span>
          </div> */}
        </div>
      </div>

      {/* Right */}
      <div class="pd-right col l-4 m-12 c-12 ">
        <div class="product_introduce_option margin_bottom_10">
          {product?.productOptions.map((v, i) => {
            {
              // console.log(v);
            }
            return (
              <div
                onClick={() => setChooseOption(i)}
                key={i}
                className={`product_introduce_option_item border ${
                  chooseOption == i ? "active" : ""
                }`}
              >
                {v?.productOptionName}
              </div>
            );
          })}
        </div>

        <div class="product_introduce_price_location ">
          <div>
            <span>
              Giá tại
              <Link
                class="product_introduce_location mg_r_5"
                onClick={locationShow}
              >
                {" "}
                {locationI || "Hồ Chí Minh"}
              </Link>
              <i class="product_introduce_price_icon fa-solid fa-angle-down"></i>
            </span>
          </div>
          <ul className={`top__menu ${lShow ? "show" : ""}`}>
            {data.map((v, i) => {
              return (
                <li
                  key={i}
                  onClick={() => inputLocation(v)}
                  className="menu__item"
                >
                  {v}
                </li>
              );
            })}
          </ul>
        </div>
        <div class="product_introduce_price">
          {toVND(product?.productOptions[chooseOption]?.price)} &nbsp;
          <span className="product_introduce_price_original">
            <s>{toVND(product?.productOptions[chooseOption]?.price * 1.1)}</s> -
            10%
            {/* {product?.productOptions[chooseOption]?.promotion * 1.1}% */}
          </span>
        </div>
        <div class="product_introduce_promotion border">
          <div class="product_introduce_promotion_title">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                padding: "10px 0 0 0 ",
              }}
            >
              Khuyến mãi
            </p>
            <div className="line"></div>
            <p style={{ padding: "0 0 5px 0", color: "#0056e0" }}>
              Giá và khuyến mãi áp dụng đến hết 23:59 &nbsp;
              <b>17/12/2022</b>
            </p>
          </div>
          <div class="product_introduce_promotion_list">
            <div class="product_introduce_promotion_item">
              <div class="promotion_circle">
                <span style={{ color: "#fff", fontSize: "10px" }}>1</span>
              </div>
              <span style={{ width: "95%", display: "block" }}>
                Trả góp 0% thẻ tín dụng
              </span>
            </div>
            <div class="product_introduce_promotion_item">
              <div class="promotion_circle">
                <span style={{ color: "#fff", fontSize: "10px" }}>2</span>
              </div>
              <span style={{ width: "95%", display: "block" }}>
                Giảm giá 40% gói Bảo hành mở rộng Sasung Care + 12 tháng
              </span>
            </div>
            <div class="product_introduce_promotion_item">
              <div class="promotion_circle">
                <span style={{ color: "#fff", fontSize: "10px" }}>3</span>
              </div>
              <span style={{ width: "95%", display: "block" }}>
                Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ{" "}
              </span>
            </div>
            <div class="product_introduce_promotion_item">
              <div class="promotion_circle">
                <span style={{ color: "#fff", fontSize: "10px" }}>4</span>
              </div>
              <span style={{ width: "95%", display: "block" }}>
                Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ
                trở lên khi thanh toán qua ví Moca trên ứng dụng Grab
              </span>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="product_introduce_payment">
          <h1 class="product_introduce_payment_title">Ưu đãi khi thanh toán</h1>
          <div class="product_introduce_payment_main">
            <div class="product_introduce_payment_tpbank border">
              <div class="">
                <input type="radio" name="bank_option" class="checkbox-round" />
                <label style={{ color: "#CC33FF", paddingLeft: "5px" }}>
                  TPBank{" "}
                </label>
              </div>
              <p style={{ padding: "5px 0" }}>Giảm 500.000đ</p>
              <p>Sản phẩm từ 8tr</p>
            </div>
            <div class="product_introduce_payment_eximbank border">
              <div class="">
                <input type="radio" name="bank_option" class="checkbox-round" />
                <label style={{ color: "#3366CC", paddingLeft: "5px" }}>
                  Eximbank
                </label>
              </div>
              <p style={{ padding: "5px 0" }}>Giảm 500.000đ</p>
              <p>Sản phẩm từ 5tr</p>
            </div>
          </div>
        </div>
        <button
          class="product_introduce_btn_payment btn"
          onClick={clickAddCart}
        >
          MUA NGAY
        </button>
        <div class="product_introduce_payment_expand">
          <button class="product_introduce_btn_payment_blue">
            Mua trả góp 0% <br /> duyệt hồ sơ trong 5 phút
          </button>
          <button class="product_introduce_btn_payment_blue">
            Trả góp qua thẻ <br /> Visa,Mastercard,JCV,Amex
          </button>
        </div>
        <div class="flex_center">
          <span>Gọi đặt mua</span>
          <Link class="hotline" to="#">
            1800 1060
          </Link>
          <span>(7:30 - 22:00)</span>
        </div>
      </div>
      {addCart && (
        <AddCartModal
          closeModal={setAddCart}
          chooseOption={chooseOption}
          product={product}
        />
      )}
    </div>
  );
};

export default Introduce;
