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
  height: 100vh;
  background-color: #f0f0f097;
  position: fixed;
  left: 280px;
`;
