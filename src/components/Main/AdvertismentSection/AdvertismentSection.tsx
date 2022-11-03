import { SectionWrapper, Heading } from "./AdvertismentSection.styles";
import GetStarted from "../../GetStarted";

export default function AdvertismentSection() {
  return (
    <SectionWrapper>
      <Heading>Simplify how your team works today.</Heading>
      <GetStarted mobileDisplay theme="white" />
    </SectionWrapper>
  );
}
