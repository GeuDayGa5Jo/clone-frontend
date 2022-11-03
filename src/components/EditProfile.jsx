import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import axios from "axios";
import { ServerUrl } from "../server";
import { useDispatch } from "react-redux";
import { changeImg } from "../redux/modules/mypageSlice";

export const EditProfile = ({ setModalOpen }) => {
  const dispatch = useDispatch();
  const INIT = {
    memberName: "",
    bio: "",
    profileImgUrl: "",
    headerImgUrl: "",
  };
  const [editProfileReq, setEditProfileReq] = useState(INIT);
  //수정
  //bio, memeberName change시
  const onTextChange = (e) => {
    const { name, value } = e.target;
    setEditProfileReq({ ...editProfileReq, [name]: value });
  };

  // 이미지 change시
  const [previewHeader, setPreviewHeader] = useState("");
  const [previewProfile, setPreviewProfile] = useState("");

  const headerFileHandler = (e) => {
    const { name, files } = e.target;
    console.log(name, files[0]);
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

        setPreviewHeader([...previewHeader, previewImgUrl]);
      }
    };
  };

  const profileFileHandler = (e) => {
    const { name, files } = e.target;
    console.log(name, files[0]);
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

        //프로필 이미지 파일인 경우
        setPreviewProfile([...previewProfile, previewImgUrl]);
      }
    };
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(editProfileReq);
    const accessToken = localStorage.getItem("Authorization");
    const formData = new FormData();
    //form data는 백엔드와 순서를 맞춰줘야 한다....
    formData.append("headerImgUrl", editProfileReq.headerImgUrl);
    formData.append("profileImgUrl", editProfileReq.profileImgUrl);
    formData.append("bio", editProfileReq.bio);
    formData.append("memberName", editProfileReq.memberName);

    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // console.log(formData.get("headerImgUrl"));
    // console.log(formData.get("profileImgUrl"));

    try {
      const res = await axios.put(
        `${ServerUrl}/member/auth/editProfile`,
        formData,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(
        changeImg({
          previewHeader: previewHeader[0],
          previewProfile: previewProfile[0],
        })
      );
      console.log({
        previewHeader: previewHeader[0],
        previewProfile: previewProfile[0],
      });
      alert(res.data);
    } catch (e) {
      alert(e);
    }
    setModalOpen(false);
  };

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
            <label htmlFor="headerImgUrl" />
            <input
              id="headerImgUrl"
              name="headerImgUrl"
              type="file"
              onChange={headerFileHandler}
            />
          </HeaderFile>
          <ProfileFile previewProfile={previewProfile}>
            <StProfileImg src={previewProfile} alt="" />
            <label htmlFor="profileImgUrl" />
            <input
              id="profileImgUrl"
              name="profileImgUrl"
              type="file"
              onChange={profileFileHandler}
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
