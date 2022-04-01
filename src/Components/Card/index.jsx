import React from "react";

import { Container, Image, Description, Name, Role } from "./styles";

const Card = ({ image, description, name, role }) => {
  return (
    <Container>
      <Image src={image} />

      <Description>{description}</Description>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Container>
  );
};

export default Card;
