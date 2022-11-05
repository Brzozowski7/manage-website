import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ isMenuActive: boolean }>`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body{
    font-family: 'Be Vietnam Pro', sans-serif;
    overflow-x:hidden;
    overflow-y:${(props) => (props.isMenuActive ? "hidden" : "auto")};
}
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media only screen and (max-width: 900px) {
    width: 100vw;
  }
`;

export const Overlay = styled.div<{ isMenuActive: boolean }>`
  display: ${(props) => (props.isMenuActive ? "block" : "none")};
  position: fixed;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.07636558041185226) 100%
  );
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
