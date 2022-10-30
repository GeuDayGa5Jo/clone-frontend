import { faImage, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";

const HomeList = () => {
  // 자동으로 텍스트 줄에 따라 길어지는 textarea
  const textRef = useRef();
  const handleResizeHeight = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  return (
    <StContainer>
      <StListHeader>
        <span>Home</span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </StListHeader>
      <WritingContainer>
        <ImgBox>
          <img
            src="https://pbs.twimg.com/profile_images/1586041191048818688/8T_01Rml_400x400.jpg"
            alt=""
          />
        </ImgBox>
        <WritingBox>
          <StTextArea
            ref={textRef}
            row={1}
            placeholder="What's happening?"
            maxLength={150}
            onChange={handleResizeHeight}
          ></StTextArea>
          <IconBox>
            <Icon>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"
              >
                <g>
                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                </g>
              </svg>
            </Icon>
            <p>Everyone can reply</p>
          </IconBox>
          <BtnBox>
            <FontAwesomeIcon icon={faImage} size="lg" />
            <BlueButton>Tweet</BlueButton>
          </BtnBox>
        </WritingBox>
      </WritingContainer>
    </StContainer>
  );
};

export default HomeList;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 auto;
  width: 960px;
`;

const StListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  span {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
  }
`;
///
const WritingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  /* background-color: gray; */
  border-bottom: 1px solid #e9e9e9;
  max-height: 300px;
  > div:first-child {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  img {
    object-fit: scale-down;
    width: 50px;
    height: 50px;
  }
  form {
    width: 100%;
  }
`;

const WritingBox = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 80%;
  max-width: 80%;
`;

const StTextArea = styled.textarea`
  min-width: 75%;
  max-width: 75%;
  padding: 20px;
  border: 0;
  font-size: 20px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.mainC};
  padding: 0 20px;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  margin-left: 10px;
`;

const BlueButton = styled.button`
  background-color: #1d9bf0;
  border-radius: 27px;
  color: white;
  font-size: 19px;
  width: 90px;
  height: 40px;
  font-weight: 700;
  margin: 0 auto;
  border: none;
`;

const Icon = styled.div`
  width: 18px;
  fill: #1d9bf0;
`;

const IconBox = styled.div`
  width: 400px;
  display: flex;
  & p {
    margin-left: 10px;
    font-weight: 700;
    font-size: 15px;
    color: #1d9bf0;
  }
`;
