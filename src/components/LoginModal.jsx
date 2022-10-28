import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";

const LoginModal = () => {
  return (
    <StModal>
      <StModalBody>
        <StSentence>
          <Stdiv>지운 님의 트윗 더보기</Stdiv>
        </StSentence>
        <StSpan fontsize="18px">
          Twitter에서는 모든 소식을 가장 먼저 접할 수 있습니다.
        </StSpan>

        <BtBox>
          <Button theme="login-btn" wd="100%" fontC="#949494">
            Google로 로그인
          </Button>
          <Button theme="login-btn" wd="100%" fontC="black">
            Apple로 로그인하기
          </Button>
          <StLoginDivier>또는</StLoginDivier>
          <Button theme="login-btn" wd="100%" bgColor="#1d9bf0" fontC="white">
            로그인
          </Button>
          <StSpan fontsize="18px">
            계정이 없으신가요? <Link> 가입하기</Link>
          </StSpan>
        </BtBox>
      </StModalBody>
    </StModal>
  );
};

export default LoginModal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(153, 153, 153, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  width: 800px;
  height: 880px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 175px;
`;

const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Stdiv = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const BtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 35px;
  height: 400px;
  margin: 20px 0;
`;
const StSpan = styled.span`
  display: flex;
  width: 100%;
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fw};
  margin-bottom: 10px;
  color: ${(props) => props.color || "#666666"};
`;
const StLoginDivier = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 12px;
  margin: 0px 0px;
  font-size: 22px;
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
