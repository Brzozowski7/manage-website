import Header from "../components/Header";
import Main from "../components/Main";
import { Wrapper, GlobalStyle } from "./App.styles";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
