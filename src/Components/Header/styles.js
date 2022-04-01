import styled from "styled-components";
import LogoSvg from "./LogoSvg";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;

  width: 100%;

  background-color: ${(props) => props.theme.blue_400};

  z-index: 10000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 1080px) {
    padding: 20px 0;
  }
`;

export const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
