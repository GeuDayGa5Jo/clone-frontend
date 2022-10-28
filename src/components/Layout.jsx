import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Layoutdiv>{children}</Layoutdiv>;
};

export default Layout;

const Layoutdiv = styled.div`
  /* display: flex;
<<<<<<< HEAD
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh; */
=======
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; */
>>>>>>> de0df13a8dcaa4d936f09d3a003256564c7790c7
`;
