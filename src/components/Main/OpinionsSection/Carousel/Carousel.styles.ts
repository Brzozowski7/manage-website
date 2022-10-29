import styled from "styled-components";
import { pallete } from "../../../../misc/pallete";


export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 90%;
`;
export const Inner = styled.div<{ translateX: number }>`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: ${(props) => `translateX(-${props.translateX}%)`};
`;

export const PaginationDotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const PaginationDot = styled.div<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid ${pallete.BrightRed};
  background-color: ${(props) =>
    props.active ? pallete.BrightRed : pallete.VeryLightGray};
`;
