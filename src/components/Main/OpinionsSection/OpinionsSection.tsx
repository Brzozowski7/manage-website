import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { opinions } from "./OpinionsSection.const";
import {
  SectionWrapper,
  Heading,
  OpinionWrapper,
  UserAvatar,
  UserName,
  OpinionText,
} from "./OpinionsSection.styles";
import useScreenWidth from "./useScreenWidth";
import GetStarted from "../../GetStarted";

export default function OpinionsSection() {
  const { ammountToShow } = useScreenWidth();

  return (
    <SectionWrapper>
      <Heading>What they've said</Heading>
      <Carousel toShow={ammountToShow}>
        {opinions.map((item) => {
          return (
            //@ts-ignore-error
            // width is given by React.cloneElement in Carousel.tsx
            <CarouselItem key={item.name}>
              <OpinionWrapper>
                <UserAvatar src={item.image} />
                <UserName>{item.name}</UserName>
                <OpinionText>{item.opinion}</OpinionText>
              </OpinionWrapper>
            </CarouselItem>
          );
        })}
      </Carousel>
      <GetStarted mobileDisplay />
    </SectionWrapper>
  );
}
