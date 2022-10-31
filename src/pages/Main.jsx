import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Footer from "../elem/Footer";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";

const Main = () => {
  //모달창 노출 여부 state
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const showSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const showLoginUpModal = () => {
    setLoginModalOpen(true);
  };
  return (
    <MainLayout>
      <StContainer>
        <ImgBoxDiv>
          <StImg
            src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
            alt=""
          />
          <StImgLogo src="img/logo.png" alt="" />
        </ImgBoxDiv>

        <StLoginContent>
          <img src="img/logo-sm.png" alt="" />
          <StSentence>
            <Stdiv mg="0 0 50px 0">지금 일어나고 있는 일</Stdiv>
            <Stdiv fontsize="30px"> 오늘 트위터에 가입하세요.</Stdiv>
          </StSentence>

          <BtBox>
            <Link to={"/home"}>
              <Button theme="login-btn" wd="100%" fontC="#949494" hg="45px">
                Google로 로그인
              </Button>
            </Link>
            <Button theme="login-btn" wd="100%" fontC="black" hg="45px">
              Apple로 로그인하기
            </Button>
            <StLoginDivier>또는</StLoginDivier>
            <Button
              theme="login-btn"
              wd="100%"
              bgColor="#1d9bf0"
              fontC="white"
              hg="45px"
              onClick={showSignUpModal}
            >
              이메일로 가입하기
            </Button>
            <StSpan fontsize="12px" mgb="20px">
              가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에
              동의해야합니다.
            </StSpan>
            <Stdiv fontsize="20px"> 이미 트위터에 가입하셨나요?</Stdiv>
            <Button
              theme="login-btn"
              wd="100%"
              bgColor="white"
              fontC="#1d9bf0"
              hg="45px"
              onClick={showLoginUpModal}
            >
              로그인
            </Button>
          </BtBox>
        </StLoginContent>
      </StContainer>
      <Footer></Footer>
      {signUpModalOpen && <SignUpModal setModalOpen={setSignUpModalOpen} />}
      {loginModalOpen && <LoginModal setModalOpen={setLoginModalOpen} />}
    </MainLayout>
  );
};

export default Main;
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const StContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const ImgBoxDiv = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 55vw;
`;
const StImg = styled.img`
  display: flex;
  width: 100%;
`;
const StImgLogo = styled.img`
  display: flex;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 35px;
  width: 40%;
  img {
    width: 7%;
    margin-bottom: 50px;
  }
`;
const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Stdiv = styled.div`
  font-size: ${(props) => props.fontsize || "60px"};
  font-weight: 700;
  margin: ${(props) => props.mg};
`;

const BtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 35px;
  height: 400px;
  margin: 20px 0;
  width: 350px;
`;
const StSpan = styled.span`
  display: flex;
  width: 100%;
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fw};
  margin-bottom: ${(props) => props.mgb || "10px"};
  color: ${(props) => props.color || "#666666"};
`;
const StLoginDivier = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 12px;
  margin: 0px 0px;
  font-size: 18px;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.2);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;
