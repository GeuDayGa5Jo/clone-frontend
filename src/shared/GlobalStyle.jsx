import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: "Apple SD Gothic Neo",'Noto Sans KR', sans-serif;
  }

  body {
    overflow: hidden;
    display: flex;
    /* justify-content: center; */
    /* max-width: 1200px; */
    /* position:relative; */
  }

  html {
    font-size: 12px;
  }
`;

export default GlobalStyle;
