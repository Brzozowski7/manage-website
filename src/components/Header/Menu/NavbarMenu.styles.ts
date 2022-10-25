import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  font-size: 12px;
  font-weight: 700;
  color: ${pallete.DarkGrayishBlue};
  &:hover {
    color: ${pallete.DarkBlue};
    cursor: pointer;
  }
`;
