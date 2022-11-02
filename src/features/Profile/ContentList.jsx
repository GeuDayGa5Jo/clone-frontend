import React from "react";
import styled from "styled-components";
import ProfileEdit from "./ProfileEdit";
import TweetsList from "./TweetsList";

const ContentList = () => {
  return (
    <Box>
      <ProfileEdit />
      <TweetsList></TweetsList>
    </Box>
  );
};

export default ContentList;

const Box = styled.div`
  width: 620px;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  left: 280px;
`;
