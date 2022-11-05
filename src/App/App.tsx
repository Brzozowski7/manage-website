import { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Wrapper, GlobalStyle, Overlay } from "./App.styles";
import useScreenWidth from "../hooks/useScreenWidth";
function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { isMobile } = useScreenWidth();

  useEffect(() => {
    if (!isMobile) {
      setIsMenuActive(false);
    }
  }, [isMobile]);

  return (
    <Wrapper>
      <GlobalStyle isMenuActive={isMenuActive} />
      <Overlay isMenuActive={isMenuActive} />
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
