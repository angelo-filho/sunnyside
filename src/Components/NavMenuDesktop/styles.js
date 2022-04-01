import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`;

export const A = styled.a`
  color: #fff;
  font-size: 1rem;
`;

export const Contact = styled.a`
  padding: 15px 25px;

  background-color: #fff;
  border-radius: 100px;

  font-family: "Fraunces";
  font-weight: 700;
  font-size: 0.875rem;
  color: #21282c;

  transition: 200ms;

  :hover {
    background-color: ${(props) => props.theme.blue_200};

    color: #fff;
  }
`;
