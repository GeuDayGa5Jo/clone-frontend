import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/GlobalStyle";
import Routers from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = {
  mainC: "#1d9bf0",
};
