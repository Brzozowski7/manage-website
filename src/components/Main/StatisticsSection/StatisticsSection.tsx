import GetStarted from "../../GetStarted";
import {
  SectionWrapper,
  DescriptivePart,
  GraphsPart,
  Heading,
  Description,
  GraphsImage
} from "./StatisticsSection.styles";
import graphsSVG from "../../../images/illustration-intro.svg";

export default function StatisticsSection() {
  return (
    <SectionWrapper>
      <DescriptivePart>
        <Heading>Bring everyone together to build better products.</Heading>
        <Description>
          Manage makes it simple for software teams to play day-to-day tasks
          while keeping the larger team goals in view.
        </Description>
        <GetStarted mobileDisplay={true} />
      </DescriptivePart>
      <GraphsPart>
        <GraphsImage src={graphsSVG} alt="graphs" />
      </GraphsPart>
    </SectionWrapper>
  );
}
