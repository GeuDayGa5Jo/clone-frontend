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
          <ImgFile src="https://pbs.twimg.com/profile_images/1586041191048818688/8T_01Rml_400x400.jpg"></ImgFile>
          <div>
            덕수
            <br />
            @soyoung
          </div>
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <ImgFile src="https://pbs.twimg.com/profile_images/1354264571800821768/_P1OPiGw_400x400.jpg"></ImgFile>
          <div>
            동물짤 모으는 나...
            <br />
            @miyari_s
          </div>
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <ImgFile src="https://pbs.twimg.com/profile_images/1377788434870202370/WRLz9Nqz_400x400.jpg"></ImgFile>
          <div>
            대환장 갤러리
            <br />
            @bighwanjang1
          </div>
          <Button theme="follow">Follow</Button>
        </UserCard>
        <UserCard>
          <p>Show more</p>
        </UserCard>
      </BannerBox>
      <BannerBox2>
        <h2>Trends for you</h2>
        <TopicCard>
          <div>
            Trending in South Korea
            <br />
            <h3>Front-end</h3>
            100K Tweets
          </div>
        </TopicCard>
        <TopicCard>
          <div>
            Trending in South Korea
            <br />
            <h3>다잇수할</h3>
            60.5K Tweets
          </div>
        </TopicCard>
        <TopicCard>
          <div>
            Music · Trending
            <br />
            <h3>백예린</h3>
            20.4K Tweets
          </div>
        </TopicCard>
        <TopicCard>
          <div>
            Trending in South Korea
            <br />
            <h3>항해99</h3>
            10K Tweets
          </div>
        </TopicCard>
        <TopicCard>
          <div>
            Trending in South Korea
            <br />
            <h3>D반 화이팅</h3>
            5K Tweets
          </div>
        </TopicCard>
        <TopicCard>
          <div>
            Traending in South Korea
            <br />
            <h3>취뽀하자🫶🏻</h3>
            2056 Tweets
          </div>
        </TopicCard>
      </BannerBox2>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 300px;
  background-color: white;
  position: fixed;
  right: 0px;
  height: 100%;
  border-left: 1px solid #ebebebd5;
`;

const SearchBox = styled.div`
  border: none;
  width: 90%;
  padding: 20px;
  & input {
    width: 270px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    background-color: rgb(247, 249, 249);
  }
`;

const BannerBox = styled.div`
  width: 90%;
  height: 250px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgb(247, 249, 249);
  display: grid;
  grid-template-rows: repeat (4, 1fr);
  & p {
    margin-right: 20px;
    text-align: left;
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
  background-color: rgb(247, 249, 249);
  display: grid;
  grid-template-rows: repeat (7, 1fr);
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
  justify-content: left;
  text-align: left;
  & button {
    position: fixed;
    right: 25px;
  }
  /* & :hover {
    width: 100%;
    height: 100%;
    background-color: #d5d5d5;
  } */
`;

const TopicCard = styled.div`
  width: 90%;
  margin-left: 25px;
  align-items: left;
`;

const ImgFile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 10px;
  display: flex;
`;

// border-color: rgb(247, 249, 249);
// background-color: rgb(247, 249, 249);
