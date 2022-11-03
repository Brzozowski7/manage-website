import {
  FooterWrapper,
  LogoAndSocialMediasWrapper,
  Logo,
  SocialMediasWrapper,
  Copyright,
} from "./Footer.styles";
import logoSVG from "../../images/logo-white.svg";
import { socialMedias } from "./Footer.const";
import FooterMenu from "./FooterMenu";
import InboxForm from "./InboxForm";

export default function Footer() {
  return (
    <FooterWrapper>
      <LogoAndSocialMediasWrapper>
        <Logo src={logoSVG} alt="logo" />
        <SocialMediasWrapper>
          {socialMedias.map((item) => {
            return <img src={item.logo} alt={item.name} key={item.id} />;
          })}
        </SocialMediasWrapper>
      </LogoAndSocialMediasWrapper>
      <FooterMenu />
      <InboxForm />
      <Copyright>Copyright 2020. All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
}
