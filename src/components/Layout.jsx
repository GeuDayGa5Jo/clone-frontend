import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <LayoutDiv>
      <Header />
    </LayoutDiv>
  );
};

export default Layout;

const LayoutDiv = styled.div`
  width: 1200px;
  display: flex;
  border: 1px dashed gray;
  justify-content: left;
  margin: 0 auto;
  height: 100vh;
`;
