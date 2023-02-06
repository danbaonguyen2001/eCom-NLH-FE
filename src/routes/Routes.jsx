import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import OrderSuccess from "../components/cart/OrderSuccess";
import ProductDetail from "../pages/ProductDetail";
import PurchaseHistory from "../pages/PurchaseHistory";
import ConvenientService from "../pages/ConvenientService";

import PCPrint from "../pages/PCPrint";
import Printer from "../components/PCPrint/Options/Printer";
import Ink from "../components/PCPrint/Options/Ink";
import Screen from "../components/PCPrint/Options/Screen";
import PC from "../components/PCPrint/Options/PC";
import Watches from "../pages/Watches";

import Tablet from "../pages/Tablet";
import Laptop from "../pages/Laptop";
import MainProductOld from "../components/ProductOld/MainProductOld";

//Trang hỏi đáp - News24h - Gameapp
import Hoidap from "../components/News-Hoidap-GameApp/Hoidap";
import News24h from "../components/News-Hoidap-GameApp/News24h";
import Gameapp from "../components/News-Hoidap-GameApp/Gameapp";

import RegisterCode from "../pages/RegisterCode";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import Register from "../components/fakeLogin/Register";

// import Login from "../components/fakeLogin/Login";

// PayOrder
import PayOrder from "../components/PayOrder";

import Phone from "../pages/Phone";

import LayoutAccessories from "../components/accessories/LayoutAccessories";
import BackupBatterySub from "../components/accessories/sub/MoileAccessoriesSub/BackupBatterySub";
import CableChargeSub from "../components/accessories/sub/MoileAccessoriesSub/CableChargeSub";
import PhoneCaseSub from "../components/accessories/sub/MoileAccessoriesSub/PhoneCaseSub";
import TabletCaseSub from "../components/accessories/sub/MoileAccessoriesSub/TabletCaseSub";
import ProtectorScreenSub from "../components/accessories/sub/MoileAccessoriesSub/ProtectorScreenSub";
import SelfieSub from "../components/accessories/sub/MoileAccessoriesSub/SelfieSub";
import ShelfPhoneSub from "../components/accessories/sub/MoileAccessoriesSub/ShelfPhoneSub";
import PhoneHookSub from "../components/accessories/sub/MoileAccessoriesSub/PhoneHookSub";
import WaterproofBagSub from "../components/accessories/sub/MoileAccessoriesSub/WaterproofBagSub";
import AirpodBagSub from "../components/accessories/sub/MoileAccessoriesSub/AirpodBagSub";
import AirTagSub from "../components/accessories/sub/MoileAccessoriesSub/AirTagSub";
import TabletAccessoriesSub from "../components/accessories/sub/MoileAccessoriesSub/TabletAccessoriesSub";
import KeyBoardSub from "../components/accessories/sub/LaptopAccessoriesSub/KeyBoardSub";
import ShelfLaptopSub from "../components/accessories/sub/LaptopAccessoriesSub/ShelfLaptopSub";
import NetworkDevicesSub from "../components/accessories/sub/LaptopAccessoriesSub/NetworkDevicesSub";
import CameraSub from "../components/accessories/sub/LaptopAccessoriesSub/CameraSub";
import ProtectorBagSub from "../components/accessories/sub/LaptopAccessoriesSub/ProtectorBagSub";
import SoftwareSub from "../components/accessories/sub/LaptopAccessoriesSub/SoftwareSub";
import HeadphoneSub from "../components/accessories/sub/MusicDevicesSub/HeadphoneSub";
import SpeakerSub from "../components/accessories/sub/MusicDevicesSub/SpeakerSub";
import SmartLockSub from "../components/accessories/sub/SmartHomeSub/SmartLockSub";
import TvBoxSub from "../components/accessories/sub/SmartHomeSub/TvBoxSub";
import SmartLightSub from "../components/accessories/sub/SmartHomeSub/SmartLightSub";
import ProjectorSub from "../components/accessories/sub/SmartHomeSub/ProjectorSub";
import HddSub from "../components/accessories/sub/StorageDevicesSub/HddSub";
import MemoryCardSub from "../components/accessories/sub/StorageDevicesSub/MemoryCardSub";
import UsbSub from "../components/accessories/sub/StorageDevicesSub/UsbSub";
import CalculatorSub from "../components/accessories/sub/OtherAccessoriesSub/CalculatorSub";
import OtoAccessoriesSub from "../components/accessories/sub/OtherAccessoriesSub/OtoAccessoriesSub";
import PlanMiniSub from "../components/accessories/sub/OtherAccessoriesSub/PlanMiniSub";
import PrimaryBatterySub from "../components/accessories/sub/OtherAccessoriesSub/PrimaryBatterySub";
import AppleAccessoriesSub from "../components/accessories/sub/TopBrandSub/AppleAccessoriesSub";
import SamsungAccessoriesSub from "../components/accessories/sub/TopBrandSub/SamsungAccessoriesSub";
import JBLAccessoriesSub from "../components/accessories/sub/TopBrandSub/JBLAccessoriesSub";
import XiaomiAccessoriesSub from "../components/accessories/sub/TopBrandSub/XiaomiAccessoriesSub";
import SonyAccessoriesSub from "../components/accessories/sub/TopBrandSub/SonyAccessoriesSub";

