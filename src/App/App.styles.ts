import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body{
    font-family: 'Be Vietnam Pro', sans-serif;
    overflow-x:hidden;
}
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  @media only screen and (max-width: 900px) {
    width: 100vw;
  }
`;
