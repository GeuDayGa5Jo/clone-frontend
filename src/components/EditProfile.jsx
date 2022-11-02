import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button";
import axios from "axios";

export const EditProfile = ({ setModalOpen }) => {
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  //수정

  console.log(uploadImageForm);

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
        <FormBox>
          <HeaderFile
            previewImage={previewImage}
            uploadImageForm={uploadImageForm}
          >
            <label htmlFor="file" />
            <input id="file" type="file" onChange={imgFileHandler} />
          </HeaderFile>
          <ProfileFile>
            <label htmlFor="file" />
            <input type="file" />
          </ProfileFile>
          <StSelectBox>
            <Input type="text" name="name" placeholder="name" />
            <Input2 type="text" name="Bio" placeholder="Bio" />
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

const StSentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Stdiv = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const BtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 35px;
  height: 400px;
  margin: 20px 0;
  padding: 0 70px;
`;
const StSpan = styled.span`
  display: flex;
  width: 100%;
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fw};
  margin-bottom: 10px;
  color: ${(props) => props.color || "#666666"};
`;

const StLoginDivier = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 12px;
  margin: 0px 0px;
  font-size: 22px;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.2);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  & svg {
    margin-left: 10px;
    width: 30px;
  }
  & h2 {
    margin-left: 20px;
    margin-top: 10px;
  }
  & p {
    margin-left: 20px;
  }
`;

const HeaderFile = styled.div`
  width: 100%;
  height: 180px;
  background-color: #cfd9de;
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

const ProfileFile = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  border: 2px solid #f3f3f3;
  z-index: 20px;
  background-color: white;
  position: absolute;
  bottom: 320px;
  left: 25px;
  padding: 60px;
  & input[type="file"] {
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
