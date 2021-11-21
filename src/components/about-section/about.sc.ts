import styled, { css } from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
`;

export const ContentContainer = styled.div`
  font-size: 2.4rem;
  line-height: 1.5;
  max-width: 64.875rem;
  margin-left: 14.5rem;
`;

export const Text = styled.p<{ $isInView: boolean }>`
  opacity: 0;

  ${({ $isInView }) =>
    $isInView &&
    css`
      opacity: 1;
    `}
`;

export const Underline = styled.span`
  position: absolute;
  background: none;
  opacity: 0.7;
  top: 0.7em;
  left: 0;
  height: 1.5rem;
  width: 0;
  z-index: -1;

  transition: all 0.5s ease;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  border-bottom: 3px solid ${({ theme }) => theme.color};
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
