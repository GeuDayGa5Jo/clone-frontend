import React from "react";
import styled from "styled-components";

const SignUpNav = (props) => {
  return <StSignUpNav {...props}>{props.children}</StSignUpNav>;
};

export default SignUpNav;

const StSignUpNav = styled.nav`
  background-color: ${(props) => props.theme.mainC};
  width: 100%;
  height: 100px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