// Thông tin User
import UserInFor from "../components/UserInFor";

// page smart watch
import LayoutSmartWatch from "../components/smartWatch/LayoutSmartWatch";
import LayoutDealSmartWatch from "../components/smartWatch/DealSmartWatch/LayoutDealSmartWatch";
import LayoutAppleWatch from "../components/smartWatch/AppleWatch/LayoutAppleWatch";
import LayoutGalaxyWatch from "../components/smartWatch/GalaxyWatch/LayoutGalaxyWatch";
import LayoutChildrenSmartWatch from "../components/smartWatch/ChildrenSmartWatch/LayoutChildrenSmartWatch";
import LayoutFashionSmartWatch from "../components/smartWatch/FashionSmartWatch/LayoutFashioSmartWatch";
import LayoutSportWatch from "../components/smartWatch/SportWatch/LayoutSportWatch";
import LayoutSubSmartWatch from "../components/smartWatch/UtilitySmartWatch/LayoutSubSmartWatch";
import LayoutWatchChain from "../components/smartWatch/WatchChain/LayoutWatchChain";
import LayoutXiaomiSmartWatch from "../components/smartWatch/XiaomiSmartWatch/LayoutXiaomiSmartWatch";
import Order from "../components/mockOrder/Order";

// OAuth
import OauthComponent from "../components/oauth/OauthComponent";

// watch
import WatchForMen from "../components/Watches/ChildPage/WatchForMen";
import ShockWatches from "../components/Watches/ChildPage/ShockWatches";
import WatchForChildren from "../components/Watches/ChildPage/WatchForChildren";
import LineStrapProduct from "../components/Watches/ChildPage/LineStrapProduct";

// sim card
import LayoutSimCard from "../components/simCard/LayoutSimCard";
import LayoutVinaphoneSimCard from "../components/simCard/SubSimCard/LayoutVinaphoneSimCard";
import RedirectRoutes from "./redirect/RedirectRoutes";
import UnAuthOrderHistory from "../components/purchasehistory/UnAuthOrderHistory";
import WatchForWomen from "../components/Watches/ChildPage/WatchForWomen";
import WatchForCouple from "../components/Watches/ChildPage/WatchForCouple";
import CompareProducts from "../components/CompareProducts";

