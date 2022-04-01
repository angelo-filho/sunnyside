import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Barlow", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    background-color: #FFFBF8;
    scroll-behavior: smooth;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, p {
    font-size: 1.125rem;
  }

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`;
