import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderWrapper = styled.header`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media only screen and (max-width: 900px) {
    padding: 20px;
    width: 100%;
  }
`;

export const Logo = styled.img`
  @media only screen and (max-width: 900px) {
    height: 18px;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  display: none;
  z-index: 5;
  @media only screen and (max-width: 900px) {
    display: inline-block;
  }
`;
