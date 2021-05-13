import styled from 'styled-components'

export const GalleryWrapper = styled.div`
  width: 34.25rem;
  height: 34.25rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  z-index: 0;

  & img {
    display: inline;
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    width: 34.25rem;
    transform: scale(1.2);
    z-index: -1;
  }
`;