import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderWrapper, Logo, StyledFontAwesomeIcon } from "./Header.styles";
import Menu from "./Menu";
import GetStartedBtn from "../GetStarted";
import logoSVG from "../../images/logo.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logoSVG} alt="logo" />
      <Menu />
      <GetStartedBtn mobileDisplay={false} />
      <StyledFontAwesomeIcon icon={faBars} />
    </HeaderWrapper>
  );
}
