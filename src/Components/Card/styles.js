import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 350px;
`;

export const Image = styled.img`
  width: 80px;
  margin-bottom: 64px;

  border-radius: 50%;
`;

export const Description = styled.p`
  margin-bottom: 64px;
  text-align: center;
  line-height: 1.75rem;
  color: ${(props) => props.theme.veryDarkGrayishBlue};
`;

export const Name = styled.h4`
  margin-bottom: 10px;

  font-family: "Fraunces";
  font-weight: 900;
  font-size: 1.125rem;
  color: ${(props) => props.theme.black};
`;

export const Role = styled.span`
  color: ${(props) => props.theme.grayishBlue};
`;
