import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Heading = styled.h1`
  font-size: 32px;
`;

export const OpinionWrapper = styled.div`
  width: 350px;
  height: 175px;
  background-color: ${pallete.VeryLightGray};
  color: ${pallete.VeryDarkBlue};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 10px 0 10px;
  user-select: none;
`;
export const UserAvatar = styled.img`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  height: 50px;
  width: 50px;
`;
export const UserName = styled.h2`
  font-size: 16px;
`;

export const OpinionText = styled.p`
  white-space: normal;
  text-align: center;
`;
