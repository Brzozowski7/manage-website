import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
`;
export const MenuPartWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const MenuItem = styled.li`
  font-size: 12px;
  color: ${pallete.DarkGrayishBlue};
  &:hover {
    color: ${pallete.BrightRed};
    cursor: pointer;
  }
`;
