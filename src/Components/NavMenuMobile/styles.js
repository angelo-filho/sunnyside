import styled from "styled-components";
import { LineHorizontal3 } from "@styled-icons/fluentui-system-regular/LineHorizontal3";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  :active {
    filter: brightness(0.8);
  }
`;

export const Hamburger = styled(LineHorizontal3)`
  color: #fff;
  width: 34px;
`;

export const NavMenu = styled.nav`
  position: absolute;

  right: 0;
  top: 90px;
`;

export const Ul = styled.ul`
  position: relative;
  width: 90vw;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  gap: 30px 0;

  ::before {
    content: "";

    position: absolute;
    right: 0;
    top: -28px;

    width: 30px;
    height: 30px;

    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

    background-color: #fff;
    z-index: 100000;
  }
`;

export const A = styled.a`
  color: ${(props) => props.theme.darkgrayishBlue};
  font-size: 1.125rem;
`;

export const Contact = styled.a`
  padding: 15px 25px;

  background-color: ${(props) => props.theme.yellow};
  border-radius: 100px;

  font-family: "Fraunces";
  font-weight: 700;
  font-size: 0.875rem;
  color: #21282c;

  transition: 200ms;

  :hover {
    background-color: ${(props) => props.theme.blue_200};

    color: #fff;
  }
`;
