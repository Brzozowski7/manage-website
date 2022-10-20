import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    font-family: 'Be Vietnam Pro', sans-serif;
    width:100vw;
    height:100vh;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin-left: 10%;
`;
