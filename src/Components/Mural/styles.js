import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "a b c d";

  @media (max-width: 800px) {
    grid-template-areas:
      "a b"
      "c d";
  }
`;

export const Image = styled.img`
  grid-area: ${(props) => props.areaName};
  display: block;
  width: 100%;
`;
