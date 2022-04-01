import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: min(100vh, 1000px);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${(prop) => prop.src});
  background-position-x: center;
  background-size: cover;
  background-position-y: bottom;
`;

export const Heading = styled.h2`
  margin-top: 25vh;
  margin-bottom: 7vh;
  padding: 0 2rem;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.125rem;
  font-family: Fraunces;
  font-weight: 900;
  font-size: 3rem;
  color: #fff;

  @media (max-width: 800px) {
    padding: 0 0;
    font-size: 2.5rem;
    letter-spacing: 10px;
  }
`;

export const Arrow = styled.img``;
