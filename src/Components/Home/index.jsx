import React from "react";

import { Container, Arrow, Heading } from "./styles";

import bgImg from "../../Assets/Sections/image-header.jpg";
import arrowImg from "../../Assets/icon-arrow-down.svg";

const Home = () => {
  return (
    <Container src={bgImg}>
      <Heading>We are creatives</Heading>
      <Arrow src={arrowImg} />
    </Container>
  );
};

export default Home;
