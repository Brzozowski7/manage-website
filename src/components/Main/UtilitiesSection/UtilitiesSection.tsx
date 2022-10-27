import { utilitiesArr } from "./UtilitiesSection.const";
import {
  SectionWrapper,
  GeneralInformationPart,
  SectionHeading,
  SectionDescription,
  UtilitiesPart,
  UtilityContainer,
  UtilityNumber,
  HeadingAndNumberWrapper,
  UtilityHeading,
  UtilityDescription,
} from "./UtilitiesSection.styles";

export default function UtilitiesSection() {
  return (
    <SectionWrapper>
      <GeneralInformationPart>
        <SectionHeading>What's different about Manage?</SectionHeading>
        <SectionDescription>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams
        </SectionDescription>
      </GeneralInformationPart>
      <UtilitiesPart>
        {utilitiesArr.map((utility) => {
          return (
            <UtilityContainer key={utility.id}>
              <HeadingAndNumberWrapper>
                <UtilityNumber>{utility.id}</UtilityNumber>
                <UtilityHeading>{utility.title}</UtilityHeading>
              </HeadingAndNumberWrapper>
              <UtilityDescription>{utility.description}</UtilityDescription>
            </UtilityContainer>
          );
        })}
      </UtilitiesPart>
    </SectionWrapper>
  );
}
