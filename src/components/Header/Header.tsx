import { Dispatch, SetStateAction} from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { HeaderWrapper, Logo, MenuIcon } from "./Header.styles";
import NavbarMenu from "./Menu";
import GetStarted from "../GetStarted";
import logoSVG from "../../images/logo.svg";

interface HeaderProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isMenuActive, setIsMenuActive }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo src={logoSVG} alt="logo" />
      <NavbarMenu isMenuActive={isMenuActive} />
      <GetStarted mobileDisplay={false} />
      {isMenuActive ? (
        <MenuIcon icon={faX} onClick={() => setIsMenuActive(false)} />
      ) : (
        <MenuIcon icon={faBars} onClick={() => setIsMenuActive(true)} />
      )}
    </HeaderWrapper>
  );
}
