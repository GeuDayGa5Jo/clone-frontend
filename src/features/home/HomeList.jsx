import { faImage, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HomeCard from "../../components/HomeCard";
import {
  addBoardContent,
  getBoardContent,
  __addBoardThunk,
  delBoardContent,
} from "../../redux/modules/BoardContentSlice";
import { ServerUrl } from "../../server";

//alt+shift+아래 = 복사!!! mac이에요!!!

const HomeList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.boardContent);
  const board = data.boardContent;

  console.log("homelist data 나와=>", data);

  const init = {
    boardContent: "",
    imageFile: "",
  };

  const deleteBoardContent = () => {
    const params = { id };
    dispatch(delBoardContent(params));
  };

  const [content, setContent] = useState(init);

  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);
  // 자동으로 텍스트 줄에 따라 길어지는 textarea
  const textRef = useRef();
  const handleResizeHeight = (e) => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
    const { value, name } = e.target;
    setContent({ ...content, [name]: value });
  };

  //게시글 작성
  const onAddContentHandler = (e) => {
    e.preventDefault();
    // dispatch(__addBoardThunk(content));
    const accessToken = localStorage.getItem("Authorization");
    const formData = new FormData();
    formData.append("imageFile", uploadImageForm);
    formData.append("boardContent", content.boardContent);

    // let entries = formData.entries();
    // for (const pair of entries) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // console.log(formData.get("imageFile"));
    // console.log(formData.get("boardContent"));

    axios
      .post("http://13.124.191.202:8080/auth/boards/create", formData, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        dispatch(getBoardContent());
        alert("게시되었습니다.");
      })
      .catch(function (error) {
        console.log(error.response);
      });
    setContent(init);
  };

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

  useEffect(() => {
    dispatch(getBoardContent());
    // dispatch(delBoardContent({ id }));
  }, [dispatch]);

  return (
    <StContainer>
      <StListHeader>
        <span>Home</span>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </StListHeader>
      <form onSubmit={onAddContentHandler}>
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
                placeholder="What's happening?"
                maxLength={150}
                name="boardContent"
                onChange={handleResizeHeight}
                value={content.boardContent}
                type="text"
              ></StTextArea>
              <ImagePreview
                src={previewImage === "" ? content?.imgUrl : previewImage}
              />
            </WritingBox>
          </WritingContainer>
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
              onChange={imgFileHandler}
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
          <BlueButton onClick={onAddContentHandler}>Tweet</BlueButton>
        </BtnBox>
      </form>

      {board?.map((board) => {
        return (
          <HomeCard key={board.boardId} id={board.boardId} board={board} />
        );
      })}
    </StContainer>
  );
};

export default HomeList;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 700px;
  & img {
    display: inline-block;
    content: "";
    border: none;
    border: 0;
  }
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
  min-width: 80%;
  max-width: 80%;
  border-bottom: 1px solid #e9e9e9;
`;

const StTextArea = styled.textarea`
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

  border-bottom: 1px solid #e9e9e9;
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
  margin-right: 92px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
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
  width: 500px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 30px;
  outline: 1px solid white;
  outline-offset: -1px;
`;

export const Container = styled.div``;
