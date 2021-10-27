import styled, { css }  from 'styled-components';

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

  & >div {
    opacity: 0;
    transform: translate(0);
  }

  ${({ $isInView }) =>
    $isInView &&
    css`
     opacity: 1;
    `}
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  border-bottom: 3px solid white;
  
`