import React from "react";
import styled, { css } from "styled-components";

const Input = (props) => {
  return <StInput {...props}>{props.children}</StInput>;
};

export default Input;

const StInput = styled.input`
  cursor: text;
  width: ${(props) => props.wd};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border: 1px solid #222;
  border-radius: ${(props) => props.borderR};
  transition: 0.5 ease-in-out;
  ${({ theme }) => {
    switch (theme) {
      case "signup":
        return css`
          display: flex;
          width: 100%;
          height: 75px;
          border-radius: 6px;
          font-size: 24px;
          padding: 0 10px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin: ${(props) => props.mg};
        `;

      default:
        return css`
          width: 50px;
        `;
    }
  }};
`;
