import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 0 20px;

  background-color: #3dbeff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 34px;
  color: #fff;

  cursor: pointer;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`;

export const A = styled.a`
  color: #fff;
`;

export const Contact = styled.a`
  padding: 14px 25px;

  background-color: #fff;
  border-radius: 100px;

  color: ${(props) => props.theme.blue_400};

  transition: 200ms;

  :hover {
    background-color: ${(props) => props.theme.blue_200};

    color: #fff;
  }
`;
