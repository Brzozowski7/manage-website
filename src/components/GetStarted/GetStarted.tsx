import { GetStartedWrapper } from "./GetStarted.styles";

interface GetStartedProps {
  mobileDisplay: boolean;
  theme?: "orange" | "white";
}

export default function GetStarted({ mobileDisplay, theme="orange" }: GetStartedProps) {
  return (
    <GetStartedWrapper mobileDisplay={mobileDisplay} theme={theme}>
      Get Started
    </GetStartedWrapper>
  );
}
