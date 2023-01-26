import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BtWrapper = styled.div`
  width: 28rem;
  height: 4.6rem;
  border-radius: 4px;
  background-color: #ffff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  transition: all 0.1s linear;
  &:hover {
    opacity: 0.8;
    transition: all 0.1s linear;
  }
`;
const Text = styled.p`
  line-height: 4.6rem;
`;
const ListAllButton = () => {
  return (
    <Link
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      to="/"
    >
      <BtWrapper>
        <Text> Xem tất cả </Text>{" "}
      </BtWrapper>{" "}
    </Link>
  );
};

export default ListAllButton;
