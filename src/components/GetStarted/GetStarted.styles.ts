import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const GetStartedWrapper = styled.div<{ mobileDisplay: boolean }>`
  background-color: ${pallete.BrightRed};
  color: ${pallete.VeryLightGray};
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 12px;
  &:hover {
    background-color: ${pallete.VeryPaleRed};
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.mobileDisplay ? "inline-block" : "none")};
  }
`;
