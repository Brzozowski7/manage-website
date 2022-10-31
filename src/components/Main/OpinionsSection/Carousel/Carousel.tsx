import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  CarouselWrapper,
  PaginationDot,
  Inner,
  PaginationDotsWrapper,
} from "./Carousel.styles";

interface CarouselProps {
  children: React.ReactElement[];
  toShow: number;
}

export default function Carousel({ children, toShow }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const translateValue = activeIndex * (1 / toShow) * 100;
  const widthValue = `${(1 / toShow) * 100}%`;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > React.Children.count(children) - toShow) {
      newIndex = React.Children.count(children) - toShow;
    }

    setActiveIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => updateIndex(activeIndex - 1),
    onSwipedLeft: () => updateIndex(activeIndex + 1),
  });

  return (
    <>
      <CarouselWrapper {...swipeHandlers}>
        <Inner translateX={translateValue}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              width: widthValue,
            });
          })}
        </Inner>
      </CarouselWrapper>
      {toShow === 1 && (
        <PaginationDotsWrapper>
          {React.Children.map(children, (child, index) => {
            return <PaginationDot key={index} active={index === activeIndex} />;
          })}
        </PaginationDotsWrapper>
      )}
    </>
  );
}
