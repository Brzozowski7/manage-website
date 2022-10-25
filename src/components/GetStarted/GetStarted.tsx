import { GetStartedWrapper } from "./GetStarted.styles";

interface GetStartedProps {
  mobileDisplay: boolean;
}

export default function GetStarted({ mobileDisplay }: GetStartedProps) {
  return <GetStartedWrapper mobileDisplay={mobileDisplay}>Get Started</GetStartedWrapper>;
}
