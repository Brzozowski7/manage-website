import styled from "styled-components";

export const CarouselItemWrapper = styled.div<{ width: string }>`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  height: 200px;
  width: ${(props) => props.width};
`;
