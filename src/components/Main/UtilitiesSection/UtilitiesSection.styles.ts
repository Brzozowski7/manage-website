import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const GeneralInformationPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    gap: 16px;
  }
`;
export const SectionHeading = styled.h1`
  width: 80%;
  font-weight: 700;
  font-size: 32px;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const SectionDescription = styled.p`
  width: 60%;
  color: ${pallete.DarkGrayishBlue};
  @media only screen and (max-width: 900px) {
    width: 80%;
    text-align: center;
  }
`;

export const UtilitiesPart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const UtilityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media only screen and (max-width: 900px) {
    padding: 0 0 0 16px;
    gap: 16px;
  }
`;

export const UtilityNumber = styled.div`
  padding: 8px 24px;
  border-radius: 24px;
  color: ${pallete.VeryLightGray};
  background-color: ${pallete.BrightRed};
  font-weight: 700;
  @media only screen and (max-width: 900px) {
    padding: 8px 16px;
  }
`;

export const HeadingAndNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media only screen and (max-width: 900px) {
    background-color: ${pallete.VeryPaleRed};
    border-radius: 24px 0 0 24px;
  }
`;

export const UtilityHeading = styled.h2`
  font-size: 16px;
  font-weight: 700;
  padding: 8px 0;
`;

export const UtilityDescription = styled.p`
  color: ${pallete.DarkGrayishBlue};
  margin-left: 86px;
  width: 70%;
  @media only screen and (max-width: 900px) {
    margin: 0;
    width: 90%;
  }
`;
