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
  color: #dcb3fc;
  margin: 0;
  line-height: 3.1875rem;
`;

export const ModeTrigger = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 2.5rem;
  padding: 0;
  font-family: Bigilla;
`;

export const Year = styled.div`
  width: 5.5rem;
  color: white;
  font-size: 1.25rem;
  text-align: right;
  line-height: 1.625rem;
`;
