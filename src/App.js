import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/GlobalStyle";
import Page from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = {
  mainC: "#1d9bf0",
};
