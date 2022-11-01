import axios from "axios";
import React from "react";
import styled from "styled-components";
import SignUpNav from "../components/SignUpNav";
import Button from "../elem/Button";
import SelectBox from "../elem/SelectBox";
import CommentModal from "./CommentModal";
import Header from "./Header";
import LoginModal from "./LoginModal";
import LogoutModal from "./LogoutModal";
import SignUpModal from "./SignUpModal";
const Example = () => {
  const test = async () => {
    try {
      const { data } = await axios.post(
        "http://13.124.191.202:8080/member/login",
        {
          memberEmail: "dudgh12@naver.com",
          memberPassword: "abc",
          // memberName: "정영호",
          // DOB: "01/02/2021",
        }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const onClick = () => {
    test();
  };

  return (
    <Stdiv>
      {/* <button onClick={onClick}>Click</button> */}
      {/* <Button theme="follow">Follow</Button>

      <Button theme="tweet-sm">Tweet</Button>

      <Button theme="tweet-lg">Tweet</Button>

      <Button theme="logout-btn">Log out</Button>

      <Button theme="cancel">Cancel</Button>

      <Button theme="login-btn">Login</Button>
      <SignUpNav>Hi</SignUpNav> */}

      {/* <LogoutModal></LogoutModal> */}
      {/* <SignUpModal></SignUpModal> */}
      {/* <LoginModal></LoginModal> */}
      {/* <CommentModal></CommentModal> */}
      {/* <Header></Header> */}
    </Stdiv>
  );
};

export default Example;

const Stdiv = styled.div`
  margin: 200px;
`;
