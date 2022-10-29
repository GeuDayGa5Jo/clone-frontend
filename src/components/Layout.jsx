import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Header from "./Header";

const Layout = () => {
  return (
    <LayoutDiv>
      <Header />
      <Banner />
    </LayoutDiv>
  );
};

export default Layout;

const LayoutDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  /* border: 1px dashed gray; */
  height: 100vh;
  @media screen and (max-width: 1292px) {
    Header {
      p {
        display: none;
        opacity: 0;
      }
    }
  }
`;
