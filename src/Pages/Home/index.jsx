import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../../Components/Header";
import { defaultTheme } from "../../Styles/themes";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>
    </Container>
  );
};

export default Home;
