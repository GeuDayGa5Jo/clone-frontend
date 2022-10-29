import React from "react";
import styled from "styled-components";
import TweetCard from "../../components/TweetCard";

const TweetsList = () => {
  return (
    <div>
      <MenuBar>
        <GridBox>
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Like</button>
        </GridBox>
        <BottomBar />
      </MenuBar>
      <TweetCard />
    </div>
  );
};

export default TweetsList;

const MenuBar = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  background-color: white;
  & button {
    height: 60px;
    color: black;
    background-color: white;
    border: none;
    border-bottom: 1px solid #e9e9e9;
    font-size: 14px;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & :hover {
    background-color: #f5f5f5;
  }
`;

// 나중에 수정..꼭 하기
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 8.5%;
  align-self: center;
  border-radius: 15px;
  width: 56px;
  height: 4px;
  background-color: rgb(29, 155, 240);
`;
