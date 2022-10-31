import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border-radius: 24px;
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: ${pallete.BrightRed};
  color: ${pallete.VeryLightGray};
  width: 60px;
  padding: 12px;
  border-radius: 18px;
`;

export const ErrorMessage = styled.p`
  color: ${pallete.BrightRed};
  font-size: 12px;
  padding: 0 12px;
`;
