import { GetStartedWrapper } from "./GetStarted.styles";

interface GetStartedBtnProps {
  mobileDisplay: boolean;
}

export default function GetStartedBtn({ mobileDisplay }: GetStartedBtnProps) {
  return <GetStartedWrapper mobileDisplay={mobileDisplay}>Get Started</GetStartedWrapper>;
}
