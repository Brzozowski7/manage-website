import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media only screen and (max-width: 900px) {
    padding: 20px;
  }
`;

export const Logo = styled.img`
  @media only screen and (max-width: 900px) {
    height: 18px;
  }
`;

export const BurgerMenu = styled(FontAwesomeIcon)`
  display: none;
  @media only screen and (max-width: 900px) {
    display: inline-block;
  }
`;
