import { MainWrapper } from "./Main.styles";
import OpinionsSection from "./OpinionsSection";
import StatisticsSection from "./StatisticsSection";
import UtilitiesSection from "./UtilitiesSection/UtilitiesSection";
import AdvertismentSection from "./AdvertismentSection";

export default function Main() {
  return (
    <MainWrapper>
      <StatisticsSection />
      <UtilitiesSection />
      <OpinionsSection />
      <AdvertismentSection />
    </MainWrapper>
  );
}
