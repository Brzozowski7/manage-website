import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${pallete.VeryDarkBlue};
  color: ${pallete.VeryLightGray};
  width: 100%;
  padding: 50px 10%;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

export const LogoAndSocialMediasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  @media only screen and (max-width: 900px) {
    width: 100px;
  }
`;

export const SocialMediasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 50px;
  right: 10vw;
  color: ${pallete.DarkGrayishBlue};
  font-size: 8px;
  @media only screen and (max-width: 900px) {
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
`;
