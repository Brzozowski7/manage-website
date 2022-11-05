import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const MenuWrapper = styled.ul<{ isMenuActive: boolean }>`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.isMenuActive ? "flex" : "none")};
    position: absolute;
    top: 50px;
    width: 90%;
    height: 375px;
    background-color: ${pallete.White};
    border: 0.3px ${pallete.DarkGrayishBlue} solid;
    border-radius: 12px;
    flex-direction: column;
    justify-content: space-around;
  }
  z-index: 5;
`;
export const MenuItem = styled.li`
  font-size: 12px;
  font-weight: 700;
  color: ${pallete.DarkGrayishBlue};
  &:hover {
    color: ${pallete.DarkBlue};
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
    color: ${pallete.DarkBlue};
  }
`;
