import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { RiHome7Line } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.myPage.myPage);

  const userEmail = user.memberEmail;
  const userIdSplit = (userEmail || "").split("@");
  const userId = userIdSplit[0];

  // console.log(user);

  return (
    <Box>
      <BlueBird>
        <Size
          onClick={() => {
            navigate("/");
          }}
        >
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </Size2>
        </Size>
      </BlueBird>

      <Category>
        <Size>
          <Size2
            onClick={() => {
              navigate("/home");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
              </g>
            </svg>
          </Size2>
          <p
            onClick={() => {
              navigate("/home");
            }}
          >
            HOME
          </p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path>
              </g>
            </svg>
          </Size2>
          <p>Explore</p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
              </g>
            </svg>
          </Size2>
          <p>Notifications</p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
              </g>
            </svg>
          </Size2>
          <p>Messages</p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
              </g>
            </svg>
          </Size2>
          <p>Bookmarks</p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
              </g>
            </svg>
          </Size2>
          <p>Lists</p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2
            onClick={() => {
              navigate(`/profile/${user.memberId}`);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
              </g>
            </svg>
          </Size2>
          <p
            onClick={() => {
              navigate("/profile/1");
            }}
          >
            Profile
          </p>
        </Size>
      </Category>
      <Category>
        <Size>
          <Size2>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            >
              <g>
                <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
              </g>
            </svg>
          </Size2>
          <p>More</p>
        </Size>
      </Category>
      <BlueSize>
        <Size2>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
          >
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
        </Size2>
      </BlueSize>
      <Bottom>
        <Profile>
          <ImgBox>
            <ImgFile src={user.Profile}></ImgFile>
          </ImgBox>
          <User>
            <p>
              {user.memberName}
              <br />@{userId}
            </p>
          </User>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </g>
          </svg>
        </Profile>
      </Bottom>
    </Box>
  );
};

export default Header;

const Box = styled.div`
  height: 100%;
  width: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* position: fixed; */
  border-right: 1px solid #ebebebd5;
  @media screen and (max-width: 1290px) {
    p {
      display: none;
      opacity: 0;
    }
  }
`;

const Size2 = styled.div`
  width: 24px;
  height: 24px;
`;

const Category = styled.div`
  width: 200px;
  display: inline-flex;
  & p {
    font-size: 16px;
    padding: 10px;
    margin-left: 15px;
    text-align: left;
    justify-content: left;
  }
  /* @media screen and (max-width: 1292px) {
    position: fixed;
    left: 0;
  } */
`;

const Size = styled.div`
  cursor: auto;
  width: 250px;
  height: 50px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: #dddddd88;
    transition: all 0.5s;
    cursor: pointer;
  }
`;

const BlueSize = styled.div`
  cursor: auto;
  width: 50px;
  height: 50px;
  padding: 5px;
  border: none;
  /* display: block; */
  border-radius: 60px;
  margin: 14px 14px 14px 14px;
  fill: #fff;
  background-color: #1d9bf0;
  display: flex;
  justify-content: center;
  align-items: center;
  & :hover {
    cursor: pointer;
    transition: all 0.5s;
  }
`;

const BlueBird = styled.button`
  cursor: auto;
  width: 50px;
  height: 50px;
  padding: 5px;
  border: none;
  /* display: block; */
  border-radius: 60px;
  margin-top: 20px;
  fill: #1d9bf0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  /* & :hover {
    transition: all 0.5s;
    background-color: #afd1f7;
    cursor: pointer;
  } */
`;

const Profile = styled.div`
  width: 100%;
  height: 60px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  & p {
    text-align: lefts;
    color: black;
    font-size: 12px;
    margin-left: 10px;
  }
  & svg {
    margin-left: 15px;
  }
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 30px;
  justify-content: center;
  cursor: pointer;
  /* & div:hover {
    transition: all 0.5s;
    background-color: #dddddd88;
    border-radius: 50px;
    cursor: pointer;
  } */
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
`;

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  border: 1px solid #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 130px;
`;

const ImgFile = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
