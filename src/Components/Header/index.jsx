import React from "react";

import { Wrapper, Container, Logo, Nav, A, Contact } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Logo>sunnyside</Logo>
        <Nav>
          <ul>
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
          </ul>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;
