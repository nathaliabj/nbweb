import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75em;
  margin-top: 2.5rem;
`;

export const Nb = styled.h1`
  font-size: 3.1875rem;
  font-family: Bigilla;
  cursor: pointer;
  color: ${({ theme }) => theme.highlight};
  margin: 0;
  line-height: 3.1875rem;
`;


export const Year = styled.div`
  width: 5.5rem;
  color: ${({ theme }) => theme.color};
  font-size: 1.25rem;
  text-align: right;
  line-height: 1.625rem;
`;
