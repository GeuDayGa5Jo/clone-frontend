import React, { Children } from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Layoutdiv>{children}</Layoutdiv>;
};

export default Layout;

const Layoutdiv = styled.div`
  display: flex;
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
