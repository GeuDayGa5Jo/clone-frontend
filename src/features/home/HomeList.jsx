import { faImage, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addBoardContent } from "../../redux/modules/BoardContentSlice";

//alt+shift+아래 = 복사!!! mac이에요!!!

const HomeList = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    boardContent: "",
    imageUrl: "",
  });

  console.log("게시글 작성 중=>", content);

  // 자동으로 텍스트 줄에 따라 길어지는 textarea
  const textRef = useRef();
  const handleResizeHeight = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    const value = e.target.value;
    setContent(value);
  };

  //게시글 작성
  const onAddContentHandler = (e) => {
    e.preventDefault();
    dispatch(addBoardContent(content));
    setContent("");
  };

  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  const imgFileHandler = (e) => {
    setUploadImageForm(e.target.files[0]);

    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImage([...previewImage, previewImgUrl]);
      }
    };
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
        <WritingBox onClick={onAddContentHandler}>
          <StTextArea
            ref={textRef}
            row={1}
            placeholder="What's happening?"
            maxLength={150}
            onChange={handleResizeHeight}
            value={content.boardContent}
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
            {/* <ImageLayout> */}
            <ImageLabel htmlFor="file">
              <ImagePreview src="https://i.pinimg.com/originals/d2/4f/89/d24f89d6afaec9d3a55d47fed799800e.jpg" />
            </ImageLabel>
            <ImageInput
              id="addFile"
              type="file"
              name="imageUrl"
              placeholder="업로드"
              accept={"image/*"}
              onChange={imgFileHandler}
            />

            {/* </ImageLayout> */}
            <BlueButton onClick={onAddContentHandler}>Tweet</BlueButton>
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
  font-size: 20px;
  resize: none;
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
  cursor: pointer;
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

const ImageLabel = styled.label`
  height: 15px;
  width: 15px;
  // position: absolute;
  // left: 0;
  // top: 0;
  // height: 30px;
  // width: 30px;
  // z-index: 1;
  // background-color: transparent;
`;

const ImagePreview = styled.img`
  position: relative;
  top: 20;
  left: 20;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
`;

// export const ImageLayout = styled.div`
//   position: relative;
//   border-radius: 100%;
//   height: 30px;
//   width: 30px;
//   overflow: hidden;
//   resize: none;
//   margin: 20px 0 40px 0;
//   border: 1px solid #ccc;
// `;

export const ImageInput = styled.input`
  width: 30px;
  height: 30px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
