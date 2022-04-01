import styled from "styled-components";
import { LogoSvg } from "./LogoSvg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 48px 0;

  background-color: ${(props) => props.theme.lightCyan};

  a {
    color: ${(props) => props.theme.darkDesaturatedCyan};
    transition: ease-in-out 0.1s;

    :hover {
      color: white;
    }
  }

  @media (max-width: 1080px) {
    padding: 68px;
  }
`;

export const Logo = styled(LogoSvg)``;

export const Ul = styled.ul`
  display: flex;
  gap: 48px;
  margin-top: 32px;
  margin-bottom: 64px;
`;

export const A = styled.a`
  font-size: 16px;
`;

export const SocialMedias = styled.ul`
  display: flex;
  gap: 30px;

  & svg {
    width: 26px;
  }
`;
