import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const LoginModal = () => {
  return (
    <StModal>
      <StModalBody>
        <StSentence>
          <Stdiv>계정을 생성하세요</Stdiv>
        </StSentence>

        <StSpan fontsize="20px" fw="600">
          생년월일
        </StSpan>
        <StSpan fontsize="18px">
          이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
          주제에 상관없이 나의 연령을 확인하세요.
        </StSpan>

        <BtBox>
          <Button theme="next-btn">다음</Button>
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
  padding: 105px;
`;

const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Stdiv = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 45px;
`;

const BtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StSpan = styled.span`
  display: flex;
  width: 100%;
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fw};
  margin-bottom: 10px;
  color: ${(props) => props.color || "#666666"};
`;
