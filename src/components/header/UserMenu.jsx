import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//
import {
  getTotals,
  resetCurrentCart,
  selectCurrentCartInfo,
} from "../../features/cart/cartSlice";
import authController from "../../features/auth/functions";
import UserInfoSubMenu from "./UserInfoSubMenu";
import { useDispatch, useSelector } from "react-redux";
import { toastObject } from "../../constants/toast";
import { toast } from "react-toastify";

//
const MenuWrap = styled.div`
  position: absolute;
  background-color: #fff;
  font-size: 16px;
  z-index: 11;
  top: 46px;
  left: 4px;
  transition: all 0.2s linear;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const ulStyle = `
display:flex;
justify-content: space-between;
flex-grow: 10%;
align-items: center;
flex-direction: column;`;
const liStyle = `
// padding: 1.6rem 3.5rem;
padding: 1.2rem 2.5rem;

width: 100%;
white-space: nowrap;
transition: all 0.2s ease;
&:hover{
transition: all 0.2s ease;

    opacity: 0.7;
    background-color: #cccccc;

  }
`;
const MemberMenuWrap = styled.div`
  ul {
    ${ulStyle}
    li {
      ${liStyle}
    }
  }
`;
const GuestMenuWrap = styled.div`
  ul {
    ${ulStyle}
    li {
      ${liStyle}
    }
  }
`;

const UserMenu = (props) => {
  // const
  const dispatch = useDispatch();

  let history = useHistory();
  const cart = useSelector((state) => state.cart);
  // Handler
  const handleLogoutClick = () => {
    authController.logOut().then((res) => {
      history.push("/");
      if (res?.data?.success) {
        toast.success(`Đăng xuất thành công`, toastObject);
      } else {
        toast.error(`Lỗi đăng xuất, thử lại`, toastObject);
      }
    });
  };
  const handleOrderClick = () => {
    history.push({
      pathname: "/purchasehistory/product",
    });
  };
  const handleLoginClick = () => {
    history.push("/login");
  };
  const handlerRegisterCLick = () => {
    history.push("/register");
  };
  const handleInfoClick = () => {
    history.push({
      pathname: "/purchasehistory/userinfo",
    });
  };
  let { isLogin, style, user } = props;
  return (
    <MenuWrap style={style}>
      {/* Content */}
      {isLogin ? (
        // Member
        <MemberMenuWrap>
          <ul>
            <li onClick={handleInfoClick}>
              <UserInfoSubMenu user={user}></UserInfoSubMenu>
            </li>
            <li onClick={handleOrderClick}>Đơn hàng của tôi</li>
            <li onClick={handleLogoutClick}>Đăng xuất</li>
          </ul>
        </MemberMenuWrap>
      ) : (
        // Guest
        <GuestMenuWrap>
          <ul>
            <li onClick={handleLoginClick}>Đăng nhập</li>
            <li onClick={handlerRegisterCLick}>Đăng ký</li>
          </ul>
        </GuestMenuWrap>
      )}
    </MenuWrap>
  );
};

export default UserMenu;
