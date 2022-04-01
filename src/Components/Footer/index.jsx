import React from "react";

import { Container, Logo, Ul, A, SocialMedias } from "./styles";

import {
  FacebookSquare,
  Instagram,
  Pinterest,
  Twitter,
} from "@styled-icons/fa-brands";

const Footer = () => {
  return (
    <Container>
      <Logo />
      <nav>
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
        </Ul>
      </nav>
      <SocialMedias>
        <li>
          <A href="#">
            <FacebookSquare />
          </A>
        </li>
        <li>
          <A href="#">
            <Instagram />
          </A>
        </li>
        <li>
          <A href="#">
            <Twitter />
          </A>
        </li>
        <li>
          <A href="#">
            <Pinterest />
          </A>
        </li>
      </SocialMedias>
    </Container>
  );
};

export default Footer;
