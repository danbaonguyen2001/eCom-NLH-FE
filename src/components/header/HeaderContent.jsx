import React, { useState, useEffect, useCallback, useMemo } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "../../assets/css/layout/header.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import { toVND } from "../../utils/format";
import debounce from "awesome-debounce-promise";

// img
// top
import header from "../../assets/images/header/header.png";
import location from "../../assets/images/header/location.png";
import searchIcon from "../../assets/images/header/searchIcon.png";
import cartI from "../../assets/images/header/cartI.png";
import orderI from "../../assets/images/header/orderI.png";
import userI from "../../assets/images/header/userI.png";
import newsI from "../../assets/images/header/newsI.png";
// main
import phone from "../../assets/images/header/Phone.svg";
import tablet from "../../assets/images/header/Tablet.svg";
import laptop from "../../assets/images/header/Laptop.svg";
import smart from "../../assets/images/header/SmartWatch.svg";
import watch from "../../assets/images/header/Watch.svg";
import old from "../../assets/images/header/Old.svg";
import sim from "../../assets/images/header/Sim.svg";
import pc from "../../assets/images/header/PC.svg";
import access from "../../assets/images/header/Headphone.svg";
import another from "../../assets/images/header/another.svg";

// api
import { province } from "../../apis/countryApi";

// selector
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectLoginStatus,
} from "../../features/auth/authSlice";
import productHandler from "../../features/product/function";

import { payOnlineData } from "../tienich/mockdata";
import UserMenu from "./UserMenu";
import CartQuantity from "./CartQuantity";
import cartHandler from "../../features/cart/function";

import useConstant from "use-constant";

//
//
const defaultAvt =
  "data:image/png;base64,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";
