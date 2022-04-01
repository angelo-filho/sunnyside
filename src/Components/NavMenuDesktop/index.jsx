import React from "react";

import { Nav, A, Contact } from "./styles";

const NavMenuDesktop = () => {
  return (
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
  );
};

export default NavMenuDesktop;
