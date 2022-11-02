import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import axios from "axios";

export const EditProfile = ({ setModalOpen }) => {
  const navigate = useNavigate();

  const INIT = {
    memberName: "",
    bio: "",
    profileImgUrl: "",
    headerImgUrl: "",
  };
  const [editProfileReq, setEditProfileReq] = useState(INIT);

  //bio, memeberName change시
  const onTextChange = (e) => {
    const { name, value } = e.target;
    setEditProfileReq({ ...editProfileReq, [name]: value });
  };


  // 이미지 change시
  const [previewHeader, setPreviewHeader] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");


  const imgFileHandler = (e) => {
    const { name, files } = e.target;
    setEditProfileReq({ ...editProfileReq, [name]: files[0] });
    console.log(editProfileReq);

    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        // setPreviewHeader([...previewHeader, previewImgUrl]);

        if (name === "headerImgFile") {
          //헤더 이미지 파일인 경우
          setPreviewHeader([...previewHeader, previewImgUrl]);
        } else if (name === "profileImgUrl") {
          //프로필 이미지 파일인 경우
          setPreviewProfile([...previewProfile, previewImgUrl]);
        }
      }
    };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(editProfileReq);
    const accessToken = localStorage.getItem("Authorization");
    const formData = new FormData();
    formData.append("headerImgUrl", editProfileReq.headerImgUrl);
    formData.append("profileImgUrl", editProfileReq.profileImgUrl);
    formData.append("memberName", editProfileReq.memberName);
    formData.append("bio", editProfileReq.bio);

    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ", " + pair[1]);
    }
    console.log(formData.get("headerImgUrl"));
    console.log(formData.get("profileImgUrl"));
  };

  // const onAddContentHandler = (e) => {
  //   e.preventDefault();
  //   // dispatch(__addBoardThunk(content));
  //   const accessToken = localStorage.getItem("Authorization");
  //   const formData = new FormData();
  //   formData.append("imageFile", uploadImageForm);

  //   let entries = formData.entries();
  //   for (const pair of entries) {
  //     console.log(pair[0] + ", " + pair[1]);
  //   }
  //   console.log(formData.get("imageFile"));

  //   axios
  //     .post("http://13.124.191.202:8080/auth/boards/create", formData, {
  //       headers: {
  //         Authorization: accessToken,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then(function (response) {
  //       dispatch(getBoardContent());
  //       alert("게시되었습니다.");
  //     })
  //     .catch(function (error) {
  //       console.log(error.response);
  //     });
  //   setContent(init);
  // };

  return (
    <StModal>
      <StModalBody>
        <HeaderTopBox>
          <svg
            onClick={() => {
              setModalOpen(false);
            }}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
          <h2>Edit profile</h2>
        </HeaderTopBox>
        <FormBox onSubmit={onSubmitHandler}>
          <HeaderFile previewHeader={previewHeader}>
            <StHeaderImg src={previewHeader} alt="" />
            <label htmlFor="headerImgFile" />
            <input
              id="headerImgFile"
              name="headerImgFile"
              type="file"
              onChange={imgFileHandler}
            />
          </HeaderFile>
          <ProfileFile previewProfile={previewProfile}>
            <StProfileImg src={previewProfile} alt="" />
            <label htmlFor="profileImgUrl" />
            <input
              id="profileImgUrl"
              name="profileImgUrl"
              type="file"
              onChange={imgFileHandler}
            />
          </ProfileFile>
          <StSelectBox>
            <Input
              type="text"
              name="memberName"
              placeholder="name"
              onChange={onTextChange}
            />
            <Input2
              type="text"
              name="bio"
              placeholder="bio"
              onChange={onTextChange}
            />
          </StSelectBox>
          <Button theme="follow">save</Button>
        </FormBox>
      </StModalBody>
    </StModal>
  );
};

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(153, 153, 153, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const StModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 30px;
  width: 400px;
  height: 600px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 60px; */
`;

const StHeaderImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const HeaderFile = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;
  margin-top: 15px;
  & input[type="file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }
  label {
    display: inline-block;
    color: transparent;
    vertical-align: middle;
    background-color: transparent;
    line-height: 40px;
    margin-left: 10px;
  }
`;
const StProfileImg = styled.img`
  /* max-width: 100%; */
  width: 105%;
  /* min-width: 0%; */
  /* max-height: 100%; */
  height: 105%;
  /* min-height: 0%; */
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ProfileFile = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  border: 2px solid #f3f3f3;
  z-index: 20px;
  background-color: white;
  position: relative;
  transition: translateY(-60%);
  bottom: 320px;
  left: 25px;
  padding: 60px;
  position: absolute;

  overflow: hidden;

  & input[type="file"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  label {
    display: inline-block;
    color: transparent;
    vertical-align: middle;
    background-color: transparent;
    line-height: 40px;
    margin-left: 10px;
  }
`;

const StSelectBox = styled.div`
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  width: 300px;
  height: 35px;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 70px;
  margin-left: 50px;
`;

const Input2 = styled.input`
  display: flex;
  width: 300px;
  height: 70px;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  margin-left: 50px;
`;

const HeaderTopBox = styled.div`
  display: flex;

  & svg {
    width: 25px;
    margin-left: 20px;
    margin-top: 13px;
    cursor: pointer;
  }
  & h2 {
    margin-top: 16px;
    margin-left: 20px;
  }
`;

const FormBox = styled.form`
  & button {
    position: absolute;
    bottom: 558px;
    left: 300px;
  }
`;
