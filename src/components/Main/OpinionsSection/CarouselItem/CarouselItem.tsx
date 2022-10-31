import { CarouselItemWrapper } from "./CarouselItem.styles";

interface CarouselItemProps {
  children: React.ReactNode;
  width: string;
}

export default function CarouselItem({ children, width }: CarouselItemProps) {
  return <CarouselItemWrapper width={width}>{children}</CarouselItemWrapper>;
}
