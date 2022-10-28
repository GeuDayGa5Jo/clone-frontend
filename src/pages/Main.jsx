import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Main = () => {
  return (
    <Stdiv>
      <Button theme="follow">Follow</Button>

      <Button theme="tweet-sm">Tweet</Button>

      <Button theme="tweet-lg">Tweet</Button>

      <Button theme="logout-btn">Log out</Button>

      <Button theme="cancel">Cancel</Button>

      <Button theme="login-btn">Login</Button>
    </Stdiv>
  );
};

export default Main;

const Stdiv = styled.div`
  margin: 200px;
`;
