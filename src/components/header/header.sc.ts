import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75em;
  padding-top: 2.5rem;
  max-width: 80rem;
  margin: 0 auto 1.4375rem;
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

export const ModeTrigger = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color};
  font-size: 2.5rem;
  padding: 0;
  font-family: Bigilla;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;