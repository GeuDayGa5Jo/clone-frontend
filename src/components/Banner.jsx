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
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <p>
            덕수
            <br />
            @soyoungmanmanse
          </p>
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <p>더보기</p>
        </UserCard>
      </BannerBox>

      <BannerBox2>
        <h2>Trends for you</h2>
        <TopicCard>
          <p>
            Traending in South Korea
            <br />
            <h3>Front-end</h3>
            100K Tweets
          </p>
        </TopicCard>
        <TopicCard>
          <p>
            Traending in South Korea
            <br />
            <h3>다잇수할</h3>
            60.5K Tweets
          </p>
        </TopicCard>
        <TopicCard>
          <p>
            Music · Trending
            <br />
            <h3>백예린</h3>
            20.4K Tweets
          </p>
        </TopicCard>
        <TopicCard>
          <p>
            Traending in South Korea
            <br />
            <h3>항해99</h3>
            10K Tweets
          </p>
        </TopicCard>
        <TopicCard>
          <p>
            Traending in South Korea
            <br />
            <h3>D반 화이팅</h3>
            5K Tweets
          </p>
        </TopicCard>
        <TopicCard>
          <p>
            Traending in South Korea
            <br />
            <h3>취뽀하자🫶🏻</h3>
            2056 Tweets
          </p>
        </TopicCard>
      </BannerBox2>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 300px;
  /* position: fixed; */
  right: 0px;
  height: 100%;
  border-left: 1px solid #ebebebd5;
`;

const SearchBox = styled.div`
  border: none;
  width: 90%;
  padding: 20px;
  & input {
    width: 100%;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    background-color: #eff3f4;
  }
`;

const BannerBox = styled.div`
  width: 90%;
  height: 250px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #eff3f4;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  & p {
    margin-right: 20px;
  }
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const BannerBox2 = styled.div`
  width: 90%;
  height: 500px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #eff3f4;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  & h2 {
    margin-left: 10px;
    padding: 10px;
    font-size: 18px;
  }
`;

const UserCard = styled.div`
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  /* & :hover {
    width: 100%;
    height: 100%;
    background-color: #d5d5d5;
  } */
`;

const TopicCard = styled.div`
  width: 90%;
  height: 50px;
  margin-left: 40px;
`;
