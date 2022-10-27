import { MainWrapper } from "./Main.styles";
import StatisticsSection from "./StatisticsSection";
import UtilitiesSection from "./UtilitiesSection/UtilitiesSection";

export default function Main() {
  return (
    <MainWrapper>
      <StatisticsSection />
      <UtilitiesSection />
    </MainWrapper>
  );
}
