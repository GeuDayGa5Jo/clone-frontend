import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import { delBoardContent } from "../redux/modules/BoardContentSlice";

const TweetCard = ({ id }) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  return (
    <CardBox>
      <Dot>
        <Button onClick={(e) => setDropdown(!dropdown)}>
          {dropdown ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
            >
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
            >
              <g>
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </g>
            </svg>
          )}
        </Button>
      </Dot>
      <DropBox>
        <Dropdown visibility={dropdown}>
          <DropButton
            onClick={() => {
              dispatch(delBoardContent(id));
            }}
          >
            삭제
          </DropButton>
        </Dropdown>
      </DropBox>
      <Card>
        <ImgFile src="https://pbs.twimg.com/profile_images/1585648241298636800/tii40Gv2_400x400.jpg"></ImgFile>
        <UserBox>
          <TextBox>
            <h3>덕수덕수야덕수야덕수야덕수야</h3>
            <p>@soyoung</p>
          </TextBox>
          <span>무슨 일이 일어나고 있나요?</span>
        </UserBox>
      </Card>
      <Menu>
        <MenuIcon>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
          >
            <g>
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
            </g>
          </svg>
        </MenuIcon>
        {/* {board.commentCount} */}
        <MenuIcon>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
          >
            <g>
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
            </g>
          </svg>
        </MenuIcon>
        <MenuIcon>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
          >
            <g>
              <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
            </g>
          </svg>
        </MenuIcon>
      </Menu>
    </CardBox>
  );
};

export default TweetCard;

const CardBox = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e9e9e9;
`;

const Card = styled.div`
  margin-top: 20px;
  display: flex;
  & h3 {
    width: 100%;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 15px;
    vertical-align: auto;
  }
  & p {
    margin-left: 5px;
    margin-top: 10px;
    font-size: 15px;
    color: #536471;
  }
  & span {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const ImgFile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Dot = styled.div`
  width: 20px;
  float: right;
  margin-right: 10px;
  & :hover {
    cursor: pointer;
  }
`;

const MenuIcon = styled.button`
  width: 20px;
  position: grid;
  grid-template-columns: repeat(3, 1fr);
  display: inline-flex;
  border: none;
  background-color: transparent;

  & :hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DropBox = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  left: 570px;
  top: 10px;
  background-color: transparent;
`;

const DropButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  margin: 5px 0px 5px 0px;
  background-color: transparent;
  position: absolute;
  cursor: pointer;

  margin-bottom: 20px;
  &:nth-child(1) {
    margin-bottom: 25px;
  }
`;
