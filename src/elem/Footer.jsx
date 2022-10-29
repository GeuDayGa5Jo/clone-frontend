import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  return (
    <StFooter {...props}>
      <StContainDiv>
        <span>소개</span>
        <span>고객센터</span>
        <span>이용약관</span>
        <span>개인정보 처리방침</span>
        <span>쿠키 정책</span>
        <span>접근성</span>
        <span>광고정보</span>
        <span>블로그</span>
        <span>상태</span>
        <span>채용</span>
        <span>브랜드 리소스</span>
        <span>광고</span>
        <span>마케팅</span>
        <span>비지니스 트위터</span>
        <span>개발자</span>
        <span>디렉터리</span>
        <span>설정</span>
        <span> &copy; 2022 Twitter. Inc.</span>
      </StContainDiv>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.footer`
  display: flex;
  position: fixed;
  height: 30px;
  width: 100%;
  bottom: 0;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;
const StContainDiv = styled.div`
  display: flex;
  width: 1400px;
  justify-content: space-between;
  align-items: center;
`;
