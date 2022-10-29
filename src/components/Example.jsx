import React from "react";
import styled from "styled-components";
import SignUpNav from "../components/SignUpNav";
import Button from "../elem/Button";
import SelectBox from "../elem/SelectBox";
import Header from "./Header";
import LoginModal from "./LoginModal";
import LogoutModal from "./LogoutModal";
import SignUpModal from "./SignUpModal";
const Example = () => {
  const OPTIONS = [
    { value: "apple", name: "사과" },
    { value: "banana", name: "바나나" },
    { value: "orange", name: "오렌지" },
  ];
  return (
    <Stdiv>
      {/* <Button theme="follow">Follow</Button>

      <Button theme="tweet-sm">Tweet</Button>

      <Button theme="tweet-lg">Tweet</Button>

      <Button theme="logout-btn">Log out</Button>

      <Button theme="cancel">Cancel</Button>

      <Button theme="login-btn">Login</Button>
      <SignUpNav>Hi</SignUpNav> */}

      {/* <LogoutModal></LogoutModal> */}
      {/* <SignUpModal></SignUpModal> */}
      <LoginModal></LoginModal>
      {/* <Header></Header> */}
    </Stdiv>
  );
};

export default Example;

const Stdiv = styled.div`
  margin: 200px;
`;
