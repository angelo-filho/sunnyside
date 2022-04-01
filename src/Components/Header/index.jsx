import React from "react";

import { Wrapper, Container, Logo } from "./styles";

import logoSvg from "../../Assets/logo.svg";
import { useWindowSize } from "../../Hooks/useWindowSize";
import NavMenuMobile from "../NavMenuMobile";
import NavMenuDesktop from "../NavMenuDesktop";

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <Wrapper>
      <Container>
        <Logo src={logoSvg} />
        {windowSize.width > 1080 ? <NavMenuDesktop /> : <NavMenuMobile />}
      </Container>
    </Wrapper>
  );
};

export default Header;