import ForgotPassword from "../pages/ForgotPassword";
import LoadingWrapper from "../components/LoadingWrapper";
import ErrorBoundary from "../utils/ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <LoadingWrapper>
              <Home />
            </LoadingWrapper>
          )}
        />
        {/* ROUTES */}
        {/*ROUTES - PRIVATE*/}
        {/* Giỏ hàng */}
        <PrivateRoute path="/cart" exact>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path="/ordersuccess" exact>
          <OrderSuccess />
        </PrivateRoute>
        {/* Lịch sử các đơn hàng */}
        <Route path={["/purchasehistory", "/purchasehistory/"]} exact>
          <Redirect to="/purchasehistory/product" />
        </Route>
        <PrivateRoute path="/purchasehistory*" exact>
          <PurchaseHistory />
        </PrivateRoute>

        {/* ROUTES - ONLY  PUBLIC*/}
        {/* Login, Register, RegisterCode, Phone*/}
        <PrivateRoute path="/register" exact onlyPublic>
          <Register />
        </PrivateRoute>

        <PrivateRoute
          path={["/api/auth/verify-email/:token", "/registerCode/:token"]}
          exact
          onlyPublic
        >
          <RegisterCode />
        </PrivateRoute>
        <PrivateRoute path="/password_reset*" exact onlyPublic>
          <ForgotPassword />
        </PrivateRoute>
        <PrivateRoute path="/login" exact onlyPublic>
          <Login />
        </PrivateRoute>

        {/* ROUTES - NORMAL */}
        {/* Chi tiet san pham */}
        <Route
          path="/productdetail/:productname"
          exact
          component={ProductDetail}
        />
        {/* <Route path="/productdetail" exact component={ProductDetail} /> */}

        {/* ROUTES -  NON PROCESS ROUTES */}
        {/* Lịch sử các đơn hàng  chưa xác thực*/}
        <Route path="/lich-su-don-hang" exact component={UnAuthOrderHistory} />

        {/* Tien ich */}
        <Route path="/tien-ich" exact>
          <Redirect to={"/tien-ich/thanh-toan-tra-gop"} />
        </Route>

        <Route path="/tien-ich*" exact component={ConvenientService} />
        {/* pc print */}
        <Route path="/PCPrint" exact component={PCPrint} />
        <Route path="/Printer" exact component={Printer} />
        <Route path="/Ink" exact component={Ink} />
        <Route path="/Screen" exact component={Screen} />
        <Route path="/PC" exact component={PC} />

        {/* Watch */}
        <Route path="/Watches" exact component={Watches} />
        <Route path="/dong-ho-danh-cho-nam" exact component={WatchForMen} />
        <Route path="/dong-ho-danh-cho-nu" exact component={WatchForWomen} />
        <Route path="/dong-ho-cap-doi" exact component={WatchForCouple} />
        <Route path="/dong-ho-tre-em" exact component={WatchForChildren} />
        <Route path="/dong-ho-gia-soc" exact component={ShockWatches} />
        <Route path="/day-dong-ho" exact component={LineStrapProduct} />

        {/* Tablet-Laptop-ProductOld-News24h-GameApp */}
        <Route path="/tablet" exact component={Tablet} />
        <Route path="/laptop" exact component={Laptop} />
        <Route path="/mainproductold*" exact component={MainProductOld} />
        <Route path="/news24h" exact component={News24h} />
        <Route path="/GameApp" exact component={Gameapp} />
        <Route path="/hoidap" exact component={Hoidap} />

        <Route path="/phone" exact component={Phone} />

        {/* Phu kien */}
        <Route path="/accessories" exact component={LayoutAccessories} />
        <Route path="/sac-dtdd" exact component={BackupBatterySub} />
        <Route path="/sac-cap" exact component={CableChargeSub} />
        <Route path="/op-lung-flipcover" exact component={PhoneCaseSub} />
        <Route path="/op-lung-may-tinh-bang" exact component={TabletCaseSub} />
        <Route
          path="/mieng-dan-man-hinh"
          exact
          component={ProtectorScreenSub}
        />
        <Route path="/gay-tu-suong" exact component={SelfieSub} />
        <Route path="/gia-do-dien-thoai" exact component={ShelfPhoneSub} />
        <Route path="/gia-do-laptop" exact component={ShelfLaptopSub} />
        <Route path="/de-moc-dien-thoai" exact component={PhoneHookSub} />
        <Route path="/tui-chong-nuoc" exact component={WaterproofBagSub} />
        <Route path="/tui-dung-airpods" exact component={AirpodBagSub} />
        <Route path="/airtag" exact component={AirTagSub} />
        <Route
          path="/phu-kien-thong-minh"
          exact
          component={TabletAccessoriesSub}
        />
        <Route path="/chuot-ban-phim" exact component={KeyBoardSub} />
        <Route path="/thiet-bi-mang" exact component={NetworkDevicesSub} />
        <Route path="/camera-giam-sat" exact component={CameraSub} />
        <Route path="/tui-chong-soc" exact component={ProtectorBagSub} />
        <Route path="/phan-mem" exact component={SoftwareSub} />
        <Route path="/tai-nghe" exact component={HeadphoneSub} />
        <Route path="/loa-laptop" exact component={SpeakerSub} />
        <Route path="/Khoa-dien-tu" exact component={SmartLockSub} />
        <Route path="/android-tv-box" exact component={TvBoxSub} />
        <Route path="/o-cam-thong-minh" exact component={SmartLightSub} />
        <Route path="/may-chieu" exact component={ProjectorSub} />
        <Route path="/o-cung-di-dong" exact component={HddSub} />
        <Route path="/the-nho-dien-thoai" exact component={MemoryCardSub} />
        <Route path="/usb" exact component={UsbSub} />
        <Route path="/may-tinh-cam-tay" exact component={CalculatorSub} />
        <Route path="/phu-kien-oto" exact component={OtoAccessoriesSub} />
        <Route path="/quat-mini" exact component={PlanMiniSub} />
        <Route path="/pin" exact component={PrimaryBatterySub} />
        <Route path="/phu-kien/apple" exact component={AppleAccessoriesSub} />
        <Route
          path="/phu-kien/samsung"
          exact
          component={SamsungAccessoriesSub}
        />
        <Route path="/phu-kien/jbl" exact component={JBLAccessoriesSub} />
        <Route path="/phu-kien/xiaomi" exact component={XiaomiAccessoriesSub} />
        <Route path="/phu-kien/sony" exact component={SonyAccessoriesSub} />

        {/* Smart watch */}
        <Route path="/smart-watch" exact component={LayoutSmartWatch} />
        <Route
          path="/dong-ho-thong-minh-gia-soc"
          exact
          component={LayoutDealSmartWatch}
        />
        <Route
          path="/dong-ho-thong-minh-apple-watch-series-7"
          exact
          component={LayoutAppleWatch}
        />
        <Route
          path="/dong-ho-thong-minh-galaxy-watch-4"
          exact
          component={LayoutGalaxyWatch}
        />
        <Route
          path="/dong-ho-thong-minh-thoi-trang-sanh-dieu"
          exact
          component={LayoutFashionSmartWatch}
        />
        <Route
          path="/dong-ho-thong-minh"
          exact
          component={LayoutSubSmartWatch}
        />
        <Route
          path="/dong-ho-thong-minh-the-thao-chuyen-nghiep"
          exact
          component={LayoutSportWatch}
        />
        <Route
          path="/dong-ho-thong-minh-tre-em"
          exact
          component={LayoutChildrenSmartWatch}
        />
        <Route path="/day-dong-ho" exact component={LayoutWatchChain} />
        <Route
          path="/dong-ho-thong-minh-xiaomi"
          exact
          component={LayoutXiaomiSmartWatch}
        />

        {/* User Info components */}
        <Route path="/userinfor" exact component={UserInFor} />
        {/* Mock Order */}
        <Route path="/mockOrder*" exact component={Order} />
        {/* Digital wallet */}
        <Route path="/order/pay/:orderId" exact component={PayOrder} />
        {/* Authorization  */}
        <Route path="/oauth2*" exact component={OauthComponent} />
        {/* Redirect */}
        <Route path="/redirect*" exact>
          <RedirectRoutes />
        </Route>
        {/* Sim card */}
        <Route path="/sim-so-dep" exact component={LayoutSimCard} />
        <Route
          path="/sim-so-dep/vina/id=:simId"
          exact
          component={LayoutVinaphoneSimCard}
        />

        {/* So sánh sản phẩm */}
        <Route path="/sosanh" exact component={CompareProducts} />
      </Switch>
    </ErrorBoundary>
  );
};

export default Routes;
