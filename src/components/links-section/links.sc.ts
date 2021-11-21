import styled from "styled-components";

export const LinksContainer = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  font-size: 2.5rem;
  line-height: 1.5;
  max-width: 64.875rem;
  margin-left: 14.5rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 31.25rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color};
  line-height: 1;
  text-decoration: none;
  border-bottom: 3px solid ${({ theme }) => theme.color};
  margin-bottom: 100px;
  padding-top: 0.6rem;
`;