import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderWrapper, Logo, BurgerMenu } from "./Header.styles";
import NavbarMenu from "./Menu";
import GetStartedBtn from "../GetStarted";
import logoSVG from "../../images/logo.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logoSVG} alt="logo" />
      <NavbarMenu />
      <GetStartedBtn mobileDisplay={false} />
      <BurgerMenu icon={faBars} />
    </HeaderWrapper>
  );
}
