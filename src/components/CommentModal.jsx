import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input";
import useForm from "../hooks/useForm";
import { __addCommentThunk } from "../redux/modules/commentSlice";
import { clearUserState } from "../redux/modules/userSlice";
import HomeCard from "./HomeCard";

const CommentModal = ({ setModalOpen, board }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, isSuccess } = useSelector((state) => state.user);
  const init = {
    commentContent: "",
    boardId: board.boardId,
  };

  console.log(board);
  const [content, setContent] = useState(init);

  const textRef = useRef();
  const handleResizeHeight = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    const { value, name } = e.target;
    setContent({ ...content, [name]: value });
  };
  //모달 뒤에 스크롤막기
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onCommentHandler = (e) => {
    e.preventDefault();
    dispatch(__addCommentThunk(content));
    alert("댓글이 작성되었습니다.");
    setModalOpen(false);
  };

  return createPortal(
    <StModal>
      <StModalBody>
        <Button bgColor="white">
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={() => setModalOpen(false)}
          ></FontAwesomeIcon>
        </Button>
        <HomeCard board={board}></HomeCard>
        <form>
          <Container>
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
                  placeholder="내 답글을 트윗합니다."
                  maxLength={150}
                  name="commentContent"
                  onChange={handleResizeHeight}
                  value={content.boardContent}
                ></StTextArea>
                <ImagePreview
                //   src={previewImage === "" ? content?.imgUrl : previewImage}
                />
              </WritingBox>
            </WritingContainer>
          </Container>
          <BtnBox>
            <ImageLayout>
              <ImageLabel htmlFor="file" />
              <ImageInput
                id="addFile"
                type="file"
                name="imageFile"
                placeholder="업로드"
                accept="image/*"
                // onChange={imgFileHandler}
              />
              <ImageButton>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </ImageButton>
            </ImageLayout>
            <BlueButton onClick={onCommentHandler}>답글</BlueButton>
          </BtnBox>
        </form>
      </StModalBody>
    </StModal>,
    document.getElementById("modal")
  );
};

export default CommentModal;

const StModal = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  width: 700px;
  min-height: 400px;
  max-height: 80%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  padding: 20px;
`;
const WritingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;

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
  img:nth-child(1) {
    object-fit: scale-down;
    width: 50px;
    height: 50px;
  }
  form {
    width: 100%;
  }
`;

const WritingBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  max-width: 90%;
`;

const StTextArea = styled.textarea`
  padding: 20px;
  border: 0;
  font-size: 16px;
`;

const BtnBox = styled.div`
  display: flex;
  border-top: 1px solid #e9e9e9;

  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.mainC};
  padding: 0 20px;
`;

const ImgBox = styled.div`
  margin-left: 10px;
`;

const BlueButton = styled.button`
  background-color: #1d9bf0;
  border-radius: 27px;
  color: white;
  font-size: 16px;
  width: 90px;
  height: 30px;
  font-weight: 700;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  width: 18px;
  fill: #1d9bf0;
`;

const IconBox = styled.div`
  width: 400px;
  /* height: 100%; */
  display: flex;
  & p {
    margin-left: 10px;
    font-weight: 700;
    font-size: 15px;
    border: none;
    color: #1d9bf0;
  }
`;

const ImageLabel = styled.label``;
const ImageLayout = styled.div`
  position: relative;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  resize: none;
  margin-top: 20px;
  margin-left: 48px;
`;

const ImageInput = styled.input`
  width: 30px;
  height: 30px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ImageButton = styled.div`
  fill: #1d9bf0;
  width: 20px;
  height: 20px;
`;

export const ImagePreview = styled.img`
  display: flex;
  min-width: 0px;
  max-width: 500px;
  min-height: 0px;
  max-height: 300px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 30px;
  outline: 1px solid white;
  outline-offset: -1px;
`;

export const Container = styled.div``;
