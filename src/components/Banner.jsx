import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <SearchBox>
        <input type="text" name="serch" placeholder="Serch Twitter" />
      </SearchBox>
      <BannerBox>
        <h2>You might like</h2>
      </BannerBox>
      <BannerBox2>
        <h2>Trends for you</h2>
      </BannerBox2>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 180px;
  margin-left: 840px;
  height: 100%;
  border-left: 1px solid #ebebebd5;
`;

const SearchBox = styled.div`
  border: none;
  width: 160px;
  margin-bottom: 20px;
  margin-top: 20px;
  & input {
    width: 350px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    background-color: #eff3f4;
  }
`;

const BannerBox = styled.div`
  width: 350px;
  height: 250px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #eff3f4;
  margin-bottom: 20px;
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const BannerBox2 = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #eff3f4;
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const UserCard = styled.div`
  width: 220px;
  height: 100px;
  background-color: gray;
`;
