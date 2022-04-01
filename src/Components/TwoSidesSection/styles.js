import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}

  max-height: fit-content;

  @media (max-width: 1080px) {
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const ImageSide = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const TextSide = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-right: 100px;
  padding-left: 160px;

  ${(props) =>
    props.reverse
      ? css`
          padding-right: 160px;
          padding-left: 100px;
        `
      : css`
          padding-right: 100px;
          padding-left: 160px;
        `}

  @media (max-width: 1080px) {
    padding: 50px 40px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 50vh;
    padding: 210px 20px;

    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: Fraunces;
  font-weight: 900;
  font-size: 2.625rem;
  color: ${(props) => props.theme.veryDarkDesaturatedBlue};

  margin-bottom: 32px;

  @media (max-width: 1080px) {
    font-size: 2.375rem;
  }
`;

export const P = styled.p`
  font-size: 1.125rem;
  line-height: 28px;
  color: ${(props) => props.theme.darkgrayishBlue};

  margin-bottom: 32px;
`;

export const A = styled.a`
  position: relative;
  display: flex;
  font-family: Fraunces;
  font-weight: 900;
  color: ${(props) => props.theme.veryDarkDesaturatedBlue};
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -11px;

    width: 150px;
    height: 8px;

    background-color: ${(props) => props.buttonColor};
    border-radius: 50px;

    opacity: 0.2;
    z-index: -90;
    transition: ease-in-out 0.1s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;
