import { faImage, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../../elem/Button";

const HomeList = () => {
  // 자동으로 텍스트 줄에 따라 길어지는 textarea
  const textRef = useRef();
  const handleResizeHeight = () => {
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
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/1267px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png"
            alt=""
          />
        </div>
        <WritingBox>
          <StTextArea
            ref={textRef}
            row={1}
            placeholder="What's happening?"
            maxLength={150}
            onChange={handleResizeHeight}
          ></StTextArea>
          <BtnBox>
            <FontAwesomeIcon icon={faImage} size="lg" />
            <Button theme="tweet-sm" mg="0">
              Tweet
            </Button>
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
  width: 50%;
  padding: 5px 30px;
`;
const StListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  span {
    font-size: 20px;
    font-weight: 600;
  }
`;
///
const WritingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  min-height: 80px;
  max-height: 160px;

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
  min-width: 100%;
  max-width: 100%;
  min-height: 80px;
  max-height: 160px;
  padding: 20px;
  border: 0;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.mainC};
  padding: 0 20px;
  margin-bottom: 10px;
`;
