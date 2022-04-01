import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import TwoSidesSection from "../../Components/TwoSidesSection";
import TwoPicturesSection from "../../Components/TwoPicturesSection";
import { defaultTheme } from "../../Styles/themes";

import { Container } from "./styles";

import eggImg from "../../Assets/Sections/image-transform.jpg";
import glassImg from "../../Assets/Sections/image-stand-out.jpg";
import Testimonials from "../../Components/Testimonials";
import Mural from "../../Components/Mural";
import Footer from "../../Components/Footer";

const sections = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brandsgrow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    image: eggImg,
    reverse: false,
    buttonColor: "hsl(51, 100%, 49%)",
  },
  {
    title: "Stand out to the right audience",
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    image: glassImg,
    reverse: true,
    buttonColor: "hsl(7, 99%, 70%)",
  },
];

const Landing = () => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Home />

        {sections.map((item, index) => {
          return (
            <TwoSidesSection
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              reverse={item.reverse}
              buttonColor={item.buttonColor}
            />
          );
        })}

        <TwoPicturesSection />
        <Testimonials />
        <Mural />
        <Footer />
      </ThemeProvider>
    </Container>
  );
};

export default Landing;
