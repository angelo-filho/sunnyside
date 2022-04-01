import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PictureWrapper = styled.div`
  position: relative;

  width: 50%;

  min-height: 700px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Picture = styled.img`
  display: block;

  width: 100%;
  min-height: 740px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  padding: 0 23% 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  text-align: center;

  @media (max-width: 800px) {
    padding: 0 5% 20%;
  }
`;

export const Title = styled.h3`
  font-family: "Fraunces";
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => props.color};

  margin-bottom: 28px;
`;

export const Description = styled.p`
  line-height: 1.75rem;
  color: ${(props) => props.color};
`;
