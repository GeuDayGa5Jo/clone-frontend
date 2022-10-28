import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const LogoutModal = (props) => {
  return (
    <StModal>
      <StModalBody {...props}>
        <StImg src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/1267px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png" />
        <StSentence>
          <Stdiv>Log out of Twitter?</Stdiv>
          <StP>
            You can always log back in at any time. If you just want to switch
            accounts, you can do that by adding an existing account.
          </StP>
        </StSentence>
        <BtBox>
          <Button theme="logout-btn">Log out</Button>
          <Button theme="cancel">Cancel</Button>
        </BtBox>
      </StModalBody>
    </StModal>
  );
};

export default LogoutModal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  width: 430px;
  height: 490px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  align-items: center;
`;

const StImg = styled.img`
  width: 50px;
  height: 40px;
  object-fit: cover;
  margin-bottom: 35px;
`;
const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Stdiv = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const StP = styled.div`
  font-size: 19px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-bottom: 40px;
`;
const BtBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
