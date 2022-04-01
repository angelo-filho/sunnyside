import React from "react";

import {
  Container,
  Button,
  Hamburger,
  NavMenu,
  Ul,
  A,
  Contact,
} from "./styles";

const NavMenuMobile = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <Container>
      <Button onClick={() => setMenuActive(!menuActive)}>
        <Hamburger />
      </Button>
      {menuActive && (
        <NavMenu>
          <Ul>
            <li>
              <A href="#">About</A>
            </li>
            <li>
              <A href="#">Services</A>
            </li>
            <li>
              <A href="#">Projects</A>
            </li>
            <li>
              <Contact href="#">CONTACT</Contact>
            </li>
          </Ul>
        </NavMenu>
      )}
    </Container>
  );
};

export default NavMenuMobile;
