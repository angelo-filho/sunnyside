import React from "react";

import {
  Container,
  PictureWrapper,
  TextWrapper,
  Title,
  Description,
  Picture,
} from "./styles";

import cherryImg from "../../Assets/Sections/image-graphic-design.jpg";
import orangeImg from "../../Assets/Sections/image-photography.jpg";
import { useTheme } from "styled-components";

const TwoPicturesSection = () => {
  const theme = useTheme();

  return (
    <Container>
      <PictureWrapper>
        <TextWrapper>
          <Title color={theme.darkDesaturatedCyan}>Graphic Design</Title>

          <Description color={theme.darkModerateCyan}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </Description>
        </TextWrapper>

        <Picture src={cherryImg} />
      </PictureWrapper>

      <PictureWrapper>
        <Picture src={orangeImg} />

        <TextWrapper>
          <Title color={theme.darkBlue}>Photography</Title>

          <Description color={theme.darkBlue}>
            Increase your credibility by getting the most stunning high-quality
            photos that improve your business image
          </Description>
        </TextWrapper>
      </PictureWrapper>
    </Container>
  );
};

export default TwoPicturesSection;
