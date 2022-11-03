import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Wrapper, GlobalStyle } from "./App.styles";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
