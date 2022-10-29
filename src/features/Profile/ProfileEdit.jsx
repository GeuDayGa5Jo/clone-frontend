import React from "react";
import styled from "styled-components";

const ProfileEdit = () => {
  return (
    <div>
      <HeaderBox>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
        <div>
          <h2>덕수</h2>
          <p>9 Tweets</p>
        </div>
      </HeaderBox>
      <HeaderFile>
        <label htmlFor="file" />
        <input id="file" type="file" />
        <ProfileFile>
          <label htmlFor="file" />
          <input type="file" />
        </ProfileFile>
      </HeaderFile>
      <Text>
        <h2>덕수</h2>
        <p>@soyoung</p>
        <p>안녕하세요?</p>
      </Text>
      Joined October 2022 2 Following 0 Followers
    </div>
  );
};

export default ProfileEdit;

const HeaderBox = styled.div`
  width: 100%;
  height: 6%;
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
  background-color: gray;
  position: relative;
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
  z-index: 20px;
  background-color: #ababab;
  position: absolute;
  bottom: -50px;
  left: 15px;
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

const Text = styled.div`
  margin-left: 40px;
  margin-top: 80px;
  & p {
    font-size: 14px;
  }
`;
