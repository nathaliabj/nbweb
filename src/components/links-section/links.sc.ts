import styled from "styled-components";

export const LinksContainer = styled.section`
  width: 100%;
  padding-bottom: 3em;
`;

export const Content = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 64.875rem;

  @media screen and (min-width: 768px) {
    margin-left: 14.5rem;
    font-size: 2.5rem;
  }
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

export const Underline = styled.span`
  position: absolute;
  background: none;
  opacity: 0.7;
  top: 0.8em;
  left: 0;
  height: 1.5rem;
  width: 0;
  z-index: -1;

  transition: all 0.5s ease;
`;

export const LinkWrapper = styled.div`
  position: relative;
  display: inline;
  width: fit-content;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    ${Underline} {
      width: 100%;
      background-color: ${({ theme }) => theme.highlight};
    }
    ${Link} {
      border-bottom: none;
    }
  }
`;
