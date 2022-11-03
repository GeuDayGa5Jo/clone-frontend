import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { EditProfile } from "../../components/EditProfile";
import { getMyPage } from "../../redux/modules/mypageSlice";
import userSlice from "../../redux/modules/userSlice";
import TweetCard from "../../components/TweetCard";
import TweetsList from "./TweetsList";

const ProfileEdit = ({ previewImage }) => {
  const data = useSelector((state) => state.myPage.myPage);
  const changingImgs = useSelector((state) => state.myPage.profileImgs);
  const content = data.boards;
  const comments = data.comments;
  const plus = content?.concat(comments);
  const tweetList = plus?.sort((a, b) => {
    return new Date(a.createAt) - new Date(b.createAt);
  });

  const userEmail = data.memberEmail;
  const userIdSplit = (userEmail || "").split("@");
  const userId = userIdSplit[0];
  const userNumber = data?.memberId;
  // console.log("content, comments 합친 거 =>", userNumber);

  const [EditProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const showEditProfileModal = () => {
    setEditProfileModalOpen(true);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPage());
  }, [dispatch]);

  console.log(data);
  // console.log( changingImgs.previewHeader, data.headerImg);
  // console.log("헤더:", data.headerImg);
  // console.log("프로필", data.profileImg);
  // console.log(changingImgs.previewProfile, data.profileImg);

  return (
    <MainBox>
      <HeaderBox>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
        <div>
          <h2>{data?.memberName}</h2>
          <p>{content?.length} Tweets</p>
        </div>
      </HeaderBox>

      <HeaderFile>
        <img src={data.headerImg} alt="" />
        {/* <img src={changingImgs.previewHeader || data.headerImg} alt="" /> */}
        <ImgBox>
          <ImgFile
            src={data.profileImg}
            // src={changingImgs.previewProfile || data.profileImg}
            alt=""
          />
        </ImgBox>
      </HeaderFile>

      <Text>
        <button onClick={showEditProfileModal}>Edit profile</button>
        <h2>{data?.memberName}</h2>
        <span>@{userId}</span>
        <p>{data?.memberBio}</p>
      </Text>
      <DownText>
        <p>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          Joined October 2022
        </p>
        <p>
          <span>2</span> Following <span>0</span> Followers
        </p>
      </DownText>
      <TweetsList content={tweetList} userId={userId} userNumber={userNumber} />
      {EditProfileModalOpen && (
        <EditProfile setModalOpen={setEditProfileModalOpen} />
      )}
    </MainBox>
  );
};
//
export default ProfileEdit;

const MainBox = styled.div`
  height: 470px;
  background-color: white;
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
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
  }
  & p {
    width: 100%;
    margin-left: 20px;
  }
`;

const HeaderFile = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
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
  bottom: -50px;
  left: 15px;
  border-radius: 50%;
`;

const Text = styled.div`
  margin-left: 10px;
  margin-top: 80px;
  width: 100%;
  & h2 {
    margin-bottom: 5px;
  }
  & p {
    font-size: 15px;
    margin-bottom: 5px;
  }
  & button {
    border: 1px solid #dbdbdbd3;
    background-color: white;
    position: absolute;
    right: 30px;
    top: 260px;
    width: 120px;
    padding: 10px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
  }
  & span {
    color: #536471;
  }
`;

const DownText = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  font-size: 15px;
  color: #536471;
  font-weight: 600;
  & span {
    color: black;
    font-weight: 600;
    padding-right: 5px;
    padding-left: 5px;
  }
  & svg {
    width: 20px;
    fill: #536471;
    margin-right: 3px;
  }
  & p {
    display: flex;
    justify-content: left;
  }
`;

const ProfileBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  overflow: hidden;
  z-index: 20px;
  position: absolute;
  bottom: 600px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ededed;
`;

const ImageFile = styled.img`
  width: 150px;
  height: auto;
  display: block;
`;

const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  border: 1px solid #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -50px;
  left: 15px;
`;

const ImgFile = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
