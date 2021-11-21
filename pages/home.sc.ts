import styled from 'styled-components'


export const HomeWrapper = styled.div``;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #171a22;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const Loader = styled.h1`
  font-size: 3.1875rem;
  font-family: Bigilla;
  color: #dcb3fc;
  margin: 0;
  line-height: 3.1875rem;
`;

export const Bbackground = styled.svg`
  position: absolute;
  top: 6em;
  left: -24em;
  z-index: -1;

  & path {
    fill: ${({ theme }) => theme.b};
    opacity: ${({ theme }) => theme.opacity};
  }
`;