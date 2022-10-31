import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const SectionWrapper = styled.section`
  background-color: ${pallete.BrightRed};
  color: ${pallete.VeryLightGray};
  display: flex;
  flex-directino: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100px;
  padding: 0 10vw;
  @media only screen and (max-width: 900px) {
    height: auto;
    flex-direction: column;
    gap: 30px;
    padding: 50px 0;
  }
`;

export const Heading = styled.h1`
  @media only screen and (max-width: 900px) {
    width: 70%;
    text-align: center;
  }
`;
