import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return <StButton {...props}>{props.children}</StButton>;
};

export default Button;

const StButton = styled.button`
  cursor: pointer;
  text-align: center;
  width: ${(props) => props.wd};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderR};
  border: 0px solid #222;
  transition: 0.5 ease-in-out;
  ${({ theme }) => {
    switch (theme) {
      case "follow":
        return css`
          background-color: rgb(15, 20, 25);
          border-radius: 25px;
          color: white;
          font-size: 13px;
          width: 77px;
          height: 32px;
        `;
      case "tweet-sm":
        return css`
          background-color: #1d9bf0;
          border-radius: 27px;
          color: white;
          font-size: 19px;
          width: 110px;
          height: 55px;
          font-weight: 700;
          margin: 0 auto;
        `;
      case "tweet-lg":
        return css`
          background-color: #1d9bf0;
          border-radius: 35px;
          color: white;
          font-size: 24px;
          width: 310px;
          height: 70px;
          font-weight: 700;
          margin: 0 auto;
        `;
      case "logout-btn":
        return css`
          background-color: rgb(15, 20, 25);
          border-radius: 35px;
          color: white;
          font-size: 20px;
          width: 345px;
          height: 60px;
          font-weight: 700;
          margin: 0 auto;
        `;
      case "cancel":
        return css`
          background-color: white;
          border-radius: 35px;
          font-size: 20px;
          width: 345px;
          height: 60px;
          font-weight: 700;
          margin: 0 auto;
          border: 0.5px solid rgb(203, 206, 211);
          :hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `;
      case "login-btn":
        return css`
          background-color: ${(props) => props.bgColor || "white"};
          color: ${(props) => props.fontC || "#1d9bf0;"};
          border-radius: 35px;
          font-size: 20px;
          width: ${(props) => props.wd || "405px"};
          height: ${(props) => props.hg || "55px"};
          font-weight: 700;
          margin: 0 auto;
          border: 0.5px solid rgb(203, 206, 211);
          :hover {
            background-color: rgba(29, 155, 240, 0.1);
          }
        `;
      case "next-btn":
        return css`
          background-color: rgba(47, 47, 47, 0.5);
          border-radius: 35px;
          color: white;
          font-size: 23px;
          width: 100%;
          height: 65px;
          font-weight: 700;
          margin: 0 auto;
        `;

      default:
        return css`
          width: 50px;
        `;
    }
  }};
`;
