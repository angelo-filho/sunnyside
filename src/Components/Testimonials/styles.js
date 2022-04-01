import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 120px 0;

  @media (max-width: 800px) {
    padding: 80px 0px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 64px;

  font-family: "Fraunces";
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${(props) => props.theme.grayishBlue};
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 90px 32px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;
