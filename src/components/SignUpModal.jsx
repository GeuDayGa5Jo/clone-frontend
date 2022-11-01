import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input";
import SelectBox from "../elem/SelectBox";
import useForm from "../hooks/useForm";

const SignUpModal = (props) => {
  const isSignUp = true;
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      memberName: "",
      memberEmail: "",
      memberPassword: "",
      memberPasswordConfirm: "",
      month: 0,
      day: 0,
      year: 0,
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // alert("작성한 내용을 포스팅 합니다.");
    },
    isSignUp,
    // validate,
  });

  return (
    <StModal>
      <StModalBody {...props}>
        <StSpan>
          <Button bgColor="white">
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              onClick={() => props.setModalOpen(false)}
            ></FontAwesomeIcon>
          </Button>
        </StSpan>
        <StSentence>
          <Stdiv>계정을 생성하세요</Stdiv>
        </StSentence>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="memberName"
            theme="signup"
            placeholder="이름"
            mg="0 0 10px 0"
            onChange={handleChange}
            value={values.memberName || ""}
          />
          <StSpan>{errors.memberName}</StSpan>
          <Input
            type="email"
            name="memberEmail"
            theme="signup"
            placeholder="이메일"
            mg="0 0 10px 0"
            onChange={handleChange}
            value={values.memberEmail || ""}
          />
          <StSpan>{errors.memberEmail}</StSpan>
          <Input
            type="password"
            name="memberPassword"
            theme="signup"
            placeholder="비밀번호"
            mg="0 0 10px 0"
            onChange={handleChange}
            value={values.memberPassword || ""}
          />
          <StSpan>{errors.memberPassword}</StSpan>
          <Input
            type="password"
            name="memberPasswordConfirm"
            theme="signup"
            placeholder="비밀번호 확인"
            mg="0 0 10px 0"
            onChange={handleChange}
            value={values.memberPasswordConfirm || ""}
          />
          <StSpan>{errors.memberPasswordConfirm}</StSpan>
          <StSpan fontsize="20px" fw="600">
            생년월일
          </StSpan>
          <StSpan fontsize="14px">
            이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상관없이 나의 연령을 확인하세요.
          </StSpan>
          <StSelectBox>
            <SelectBox
              name="month"
              a={1}
              b={12}
              default="월"
              wd="130px"
              onChange={handleChange}
              value={values.month}
            ></SelectBox>
            <SelectBox
              name="day"
              a={1}
              b={31}
              default="일"
              wd="90px"
              onChange={handleChange}
              value={values.day}
            ></SelectBox>
            <SelectBox
              name="year"
              a={1902}
              b={2022}
              default="년"
              wd="170px"
              onChange={handleChange}
              value={values.year}
            ></SelectBox>
          </StSelectBox>
          <BtBox>
            <Button theme="next-btn" type="submit" disabled={submitting}>
              완료
            </Button>
          </BtBox>
        </form>
      </StModalBody>
    </StModal>
  );
};

export default SignUpModal;

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
  width: 600px;
  height: 660px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
`;

const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Stdiv = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
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
  margin-bottom: 15px;
  color: ${(props) => props.color || "#666666"};
  background-color: ${(props) => props.bgC};
`;
const StSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
`;