const HeaderContent = () => {
  const dispatch = useDispatch();

  const [isfilter, setIsFilter] = useState(false);
  const [wordEntered, setWordEntered] = useState("");
  const [keyword, setKeyword] = useState("");
  const [listProducts, setListProducts] = useState();
  const [params, setParams] = useState({
    keyword: "",
    manufacturerId: 0,
    categoryId: 0,
    subCategoryId: 0,
    page: 1,
    size: 20,
  });
  // Search handle

  const fetchListProductApi = (text) =>
    productHandler.getProductList({
      page: 1,
      size: 10,
      keyword: text,
    });
  const debounceFetch = useConstant(() => debounce(fetchListProductApi, 500));
  // debounce
  const handleFilter = async (event) => {
    const searchWord = event.target.value;

    if (searchWord === "") {
      setIsFilter(false);
      setWordEntered(searchWord);
    } else {
      setKeyword(searchWord);
      setWordEntered(searchWord);
      setIsFilter(true);
      setParams({ ...params, [event.target.name]: event.target.value });
      // debounceFetch();\

      try {
        const res = await debounceFetch(searchWord);
        setListProducts(res?.data?.products);
        // set
      } catch (e) {
        console.log(e);
      }
    }
    //console.log(searchWord);
  };

  const clearInput = () => {
    setListProducts([]);
    setWordEntered("");
    setIsFilter(false);
    setKeyword("");
    // setParams({ ...params, ["keyword"]: "" });
  };
  // check User login on startup
  const [userLogin, setUserLogin] = useState({
    status: false,
    user: {
      avt: defaultAvt,
      name: "",
    },
  });
  // Menu show
  const [menuShow, setMenuShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  // style menu
  const styleUserMenu = menuShow
    ? {
        pointerEvents: "all",
      }
    : {
        pointerEvents: "none",
        opacity: 0,
      };
  // selector
  const { name, avatar } = useSelector(selectCurrentUser);
  const userInfo = useSelector(selectCurrentUser);

  const status = useSelector(selectLoginStatus) || false;

  const cart = useSelector((state) => state.cart);
  // const [cartInfo, setCartInfo] = useState({
  //   quantity: 0,
  //   total: 0,
  //   count: 0,
  // });

  const isAuthenticated = useSelector(selectLoginStatus);
  useMemo(() => {
    if (isAuthenticated ) {
      cartHandler.getCurrentCart();
    }
  }, [isAuthenticated]);

  // check
  useEffect(() => {
    console.log(userInfo);
    // check auth
    if (status) {
      setUserLogin({
        ...userLogin,
        status,
        user: {
          name,
          avt: avatar || defaultAvt,
          status,
        },
      });
    } else {
      setUserLogin({
        ...userLogin,
        status,
        user: {
          avt: defaultAvt,
          name: "",
        },
      });
    }
  }, [avatar, status, userInfo]);

  //
  // Begin content
  const [data, setData] = useState([]);
  // Location menu
  const [lShow, setLShow] = useState(false);
  const [locationI, setLocationI] = useState("");
  const locationShow = () => {
    setLShow(!lShow);
  };
  const inputLocation = (location) => {
    setLocationI(location);
    setLShow(!lShow);
  };
  // Handle unAuthenticated events
  const checkAuthen = () => {
    if (status == false) {
      toast.warning("Vui lòng đăng nhập để thực hiện thao tác", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        toastId: 101,
      });
    }
  };

  useEffect(() => {
    // Get city list
    province()
      .then((data) => {
        // console.log(data.data.data);
        let raw = data.data.data.map((v) => {
          return v.ProvinceName;
        });

        setData(raw);
      })
      .catch((e) => {
        console.log(`Can't get country data with ${e.message}`);
      });
  }, []);
  return (
    <div className="headerContainer grid wide">
      <div className="headerInner row">
        {/* New  */}
        {/* Top */}
        <div className="headerInner__top  l-12 m-10 c-10  ">
          {/* Logo */}
          <div className="top__logo">
            <Link to="/">
              <LazyLoadImage style={{ width: "200px" }} src={header} />
            </Link>
          </div>
          {/* Location */}
          <div className={`top__location`}>
            <div className="location__item" onClick={locationShow}>
              {/* <LazyLoadImage src={location} /> */}
              <span className="location__text">
                {locationI || "Hồ Chí Minh"}
              </span>
              <div>
                <i className="fa-solid fa-location-pin"></i>
              </div>
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
          {/* Search */}
          <div className="top__search">
            <div className="search__form" action="/" method="GET">
              <input
                className="search__control "
                type="text"
                name="keyword"
                value={wordEntered}
                placeholder="Bạn tìm gì ..."
                onChange={handleFilter}
              />
              <button className="search__control mg_r_5">
                {/* Icon */}
                {isfilter === false ? (
                  <LazyLoadImage src={searchIcon} />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </button>
            </div>
            {listProducts?.length != 0 && isfilter && (
              <div className="dataResult" onMouseLeave={clearInput}>
                <h3 className="dataResult__header">Sản phẩm gợi ý</h3>
                &nbsp;
                {listProducts?.slice(0, 15).map((value, key) => {
                  return (
                    <Link
                      to={{
                        pathname: `/productdetail/${value?.name.replaceAll(
                          " ",
                          "-"
                        )}`,
                        state: { productId: value?._id },
                      }}
                      className="dataItem"
                      onClick={clearInput}
                      key={key}
                    >
                      <div className="dataResult__item">
                        <div className="dataResult__img">
                          <img
                            className="dataResult__image"
                            src={value?.image}
                            alt={value?.name}
                          />
                        </div>
                        <div className="dataResult__detail">
                          <h3 className="pd_b_5">{value?.name} </h3>
                          <span className="price--original">
                            {toVND(value?.price)} &nbsp;
                          </span>
                          <s className="price--marke">
                            {toVND(value?.price * 1.1)}
                          </s>{" "}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          &nbsp;
          {/* Cart */}
          <Link to={status ? `/cart` : "/login"} onClick={checkAuthen}>
            <div
              onMouseEnter={() => setCartShow(true)}
              onMouseLeave={() => setCartShow(false)}
              style={{ position: "relative" }}
              className="top__button top__cart"
            >
              <LazyLoadImage
                style={cartShow ? { display: "none" } : {}}
                src={cartI}
              />
              &nbsp;
              <div className="cart__text">
                {cartShow ? (
                  <div className="cart__info">
                    {status ? (
                      <div>
                        <h6>Số lượng: {cart?.quantity}</h6>
                        <h6>Loại: {cart?.count}</h6>
                        <h6>{toVND(cart?.total)}</h6>
                      </div>
                    ) : (
                      <h5>Xác thực ngay</h5>
                    )}
                  </div>
                ) : (
                  "Giỏ hàng"
                )}
              </div>
              &nbsp;
              <span>
                {status && !cartShow ? <CartQuantity cartInfo={cart} /> : ""}
                {/* {console.log(cartInfo)} */}
              </span>
            </div>
          </Link>
          {/* Order */}
          <Link
            to={status ? "/purchasehistory" : "/login"}
            onClick={checkAuthen}
          >
            <div className="top__button top__order">
              <LazyLoadImage src={orderI} />
              <div className="order__text">Đơn hàng của bạn</div>
            </div>
          </Link>
          {/* User */}
          <Link
            onMouseEnter={() => setMenuShow(true)}
            onMouseLeave={() => setMenuShow(false)}
            to="#"
            style={{ position: "relative" }}
            className="top__userOuter"
          >
            <div className="top__button top__user">
              <div className="user__avt">
                <LazyLoadImage
                  className="avt__img"
                  src={
                    userLogin.user.avt
                    // "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/292242966_1482264275553433_8114238098341168744_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nB-7IyhgTXkAX8Uq5Nz&tn=Bx4RGCaSHfjfnG59&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT99iDAYOyo2PZwGJiB3Kc2cBMG9hsKyMj5gyOFt8LOMXA&oe=62EE451E"
                  }
                />
              </div>
              {/* {userLogin.status ? (
                <span style={{ fontWeight: "bold" }}>
                  {userLogin.user.name.split(" ")[0].slice(0, 5)}
                </span>
              ) : (
                <LazyLoadImage className="user__icon" src={userI} />
              )} */}
              <div className="user__name">
                <LazyLoadImage className="user__icon" src={userI} />
              </div>
            </div>
            <UserMenu
              style={styleUserMenu}
              isLogin={userLogin.status}
              user={userInfo}
            />
          </Link>
          {/* News */}
          <div className="top__news m-0 c-0">
            <Link to="/GameApp">
              <div className="news__game news__button">
                {/* Icon */}

                {/* <LazyLoadImage src={newsI} /> */}

                {/* <LazyLoadImage src={Gameapp} /> */}

                <p>Game App</p>
              </div>
            </Link>
            &nbsp;
            <Link to="/hoidap">
              <div className="news__aa news__button">
                <p>Hỏi đáp</p>
              </div>
            </Link>
            &nbsp;
            <Link to="/news24h">
              <div className="news__24h news__button">
                <p>Công nghệ</p>

                {/* <LazyLoadImage src={News24h} /> */}
              </div>
            </Link>
          </div>
        </div>

        {/* Main */}

        <div className="headerInner__main wide ">
          <div className="main__left">
            {/* Main - Phone */}
            <Link to="/phone">
              <div className="main__phone main__button main__icon">
                {/* <LazyLoadImage src={phone} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                &nbsp; Điện thoại
              </div>
            </Link>
            {/* Main - Tablet */}
            <Link to="/tablet">
              <div className="main__tablet main__button main__icon">
                {/* <LazyLoadImage src={tablet} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-solid fa-tablet-screen-button"></i>
                </div>
                &nbsp; Tablet
              </div>
            </Link>
            {/* Main - Laptop */}
            <Link to="/laptop">
              <div className="main__laptop main__button main__icon">
                {/* <LazyLoadImage src={laptop} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-solid fa-laptop"></i>
                </div>
                &nbsp; Laptop
              </div>
            </Link>
            {/* Main - Access */}
            <div className="main__access main__button main__icon">
              <Link to="/accessories" className="flex_center">
                {/* <LazyLoadImage src={access} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-regular fa-keyboard"></i>
                </div>
                &nbsp;
                <div>Phụ kiện</div>
              </Link>
              <div className="access__menu">
                <div className="item-child ">
                  <strong>Phụ kiện di động</strong>
                  <Link to="/sac-dtdd">
                    <h3>Sạc dự phòng</h3>
                  </Link>
                  <Link to="/sac-cap">
                    <h3>Sạc, cáp</h3>
                  </Link>
                  <Link to="/op-lung-flipcover">
                    <h3>Ốp lưng điện thoại</h3>
                  </Link>
                  <Link to="/op-lung-may-tinh-bang">
                    <h3>Ốp lưng máy tính bảng</h3>
                  </Link>
                  <Link to="/mieng-dan-man-hinh">
                    <h3>Miếng dán màn hình</h3>
                  </Link>
                  <Link to="/gay-tu-suong">
                    <h3>Gậy chụp ảnh, Gimbal</h3>
                  </Link>
                  <Link to="/gia-do-dien-thoai">
                    <h3>Giá đỡ điện thoại</h3>
                  </Link>
                  <Link to="/de-moc-dien-thoai">
                    <h3>Đế, móc điện thoại</h3>
                  </Link>
                  <Link to="/tui-chong-nuoc">
                    <h3>Túi chống nước</h3>
                  </Link>
                  <Link to="/tui-dung-airpods">
                    <h3>Túi đựng AirPods</h3>
                  </Link>
                  <Link to="/airtag">
                    <h3>AirTag</h3>
                  </Link>
                  <Link to="/phu-kien-thong-minh">
                    <h3>Phụ kiện Tablet</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Phụ kiện laptop</strong>
                  <Link to="/chuot-ban-phim">
                    <h3>Chuột, bàn phím</h3>
                  </Link>
                  <Link to="/thiet-bi-mang">
                    <h3>Thiết bị mạng</h3>
                  </Link>
                  <Link to="/camera-giam-sat">
                    <h3>Camera, webcam</h3>
                  </Link>
                  <Link to="/tui-chong-soc">
                    <h3>Balo, túi chống sốc</h3>
                  </Link>
                  <Link to="/gia-do-laptop">
                    <h3>Giá đỡ laptop</h3>
                  </Link>
                  <Link to="/phan-mem">
                    <h3>Phần mềm</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Thiết bị nhà thông minh</strong>
                  <Link to="/khoa-dien-tu">
                    <h3>Khóa điện tử</h3>
                  </Link>
                  <Link to="/android-tv-box">
                    <h3>TV Box</h3>
                  </Link>
                  <Link to="/o-cam-thong-minh">
                    <h3>Ổ cắm, bóng đèn thông minh</h3>
                  </Link>
                  <Link to="/may-chieu">
                    <h3>Máy chiếu</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Thương hiệu hàng đầu</strong>
                  <Link to="/phu-kien/apple">
                    <h3>Apple</h3>
                  </Link>
                  <Link to="/phu-kien/samsung">
                    <h3>Samsung</h3>
                  </Link>
                  <Link to="/phu-kien/sony">
                    <h3>Sony</h3>
                  </Link>
                  <Link to="/phu-kien/jbl">
                    <h3>JBL</h3>
                  </Link>
                  <Link to="/phu-kien/xiaomi">
                    <h3>Xiaomi</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Thiết bị âm thanh</strong>
                  <Link to="/tai-nghe">
                    <h3>Tai nghe</h3>
                  </Link>
                  <Link to="/loa-laptop">
                    <h3>Loa</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Thiết bị lưu trữ</strong>
                  <Link to="/o-cung-di-dong">
                    <h3>Ổ cứng di động</h3>
                  </Link>
                  <Link to="/the-nho-dien-thoai">
                    <h3>Thẻ nhớ</h3>
                  </Link>
                  <Link to="/usb">
                    <h3>USB</h3>
                  </Link>
                </div>
                <div className="item-child ">
                  <strong>Phụ kiện khác</strong>
                  <Link to="/phu-kien-oto">
                    <h3>Phụ kiện ô tô</h3>
                  </Link>
                  <Link to="/may-tinh-cam-tay">
                    <h3>Máy tính cầm tay</h3>
                  </Link>
                  <Link to="/quat-mini">
                    <h3>Quạt mini</h3>
                  </Link>
                  <Link to="/pin">
                    <h3>Pin tiểu</h3>
                  </Link>
                </div>
              </div>
            </div>
            {/* Main - Smart */}
            {/* <div className="main__smart main__button main__icon">
              <Link to="/smart-watch">
                <LazyLoadImage src={smart} />
              </Link>
            </div> */}
            {/* Main - Watch */}
            {/* <Link to="/Watches">
              <div className="main__watch main__button main__icon">
                <LazyLoadImage src={watch} />
              </div>
            </Link> */}

            {/* Main - Pc */}
            {/* <div className="main__pc  main__button main__icon">
              <Link to="/PCPrint">
                <LazyLoadImage src={pc} />
              </Link>

              <div className="access__menu">
                <div className="item-child">
                  <strong>Máy in</strong>
                  <Link to="PCPrint">
                    <h3>Máy in</h3>
                  </Link>
                  <Link to="PCPrint">
                    <h3>Mực in</h3>
                  </Link>
                  <Link to="PCPrint">
                    <h3>Màn hình máy tính</h3>
                  </Link>
                  <Link to="PCPrint">
                    <h3>Máy tính để bàn</h3>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Main - Old */}
            <Link to="/mainproductold">
              <div className="main__old main__button main__box ">
                {/* <LazyLoadImage src={old} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                &nbsp; Máy cũ
              </div>
            </Link>
            {/* Main - Sim */}
            <Link to="/sim-so-dep">
              <div className="main__sim main__button main__box">
                {/* <LazyLoadImage src={sim} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-solid fa-ticket-simple"></i>
                </div>
                &nbsp; Sim,thẻ cào
              </div>
            </Link>
            {/* Main - Another */}
            <div className="main__another .main__pc main__button main__box">
              <Link to="/" className="flex_center">
                {/* <LazyLoadImage src={another} /> */}
                <div style={{ fontSize: "24px" }}>
                  <i className="fa-brands fa-usps"></i>
                </div>
                &nbsp; Tiện ích
              </Link>
              <div className="access__menu">
                <div className="item-child">
                  <strong>Tiện ích khác</strong>
                  {payOnlineData.map((v, i) => {
                    return (
                      <Link key={i} to={v.link}>
                        <h3>{v.content}</h3>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Tablet-Phone */}
      </div>
    </div>
  );
};

export default HeaderContent;
