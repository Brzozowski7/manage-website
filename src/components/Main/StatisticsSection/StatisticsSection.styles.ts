import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 525px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`;

export const DescriptivePart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const GraphsImage = styled.img`
  width: 50%;
  height: 100%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  width: 90%;
  font-weight: 700;
  font-size: 42px;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 36px;
  }
`;

export const Description = styled.p`
  width: 80%;
  color: ${pallete.DarkGrayishBlue};
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;
