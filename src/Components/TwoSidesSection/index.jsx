import React from "react";

import { Container, ImageSide, Image, TextSide, Title, P, A } from "./styles";

const TwoSidesSection = ({
  image,
  title,
  description,
  reverse = false,
  buttonColor,
}) => {
  return (
    <Container reverse={reverse}>
      <TextSide reverse={reverse}>
        <Title>{title}</Title>
        <P>{description}</P>
        <A href="#" buttonColor={buttonColor}>
          LEARN MORE
        </A>
      </TextSide>
      <ImageSide>
        <Image src={image} />
      </ImageSide>
    </Container>
  );
};

export default TwoSidesSection;
