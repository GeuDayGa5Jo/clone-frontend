import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Banner = () => {
  return (
    <Container>
      <SearchBox>
        <input type="text" name="serch" placeholder="Serch Twitter" />
      </SearchBox>

      <BannerBox>
        <h2>You might like</h2>
        <UserCard>
          <p>
            덕수
            <br />
            @soyoungmanmanse
          </p>
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <p>
            덕수
            <br />
            @soyoungmanmanse
          </p>
        </UserCard>
        <UserCard>
          <p>
            덕수
            <br />
            @soyoungmanmanse
          </p>
        </UserCard>
        <UserCard>
          <p>더보기</p>
        </UserCard>
      </BannerBox>

      <BannerBox2>
        <h2>Trends for you</h2>
      </BannerBox2>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 320px;
  margin-left: 840px;
  height: 100%;
  border-left: 1px solid #ebebebd5;
`;

const SearchBox = styled.div`
  border: none;
  width: 100%;
  padding: 20px;
  & input {
    width: 320px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    background-color: #eff3f4;
  }
`;

const BannerBox = styled.div`
  width: 100%;
  height: 250px;
  /* margin: 0 auto; */
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #eff3f4;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const BannerBox2 = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #eff3f4;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const UserCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  & :hover {
    width: 100%;
    height: 100%;
    background-color: gray;
  }
`;
