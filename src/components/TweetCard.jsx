import React from "react";
import styled from "styled-components";

const TweetCard = () => {
  return (
    <div>
      <Card>
        <ImgFile src="https://pbs.twimg.com/profile_images/1585648241298636800/tii40Gv2_400x400.jpg"></ImgFile>
        <h3>덕수</h3>
        <p>@soyoung</p>
        <p>무슨 일이 일어나고 있나요?</p>
      </Card>
    </div>
  );
};

export default TweetCard;

const Card = styled.div`
  background-color: #ffffff;
  height: 200px;
  border-bottom: 1px solid #e9e9e9;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  & h3 {
    margin-left: 10px;
    margin-top: 20px;
    vertical-align: auto;
  }
  & p {
    margin-left: 10px;
    margin-top: 20px;
    vertical-align: auto;
  }
`;

const ImgFile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;

  display: flex;
`;
