import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
